function TicketsController(view) {
    this.TicketsController(view);
}

TicketsController.prototype = {
    TicketsController: function (view) {
        this.view = view;
        this.airlineController = new AirlineController();
    },
    loadFlightDetails: function () {
        this.airlineController.getReservedFlights( (reservedFlights) => {
            console.log(reservedFlights);
            let outboundTicket = reservedFlights.outboundTripInfo[0];
            let returnTicket = reservedFlights.returnTripInfo[0];
            showDetail($('#outbound-flight-detail'), outboundTicket, 'OUTBOUND');
            showDetail($('#return-flight-detail'), returnTicket, 'RETURN');
        } );
    },
}


function showDetail($div, ticket, mode) {
    let flight = ticket.flight;
    let element = '';
    element += '<h3>' + mode + ' FLIGHT: <strong>'+ flight.flightNum +'</strong> </h3>';
    element += '<div class="row">';
    let depCity = flight.trip.cityByDepartureCity;
    let arrCity = flight.trip.cityByArrivalCity;
    element += '<h4 class="col-md-offset-3">From: <strong>'+ depCity.code + ', ' + depCity.name + ', ' + depCity.country +'</strong> - To: <strong>'+ arrCity.code + ', ' + arrCity.name + ', ' + arrCity.country +'</strong></h4>';
    element += '</div>';
    element += '<div class="row">';
    element += '<h4 class="col-md-offset-3">Date of departure: <strong>' + flight.departureDate + '</strong> - Departure Time: <strong>' + calculateTime(flight.trip.departureTime) + '</strong></h4>';
    element += '</div>';
    element += '<div class="row">';
    element += '<h4 class="col-md-offset-3">Date of arrival: <strong>' + calculateArrivalDate(flight.departureDate, flight.trip.departureTime, flight.trip.duration) + '</strong> - Arrival Time: <strong>' + calculateArrivalTime(flight.trip.departureTime, flight.trip.duration) + '</strong></h4>';
    element += '</div>'
    $div.append($(element));
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
