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
            showTotalPrice($('#price-detail'), outboundTicket, returnTicket);
        } );
    },
}

function showDetail($div, ticket, mode) {
    let flight = ticket.flight;
    let element = '';
    element += '<div class="row"><h3 class="col-md-4">' + mode + ' FLIGHT: <strong>'+ flight.flightNum +'</strong> </h3></div>';
    element += '<div class="row">';
    let depCity = flight.trip.cityByDepartureCity;
    let arrCity = flight.trip.cityByArrivalCity;
    element += '<h4 class="col-md-offset-2 col-md-4">From: <strong>'+ depCity.code + ', ' + depCity.name + ', ' + depCity.country +'</strong> </h4><h4 class="col-md-4"> To: <strong>'+ arrCity.code + ', ' + arrCity.name + ', ' + arrCity.country +'</strong></h4>';
    element += '</div>';
    element += '<div class="row">';
    element += '<h4 class="col-md-offset-2 col-md-4">Date of departure: <strong>' + flight.departureDate + '</strong> </h4><h4 class="col-md-4"> Departure Time: <strong>' + calculateTime(flight.trip.departureTime) + '</strong></h4>';
    element += '</div>';
    element += '<div class="row">';
    element += '<h4 class="col-md-offset-2 col-md-4">Date of arrival: <strong>' + calculateArrivalDate(flight.departureDate, flight.trip.departureTime, flight.trip.duration) + '</strong> </h4><h4 class="col-md-4"> Arrival Time: <strong>' + calculateArrivalTime(flight.trip.departureTime, flight.trip.duration) + '</strong></h4>';
    element += '</div>'; 
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
    let outboundT = outboundTicket.flight.trip;
    let returnT = returnTicket.flight.trip;
    let price1 = calculatePriceWithPassengers(outboundT.cost, outboundT.discount, outboundTicket.numPassengers);
    let price2 = calculatePriceWithPassengers(returnT.cost, returnT.discount, returnTicket.numPassengers);
    let element = '';
    element += '<div class="row"><h1 class="col-md-12"> Total Price: <strong>' + (price1 + price2) + '</strong> </h1></div>';
    $div.append($(element));
}
