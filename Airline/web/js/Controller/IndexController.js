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
            this.airlineController.searchCitiesTo(cityFrom, (cities) => {
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
    validateSearch: function() {
        let isOK = true;

        $('#cityFrom').removeClass('invalid');
        $('#cityTo').removeClass('invalid');
        $('#departing').removeClass('invalid');
        $('#returning').removeClass('invalid');

        let cityFrom = $('#cityFrom').val();
        let cityTo = $('#cityTo').val();

        let msg = 'Hey!<br>'

        if(cityFrom == 0 || cityTo == 0) {
            isOK = false;
            msg += 'You must first select a route<br>';
            (cityFrom == 0) ? $('#cityFrom').addClass('invalid') : 0;
            (cityTo == 0) ? $('#cityTo').addClass('invalid') : 0;
        }
        
        let dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if( !dateRegex.test( $('#departing').val() ) ) {
            isOK = false;
            msg += 'You must first select a departure date<br>';
            $('#departing').addClass('invalid');
        }
        if($('#FlightMode').val() === 'RoundTrip') {
            if( !dateRegex.test( $('#returning').val() ) ) {
                msg += 'You must first select a return date<br>';
                isOK = false;
                $('#returning').addClass('invalid');
            }
        }
        if(!isOK) {
            event.preventDefault();
            showModal('myModal', '<h3>Info!...</h3>', '<h4>' + msg + '</h4>');
            setTimeout(() => hideModal('myModal'), 2500);
        }
        return isOK;
    },
    searchFlights: function () {
        let cityFrom = this.view.$('#cityFrom').val();
        let cityTo = this.view.$('#cityTo').val();
        
        let departDate = this.view.$('#departing').val();
        //'LET' IS MORE LIKE A LOCAL VARIABLE, WHILE 'VAR' IS A GLOBAL VARIABLE.
        if ($('#FlightMode').val() === 'RoundTrip')
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
        $('.confirmation-div').fadeOut();

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

        $('.confirmation-div').fadeIn();
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
    confirmReservation: function() {
        let mode = $('#FlightMode').val();
        let outboundSelection = $('#OutboundSelection').val();
        let returnSelection;
        let numPassengers = $('#flightsFormAdults').val();
        if(mode == 'RoundTrip') {
            returnSelection = $('#ReturnSelection').val();
        }
        this.airlineController.confirmReservation(mode, numPassengers, (response) => {
            response = response.split('~');
            if(response[0] == 'S') {
                //REDIRECTS TO TICKETS PAGE FOR FURTHER SETTINGS ON TICKETS AND PASSENGERS
                showModal('myModal', 'Info!...', 'Redirecting...');
                setTimeout( () => { /*window.location.replace("/");*/ }, 1500 );
                
            }
            if(response[0] == 'E') {
                if(response[1] == '1') {
                    //SELECTION ERROR
                    showModal('myModal', 'Info!...', response[2]);
                    setTimeout( () => { $('#myModal').modal("hide"); }, 1500 );
                }
                if(response[1] == '2') {
                    //USER ERROR
                    showModal('myModal', 'Info!...', response[2]);
                    setTimeout( () => { location.reload(true); }, 1500 );
                }
            }
        } )
    },
    cancelReservation: function() {
    }
     
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
    td += '<div><h2><strong>' + trip.cityByDepartureCity.code + ' - ' + trip.cityByArrivalCity.code + '　　　Flight: ' + flight.flightNum + '<strong></h2>';
    td += trip.cityByDepartureCity.name + ' to ' + trip.cityByArrivalCity.name + '<br>';
    td += '<h4> Date of departure: ' + flight.departureDate + '    Time of departure: ' + trip.departureTime + 'h </h4></div></td>';
    $(tr).append(td);
    var precio = calculatePrice(trip.cost, trip.discount) + " USD";
    td = '<td class="td-flights-price col-md-4"><h2>' + precio + '</h2></td>';
    $(tr).append(td);
    $('#' + flight.flightNum).on('click', () => {
        showFlightDetail(flight.flightNum, flight, ($table.attr('id')[0] == 'o') ? 'Outbound' : 'Return');
    })
}

function showFlightDetail (flightNum, flight, mode) {
    new AirlineController().retrieveSearchFlights((results) => {
        if(flight !== undefined) {
            let trip = flight.trip;
            let element = '';
            element += '<div class="row">';
                element += '<h3 class="text-center">'+flight.flightNum+' - '+trip.cityByDepartureCity.code+' to '+trip.cityByArrivalCity.code + '</h3>'
            element += '</div>';
            element += '<div class="row">';
                element += '<div class="col-md-6 col-sm-12">';
                    element += '<h4 class="text-center">From: <i>' + trip.cityByDepartureCity.name + ', ' + trip.cityByDepartureCity.country + '</i></h4>';
                element += '</div>';
                element += '<div class="col-md-6 col-sm-12">';
                    element += '<h4 class="text-center">Date: <i>' + flight.departureDate + '</i> At: <i>' + trip.departureTime + 'h </i></h4>';
                element += '</div>';
            element += '</div>';
            element += '<div class="row">';
                element += '<div class="col-md-6 col-sm-12">';
                    element += '<h4 class="text-center">To: <i>' + trip.cityByArrivalCity.name + ', ' + trip.cityByArrivalCity.country + '</i></h4>';
                element += '</div>';
                element += '<div class="col-md-6 col-sm-12">';
                    element += '<h4 class="text-center">Date: <i>' + calculateArrivalDate(flight.departureDate, flight.departureTime) + '</i> At: <i>' + calculateArrivalTime(trip.departureTime) + 'h </i></h4>';
                element += '</div>';
            element += '</div>';
            element += '<div class="row">';
                element += '<div class="col-md-6 col-sm-12">';
                    element += '<h4 class="text-center">Duration: <i>' + calculateDuration(trip.duration) + '</i></h4>';
                element += '</div>';
                element += '<div class="col-md-6 col-sm-12">';
                    element += '<h4 class="text-center">Price: <i>' + calculatePrice(trip.cost, trip.discount) + ' USD</i></h4>';
                element += '</div>';
            element += '</div>';

            element += '<form class="form" role="form" id="flightDetailForm">';
                element += '<div class="form-group text-center">';
                    element += '<button type="button" class="btn btn-success" id="reserve">Reserve</button> ';
                    element += ' <button type="button" class="btn btn-danger" id="cancel">Cancel</button>';
                element += '</div>';

                element += '<div class="form-group height25" >';
                    element += '<div class="alert alert-success hiddenDiv" id="messageResult">';
                        element += '<strong id="messageResultTitle">Info!... </strong>';
                        element += '<span id="messageResultMessage">This alert box could indicate a neutral informative change or action.</span>';
                    element += '</div>';
                element += '</div>';
            element += '</form>';
            
            //modal settings
            showModal('flightDetail', mode + ' Flight Information', element);
            $('#reserve').on('click', (event) => {
                showMessage('messageResult', 'Info!...', 'Reserving Flight!');
                new AirlineController().reserveFlight(flight.flightNum, mode, (data) => {
                    if(data.response[0] == 'S') {
                        let response = data.response.split('~')[1];
                        showMessage('messageResult', 'Info!...', response, 'success');
                        setTimeout( () => { $('#flightDetail').modal("hide"); }, 1500 );
                    }
                    else {
                        let response = data.response.split('~')[1];
                        showMessage('messageResult', 'Warning!...', response, 'warning');
                        setTimeout( () => { $('#flightDetail').modal("hide"); }, 1500 );
                    }
                });
            });
            $('#cancel').on('click', (event) => {
                $('#flightDetail').modal('hide');
                $('#flightDetailMessage').html('');
            })
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