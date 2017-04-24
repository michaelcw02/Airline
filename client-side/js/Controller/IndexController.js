function IndexController(view) {
    this.IndexController(view);
}

IndexController.prototype = {
    IndexController: function (view) {
        this.view = view;
        this.airlineController = new AirlineController();
    },
    loadCities: function () {
        let cities = this.airlineController.cities();
        fillWithCities(this.view.$('#cityFrom'), cities);
        fillWithCities(this.view.$('#cityTo'), cities);
    },
    showCarousel: function () {
        discounts = this.airlineController.discounts();
        for (let i in discounts) {
            let element = '<li data-target="#advertisement-carousel" data-slide-to="' + i + '"></li>';
            $(element).appendTo(this.view.$('.carousel-indicators'));
            element = '<div class="item"><img class="img-rounded" src="' + discounts[i].path + '">';
            element += '<div class="carousel-caption">';
            let flight = discounts[i].flight;
            element += '<h1>' + flight.title(' - ') + '</h1>';
            element += '<h3>' + discounts[i].description + '</h3>';
            element += '<h3><a href="">' + 'Limited offer for ' + discounts[i].discount + '% </a></h3>'
            element += '</div>   </div>';
            $(element).appendTo(this.view.$('.carousel-inner'));
        }
        this.view.$('.item').first().addClass('active');
        this.view.$('.carousel-indicators > li').first().addClass('active');
        this.view.$('#advertisement-carousel').carousel();
    },
    showSearchFlights: function (numPage = 1, flights = this.airlineController.flights()) {
        
        for (let i = 10 * (numPage - 1); i < (10 * numPage) && i < flights.length; i++) {
            let element = '<div class="row hoverDiv">';
            element += '<div class= "col-md-8 info-Flights"><h3><strong>' + flights[i].title(' - ') + '<strong></h3>';
            element += 'From: ' + flights[i].getCityFrom().name + '<br>To: ' + flights[i].getCityTo().name + '</div>';
            element += '<div class="col-md-4"><h2><strong> $' + flights[i].price + '<strong></h2></div>';
            element += '</div>';
            $(element).appendTo(this.view.$('.flights-container'));
        }
        
    },
    printButtons: function (flights = this.airlineController.flights()) {
        let quantity = flights.length / 10;
        for (let i = 0; i < quantity; i++) {
            let element = '<button type="button" class="btn btn-primary" id="page' + (i + 1) + '">' + (i + 1) + '</button>';
            $(element).appendTo(this.view.$('.pagination'));
            var idButton = "#page" + String(i + 1);
            this.view.addListenersButtons(idButton, (i + 1));
        }
    },
    hideReturning: function () {
        this.view.$("#returning").hide();
    },
    showReturning: function () {
        this.view.$("#returning").show();
    },
    increaseAdults: function () {
        var valueSelected = this.view.$('select[id=flightsFormAdults]').val();
        if (valueSelected != "6") {
            var newValue = parseInt(valueSelected);
            this.view.$('select[id=flightsFormAdults]').val(newValue + 1);
        }
    },
    decreaseAdults: function () {
        var valueSelected = this.view.$('select[id=flightsFormAdults]').val();
        if (valueSelected != "1") {
            var newValue = parseInt(valueSelected);
            this.view.$('select[id=flightsFormAdults]').val(newValue - 1);
        }
    },
    setMinReturnDate: function () {
        let departDate = this.view.$('#departing').val();
        let validateRegex = /\d{2}\/\d{2}\/\d{4}/;
        if (validateRegex.test(departDate)) {
            this.view.$('#returning').datepicker('destroy');
            this.view.$('#returning').datepicker({ minDate: new Date(departDate) });
        }
    },
    /*searchFlights: function() { 
      let flights = this.airlineController.flights();
      let cityFrom = this.view.$('#cityFrom').code; 
      let cityTo = this.view.$('#cityTo').code;
      this.airlineController.search = flights.filter(
          function (x) { return ( (x.cityFrom == flights.cityFrom) && (x.cityTo == flights.cityTo) ) }
      );
      this.view.showSearchFlights();
    },*/
    setUpCitiesFrom: function () {

    },
    setUpCitiesTo: function () {
        let cityFrom = this.view.$('#cityFrom').val();
        this.airlineController.searchFlights(cityFrom);
        let results = this.airlineController.getSearch(cityFrom);
        let cities = getFlightCitiesTo(results);
        fillWithCities( this.view.$('#cityTo'), cities );
    },
    moveToFlights: function () {
        $('html, body').animate({
            scrollTop: this.view.$('#flightsFormAdults').offset().top - 8
        }, '2000');
    }
}

function onlyShowTen() {

}

function getFlightCitiesTo(flights) {
    let citiesTo = [];
    for(let i in flights) {
        let flight = flights[i];
        console.log(flight);
        console.log(flight.cityTo);
        citiesTo.push(flight.cityTo);
    }
    return citiesTo;
}

function fillWithCities($select, cities) {
    $select.find('option').remove().end();
    $select.append('<option value="0">Cities</option>');
    for (let i in cities) {
        let city = cities[i];
        let element = '';
        element += '<option value="' + city.code + '">';
        element += '<span class=".h3">' + city.code + '</span> - ';
        element += '<span class=".h4">' + city.nameCountry(", ") + '</span></option>';
        $(element).appendTo($select);
    }
    if( !$select.has('option').length > 1 )
        $select.append('<option value="undefined">No Cities</option>');
}

function setUpWidget(view, element) {
    $.widget("custom.combobox", {
        _create: function () {
            this.wrapper = $("<span>")
                .addClass("custom-combobox")
                .insertAfter(this.element);
            this.element.hide();
            this._createAutocomplete();
            this._createShowAllButton();
        },

        _createAutocomplete: function () {
            var selected = this.element.children(":selected"),
                value = selected.val() ? selected.text() : "";

            this.input = $("<input>")
                .appendTo(this.wrapper)
                .val(value)
                .attr("title", "")
                .addClass("custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left")
                .autocomplete({
                    delay: 0,
                    minLength: 0,
                    source: $.proxy(this, "_source")
                })
                .tooltip({
                    classes: {
                        "ui-tooltip": "ui-state-highlight"
                    }
                });

            this._on(this.input, {
                autocompleteselect: function (event, ui) {
                    ui.item.option.selected = true;
                    this._trigger("select", event, {
                        item: ui.item.option
                    });
                },

                autocompletechange: "_removeIfInvalid"
            });
        },

        _createShowAllButton: function () {
            var input = this.input,
                wasOpen = false;

            $("<a>")
                .attr("tabIndex", -1)
                .attr("title", "Show All Items")
                .tooltip()
                .appendTo(this.wrapper)
                .button({
                    icons: {
                        primary: "ui-icon-triangle-1-s"
                    },
                    text: false
                })
                .removeClass("ui-corner-all")
                .addClass("custom-combobox-toggle ui-corner-right")
                .on("mousedown", function () {
                    wasOpen = input.autocomplete("widget").is(":visible");
                })
                .on("click", function () {
                    input.trigger("focus");

                    // Close if already visible
                    if (wasOpen) {
                        return;
                    }

                    // Pass empty string as value to search for, displaying all results
                    input.autocomplete("search", "");
                });
        },

        _source: function (request, response) {
            var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
            response(this.element.children("option").map(function () {
                var text = $(this).text();
                if (this.value && (!request.term || matcher.test(text)))
                    return {
                        label: text,
                        value: text,
                        option: this
                    };
            }));
        },

        _removeIfInvalid: function (event, ui) {

            // Selected an item, nothing to do
            if (ui.item) {
                return;
            }

            // Search for a match (case-insensitive)
            var value = this.input.val(),
                valueLowerCase = value.toLowerCase(),
                valid = false;
            this.element.children("option").each(function () {
                if ($(this).text().toLowerCase() === valueLowerCase) {
                    this.selected = valid = true;
                    return false;
                }
            });

            // Found a match, nothing to do
            if (valid) {
                return;
            }

            // Remove invalid value
            this.input
                .val("")
                .attr("title", value + " didn't match any item")
                .tooltip("open");
            this.element.val("");
            this._delay(function () {
                this.input.tooltip("close").attr("title", "");
            }, 2500);
            this.input.autocomplete("instance").term = "";
        },

        _destroy: function () {
            this.wrapper.remove();
            this.element.show();
        }
    });

    $("#combobox").combobox();
}