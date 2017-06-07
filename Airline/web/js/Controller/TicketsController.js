function TicketsController(view) {
    this.TicketsController(view);
}

TicketsController.prototype = {
    TicketsController: function (view) {
        this.view = view;
        this.airlineController = new AirlineController();
    },
    loadFlightDetails: function () {
        this.airlineController.getReservedFlights((reservedFlights) => {
            let outboundTicket = reservedFlights.outboundTicket;
            showDetail($('#outbound-flight-detail'), outboundTicket, 'OUTBOUND');
            $('#OUTBOUNDSeats').click(() => {
                showSeatsDetail(outboundTicket, 'OUTBOUND');
            });
            if (reservedFlights.returnTicket) {
                var returnTicket = reservedFlights.returnTicket;
                showDetail($('#return-flight-detail'), returnTicket, 'RETURN');
                $('#RETURNSeats').click(() => {
                    showSeatsDetail(returnTicket, 'RETURN');
                });
            }
            showTotalPrice($('#price-detail'), outboundTicket, returnTicket);
        });
    },
    addPassengers: function () {
        this.airlineController.retrieveReservedFlights((reservedFlights) => {
            let outboundTicket = reservedFlights.outboundTicket;
            showPassengersInfo(outboundTicket);
        });
    },
    confirmReservation: function () {

    },
    cancelReservation: function () {
        window.location.replace("/Airline");
    }
}

function showDetail($div, ticket, mode) {
    let flight = ticket.flight;
    let element = '';
    element += '<div class="row"><h3 class="col-md-4">' + mode + ' FLIGHT: <strong>' + flight.flightNum + '</strong> </h3>';
    element += '<h3><button type="button" class="btn btn-success col-md-offset-5 col-md-2" id="' + mode + 'Seats">Choose Seats</button></h3></div>';
    element += '<div class="row">';
    let depCity = flight.trip.cityByDepartureCity;
    let arrCity = flight.trip.cityByArrivalCity;
    element += '<h4 class="col-md-offset-2 col-md-4">From: <strong>' + depCity.code + ', ' + depCity.name + ', ' + depCity.country + '</strong> </h4><h4 class="col-md-4"> To: <strong>' + arrCity.code + ', ' + arrCity.name + ', ' + arrCity.country + '</strong></h4>';
    element += '</div>';
    element += '<div class="row">';
    element += '<h4 class="col-md-offset-2 col-md-4">Date of departure: <strong>' + flight.departureDate + '</strong> </h4><h4 class="col-md-4"> Departure Time: <strong>' + calculateTime(flight.trip.departureTime) + '</strong></h4>';
    element += '</div>';
    element += '<div class="row">';
    element += '<h4 class="col-md-offset-2 col-md-4">Date of arrival: <strong>' + calculateArrivalDate(flight.departureDate, flight.trip.departureTime, flight.trip.duration) + '</strong> </h4><h4 class="col-md-4"> Arrival Time: <strong>' + calculateArrivalTime(flight.trip.departureTime, flight.trip.duration) + '</strong></h4>';
    element += '</div>';
    element += '<div class="row"> <h4 class="col-md-offset-4 col-md-4">Duration: <strong>' + calculateDuration(flight.trip.duration) + '</strong></h4></div>'
    element += '<hr>';
    element += '<div class="row">';
    element += '<h4 class="col-md-offset-2 col-md-4"><strong> Base Price: </strong> ' + flight.trip.cost + ' USD</h4><h4 class="col-md-4"><strong> Discount: </strong> ' + flight.trip.discount + ' %</h4>';
    element += '</div>';
    element += '<div class="row">';
    element += '<h4 class="col-md-12"><strong> Passengers: </strong> ' + ticket.numPassengers + '</h4>';
    element += '</div>';
    element += '<div class="row"><h1 class="col-md-12"><strong> Price for ' + mode + ' tickets: ' + calculatePriceWithPassengers(flight.trip.cost, flight.trip.discount, ticket.numPassengers) + ' USD</strong> </h1></div>';
    $div.append($(element));
}

function showTotalPrice($div, outboundTicket, returnTicket) {
    var price2;
    let outboundT = outboundTicket.flight.trip;
    let price1 = calculatePriceWithPassengers(outboundT.cost, outboundT.discount, outboundTicket.numPassengers);
    if (returnTicket != undefined) {
        var returnT = returnTicket.flight.trip;
        price2 = calculatePriceWithPassengers(returnT.cost, returnT.discount, returnTicket.numPassengers);
    } else {
        price2 = 0;
    }
    let element = '';
    element += '<div class="row"><h1 class="col-md-12"> Total Price: <strong>' + (price1 + price2) + '</strong> USD </h1></div>';
    $div.append($(element));
}

function showPassengersInfo(outboundTicket) {
    new AirlineController().getPassengerList((list) => {
        let element = '';
        element += '<br>';
        element += '<div class="bs-example bs-example-tabs">';
        element += '<ul class="nav nav-tabs">';
        element += '<li class="active"><a href="#section1" id="passenger1" data-toggle="tab">Passenger 1</a></li>';
        for (var i = 1; i < outboundTicket.numPassengers; i++)
            element += '<li><a href="#section' + (i + 1) + '" id="passenger' + (i + 1) + '" data-toggle="tab">Passenger ' + (i + 1) + '</a></li>';
        element += '</ul>';
        element += '</div>';

        element += '<div class="modal-body">';
        element += '<div class="tab-content">';
        for (var i = 0; i < outboundTicket.numPassengers; i++) {
            let passenger = (list == undefined) ? undefined : list[i];
            if (i == 0)
                element += '<div class="tab-pane active in" id="section' + (i + 1) + '">';
            else
                element += '<div class="tab-pane fade in" id="section' + (i + 1) + '">';

            element += '<form id="formPassenger' + (i + 1) + '">';
            element += '<br><div class="row">';
            element += '<div class="form-group text-center">';
            element += '<div class="col-sm-offset-3 col-sm-2 text-center"><strong>Passport: </strong></div>';
            let passport = (passenger == undefined) ? '' : passenger.id.passport;
            element += '<div class="col-sm-4"><input type="text" name="passport" class="form-control" placeholder="8-8888-8888" value="' + passport + '"></div>';
            element += '</div>';
            element += '</div><br>';
            element += '<div class="row">';
            element += '<div class="form-group text-center">';
            element += '<div class="col-sm-offset-3 col-sm-2 text-center"><strong>Name:</strong></div>';
            let name = (passenger == undefined) ? '' : passenger.name;
            element += '<div class="col-sm-4"><input type="text" name="name" class="form-control" placeholder="John" value="' + name + '"></div>';
            element += '</div>';
            element += '</div><br>';
            element += '<div class="row">';
            element += '<div class="form-group text-center">';
            element += '<div class="col-sm-offset-3 col-sm-2 text-center"><strong>Lastname: </strong></div>';
            let lastname = (passenger == undefined) ? '' : passenger.lastname;
            element += '<div class="col-sm-4"><input type="text" name="lastname" class="form-control" placeholder="Doe" value="' + lastname + '"></div>';
            element += '</div>';
            element += '</div><br><br>';

            element += '<form class="form" role="form" id="PassengersForm">';
            element += '<div class="form-group text-center">';
            element += '<button type="button" class="btn btn-success" id="addPassenger' + (i + 1) + '">Add Passenger</button> ';
            element += ' <button type="button" class="btn btn-danger" id="cancel' + (i + 1) + '">Cancel</button>';
            element += '</div>';

            element += '<div class="form-group height25" >';
            element += '<div class="alert alert-success hiddenDiv" id="messageResult">';
            element += '<strong id="messageResultTitle">Info!... </strong>';
            element += '<span id="messageResultMessage">This alert box could indicate a neutral informative change or action.</span>';
            element += '</div>';
            element += '</div>';
            element += '</form>';

            element += '</form>';
            element += '</div>';
        }
        element += '</div>';
        element += '</div>';

        //modal settings
        showModal('passengersInfo', ' Passengers Information', element);
        for (var i = 0; i < outboundTicket.numPassengers; i++) {
            var form = "formPassenger" + (i + 1);
            var buttonAdd = "#addPassenger" + (i + 1);
            var buttonCancel = "#cancel" + (i + 1);
            $(buttonAdd).click(() => {
                let pass = {
                    passport: document.getElementById(form).elements.namedItem("passport").value,
                    name: document.getElementById(form).elements.namedItem("name").value,
                    lastname: document.getElementById(form).elements.namedItem("lastname").value
                }
                new AirlineController().addPassenger(pass);
            })
            $(buttonCancel).on('click', (event) => {
                $('#passengersInfo').modal('hide');
                $('#passengersInfoMessage').html('');
            })
        }
    })
}

function showSeatsDetail(ticket, mode) {
    let rows = ticket.flight.airplane.typeairplane.qtyOfRows;
    let seatsPerRow = ticket.flight.airplane.typeairplane.seatsPerRow;
    let element = '';
    element += '<div class="bs-example bs-example-tabs">';
    element += '    <ul class="nav nav-tabs">';
    element += '        <li class="active"><a href="#seatSection1" id="seatPassenger1" data-toggle="tab">Passenger 1 Seat</a></li>';
    for (let i = 1; i < ticket.numPassengers; i++)
        element += '    <li><a href="#section' + (i + 1) + '" id="seatPassenger' + (i + 1) + '" data-toggle="tab">Passenger ' + (i + 1) + ' Seat</a></li>';
    element += '    </ul>';
    element += '</div>';
    element += '<div class="tab-content">';
    for (let i = 0; i < ticket.numPassengers; i++) {
        if (i == 0)
            element += '<div class="tab-pane active in" id="seatSection1' + (i + 1) + '">';
        else
            element += '<div class="tab-pane fade in" id="seatSection1' + (i + 1) + '">';

        element += '<br><div class="row">';
        element += '    <div class="col-md-offset-2 col-md-4"><h4>The seat you selected is: <strong id="selection'+ (i+1) +'">None</strong></h4></div>';
        element += '    <div class="col-md-offset-3 col-md-2"><button type="button" class="btn btn-success" id="seatSelectionBtn' + (i + 1) + '">Select Seat</button> </div>';
        element += '    <input type="hidden" value="None" id="seatSelection'+ (i+1) +'"/>';
        element += '</div>';
        element += '<form id="formSeatPassenger' + (i + 1) + '">';
        element += drawSeats(ticket.flight, rows, seatsPerRow);
        element += '</form>'
    }
    element += '</div>';
    showModal('seatBooking', 'Seats Selection', element);
    for (let i = 0; i < ticket.numPassengers; i++) {
        $('#formSeatPassenger1 .seat input[type=checkbox]').click( (e) => { 
            $('#formSeatPassenger1 .seat input[type=checkbox]').prop('checked', false); 
            $(e.target).prop('checked', true);
            let selection = $(e.target).attr('id');
            $('#selection' + (i + 1)).text(selection);
            $('#seatSelection' + (i + 1)).val(selection);
        } );
        $('#seatSelectionBtn' + (i + 1)).click( () => {
            let regex = /^[0-9]{1,3}[a-iA-I]{1}/;
            let selection = $('#seatSelection' + (i + 1)).val();
            if(regex.test(selection)) {
                //STILL MISSING CALLBACK, THINK ABOUT IT LATER..    
                new AirlineController().addPassengerSeat(i, selection, ticket.flight.flightNum, mode);
            }
        } )

    }

}

function drawSeats(flight, rows, seatsPerRow) {

    let element = '';
    element += '<div class="plane">';
    element += '    <div class="cockpit">';
    element += '        <h1>Please select a seat</h1>';
    element += '    </div>';
    element += '    <div class="exit exit--front fuselage"></div>';
    element += '    <ol class="cabin fuselage">';
    for (let i = 0; i < rows; i++) {
        element += '<li class="row row--' + (i + 1) + '">'
        element += '    <ol class="seats" type="A">';
        for (let j = 0; j < seatsPerRow; j++) {
            let isDisabled = false;
            let disabled = (isDisabled) ? 'Disabled' : '';
            let seatID = (isDisabled) ? 'Disabled' : (i + 1) + String.fromCharCode(65 + j);

            element += '<li class="seat">';
            element += '    <input type="checkbox" ' + disabled + ' id="' + seatID + '" />';
            element += '    <label for="' + seatID + '">' + seatID + '</label>';
            element += '</li>';
        }
        element += '    </ol>';
        element += '</li>';
    }
    element += '    </ol>';
    element += '    <div class="exit exit--back fuselage"></div>';
    element += '</div>';
    return element;
}

function showDiv(div) {
    if (document.getElementById) {
        var aux = document.getElementById(div).style;
        aux.display = aux.display ? "" : "block";
    }
}

function active(item) {
    elemento = $(item).attr('id');
    document.getElementById(elemento).className = 'active';
}