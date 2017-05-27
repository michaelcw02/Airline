function IndexController(view) {
    this.IndexController(view);
}

IndexController.prototype = {
    IndexController: function (view) {
        this.view = view;
        this.airlineController = new AirlineController();
    },
    loadCities: function () {
        this.airlineController.getAllCities((results) => {
            fillWithCities(this.view.$('#cityFrom'), results);
            fillWithCities(this.view.$('#cityTo'), results);
        });
    },
    showCarousel: function () {

        this.airlineController.getAllDiscounts((results) => {
            for (let i in results) {
                let trip = results[i];
                let element = '<li data-target="#advertisement-carousel" data-slide-to="' + i + '"></li>';
                $(element).appendTo(this.view.$('.carousel-indicators'));
                element = '<div class="item"><img class="img-rounded" src="' + trip.discountImagePath + '">';
                element += '<div class="carousel-caption">';
                element += '<h1>' + trip.cityByDepartureCity.code + ' - ' + trip.cityByArrivalCity.code + '</h1>';
                element += '<h3>' + trip.discountDescription + '</h3>';
                element += '<h3><a href="">' + 'Limited offer for ' + trip.discount + '% </a></h3>';
                element += '</div>   </div>';
                $(element).appendTo(this.view.$('.carousel-inner'));
            }
            this.view.$('.item').first().addClass('active');
            this.view.$('.carousel-indicators > li').first().addClass('active');
            this.view.$('#advertisement-carousel').carousel();
        });

    },
    getAllFlights: function (callback) {
        this.airlineController.getAllFlights((result) => {
            callback(result);
        })
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
        let validateRegex = /\d{4}-\d{2}-\d{2}/;
        if (validateRegex.test(departDate)) {
            this.view.$('#returning').datepicker('destroy');
            this.view.$('#returning').datepicker({
                minDate: new Date(departDate.replace(/-/g, '\/')),
                dateFormat: "yy-mm-dd"
            });
        }
    },

    pageButtonsHandler: function (pageNum) {
        let results = this.airlineController.retrieveSearchFlights();
        this.showSearchFlights(pageNum, results);
    },
    cityFromHandlerHide: function () {
        //$('#search-container').hide();
        $('#flights, #pagination').hide();
    },
    cityFromHandlerShow: function () {
        //$('#search-container').show();
        $('#flights, #pagination').show();
    },
    setUpCitiesTo: function () {
        let cityFrom = this.view.$('#cityFrom').val();
        if (cityFrom != 0) {
            this.airlineController.searchTrips(cityFrom, (cities) => {
                fillWithCities(this.view.$('#cityTo'), cities);
            });
        }
    },
    moveToFlights: function () {
        $('html, body').animate({
            scrollTop: this.view.$('#flightsFormAdults').offset().top - 8
        }, '2000');
        this.cityFromHandlerShow();
    },
    searchFlights: function () {
        let cityFrom = this.view.$('#cityFrom').val();
        let cityTo = this.view.$('#cityTo').val();

        if (!isBlank(this.view.$('#departing')))
            var departDate = this.view.$('#departing').val();
        if (!isBlank(this.view.$('#returning')))
            var returnDate = this.view.$('#returning').val();

        cityFrom = (cityFrom != '0') ? cityFrom : 'All';
        cityTo = (cityTo != '0') ? cityTo : 'All';

        this.airlineController.searchFlights(cityFrom, cityTo, departDate, returnDate, (jsonResults) => {

            this.showFlightsResults(jsonResults);

        });
    },
    showFlightsResults: (jsonResults) => {
        let outboundFlights = jsonResults.outboundFlights;
        let returnFlights = jsonResults.returnFlights;
        $('.outbound-flights-div').fadeOut();
        $('.return-flights-div').fadeOut();

        if (outboundFlights != undefined) {
            showResult($('#outbound-flights'), outboundFlights);
            $('.outbound-flights-div').fadeIn();
            toDataTable($('.outbound-flights-table'));
        }
        if (returnFlights != undefined) {
            showResult($('#return-flights'), returnFlights);
            $('.return-flights-div').fadeIn();
            toDataTable($('.return-flights-table'));
        }
    },
    showSearchFlights: function (numPage = 1, flights) {
        this.view.$("#flights").empty();
        for (let i = 10 * (numPage - 1); i < (10 * numPage) && i < flights.length; i++) {
            let flight = flights[i];
            let element = '';
            element += '</div>';
            $(element).appendTo(this.view.$('.flights-container'));
        }
        this.printButtons(flights);
    },
    printButtons: function (flights) {
        let quantity = flights.length / 10;
        $("#pagination").empty();
        if (quantity > 1)
            for (let i = 0; i < quantity; i++) {
                let element = '<button type="button" class="btn btn-primary" id="page' + (i + 1) + '">' + (i + 1) + '</button>';
                $(element).appendTo(this.view.$('.pagination-container'));
                var idButton = "#page" + String(i + 1);
                this.view.addListenersButtons(idButton, (i + 1));
            }
    },
    
}


function showResult($table, jsonFlights) {
    $table.empty();
    $table.show();
    for (let i in jsonFlights) {
        toList($table, jsonFlights[i]);
    }
}

function toList($table, flight) {
    var trip = flight.trip;
    var tr = $('<tr></tr>', {
        "id": flight.flightNum,
        class: "tr-flights"
    });
    $(tr).appendTo($table);
    var td = '<td class="td-flights-info col-md-8">';
    td += '<div><h2><strong>' + trip.cityByDepartureCity.code + ' - ' + trip.cityByArrivalCity.code + '　　　　Flight: ' + flight.flightNum + '<strong></h2>';
    td += trip.cityByDepartureCity.name + ' to ' + trip.cityByArrivalCity.name + '<br>';
    td += '<h4> Date of departure: ' + flight.departureDate + '    Time of departure: ' + trip.departureTime + 'h </h4></div></td>';
    $(tr).append(td);
    var precio = flight.cost + " USD";
    td = '<td class="td-flights-price col-md-4"><h2>' + precio + '</h2></td>';
    $(tr).append(td);
    $('#' + flight.flightNum).on('click', () => {
        showFlightDetail(flight.flightNum, flight);
    })
}

function showFlightDetail (flightNum, flight) {
    new AirlineController().retrieveSearchFlights((results) => {
        if(flight !== undefined) {
            let trip = flight.trip;
            let element = '';
            element += '<div class="row">';
                element += '<h3 class="text-center">'+flight.flightNum+' - '+trip.cityByDepartureCity.code+' to '+trip.cityByArrivalCity.code + '</h3>'
            element += '</div>';
            element += '<div class="row">';
                element += '<div class="col-md-6 col-sm-12">';
                    element += '<h4>From: <i>' + trip.cityByDepartureCity.name + ', ' + trip.cityByDepartureCity.country + '</i></h4>';
                element += '</div>';
                element += '<div class="col-md-6 col-sm-12">';
                    element += '<h4>Date: <i>' + flight.departureDate + '</i> At: <i>' + trip.departureTime + '</i></h4>';
                element += '</div>';
            element += '</div>';
            element += '<div class="row">';
                element += '<div class="col-md-6 col-sm-12">';
                    element += '<h4>To: <i>' + trip.cityByArrivalCity.name + ', ' + trip.cityByArrivalCity.country + '</i></h4>';
                element += '</div>';
                element += '<div class="col-md-6 col-sm-12">';
                    element += '<h4>Date: <i>' + calculateArrivalDate(flight.departureDate) + '</i> At: <i>' + calculateArrivalTime(trip.departureTime) + '</i></h4>';
                element += '</div>';
            element += '</div>';
            element += '<div class="row">';
                element += '<div class="col-md-6 col-sm-12">';
                    element += '<h4>Duration: <i>' + flight.duration + '</i></h4>';
                element += '</div>';
                element += '<div class="col-md-6 col-sm-12">';
                    element += '<h4>Price: <i>' + calculatePrice(flight.price, trip.discount) + '</i></h4>';
                element += '</div>';
            element += '</div>';
            
            //modal settings
            showModal('flightDetail', 'Flight Information', element);
        }
    })
}

function getFlightCitiesTo(flights) {
    let citiesTo = [];
    for (let i in flights) {
        let flight = flights[i];
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
        element += '<span class=".h4">' + city.name + ', ' + city.country + '</span></option>';
        $(element).appendTo($select);
    }
    if (!$select.has('option').length > 1)
        $select.append('<option value="undefined">No Cities</option>');
}

function parseMillisToDate(millis) {
    let date = new Date(millis);
    return date.toDateString();
}

function isBlank(element) {
    if (!element.val())
        return true;
    return false;
}

function filterFlightByNum(flights, flightNum) {
    return flights.filter( (f) => { return (f.flightNum === flightNum); } );
}

//NOT IN USE
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