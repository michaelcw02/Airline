function SummaryController(view) {
    this.SummaryController(view);
}

SummaryController.prototype = {
    SummaryController: function (view) {
        this.view = view;
        this.airlineController = new AirlineController();
    },
    loadDetails: function () {
        this.airlineController.getReservedFlights((reservedFlights) => {
            let outboundTicket = reservedFlights.outboundTicket;
            showDetail($('#outbound-flight-detail'), outboundTicket, 'OUTBOUND');
            this.airlineController.getPassengerList('OUTBOUND',(passengers) => {
                showPassengers($('#outbound-flight-detail'), passengers);
            });
            if (reservedFlights.returnTicket) {
                var returnTicket = reservedFlights.returnTicket;
                showDetail($('#return-flight-detail'), returnTicket, 'RETURN');
                this.airlineController.getPassengerList('RETURN',(passengers) => {
                    showPassengers($('#return-flight-detail'), passengers);
                });
            }
            showTotalPrice($('#price-detail'), outboundTicket, returnTicket);
        });
    },
    confirmPayment: function () {
        showModal("paymentModal");
    },
    cancelPayment: function () {
        window.location.replace("/Airline");
    },
    generatePDF: function () {
        window.location.replace("/Airline/PDFServlet");
    }
}

function showDetail($div, ticket, mode) {
    let flight = ticket.flight;
    let element = '';
    element += '<div class="row"><h3 class="col-md-4">' + mode + ' FLIGHT: <strong>' + flight.flightNum + '</strong> </h3></div>';
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
    element += '<div class="row"><h1 class="col-md-12"><strong> Price for ' + mode + ' tickets: ' + calculatePriceWithPassengers(flight.trip.cost, flight.trip.discount, ticket.numPassengers) + ' USD</strong> </h1></div>';
    $div.append($(element));
}

function showPassengers($div, passengers) {
    let element = '';
    element += '<hr>';
    element += '<div class="row"><h3 class="col-md-4">PASSENGERS</h3></div>';
    for (let i in passengers) {
        let passenger = passengers[i];
        element += '<div class="row">';
        element += '<h3 class="col-md-offset-2 col-md-4"><strong>' + passenger.id.passport + '</strong>, ' + passenger.name + ' ' + passenger.lastname + '</h3><h3 class="col-md-4"> Seat: <strong>' + passenger.seat + '</strong></h3>';
        element += '</div>';
    }
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
