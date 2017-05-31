function TicketsController(view) {
    this.TicketsController(view);
}

TicketsController.prototype = {
    TicketsController: function (view) {
        this.view = view;
        this.airlineController = new AirlineController();
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
    searchFlights: function () {
        
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
