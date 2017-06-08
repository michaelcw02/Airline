function TicketAdmController(view) {
    this.TicketAdmController(view);
}
TicketAdmController.prototype = {
    TicketAdmController: function (view) {
        this.view = view;
        this.airlineController = new AirlineController();
    },
    loadFlights: function () {
        this.airlineController.getAllFlights((results) => {
            console.log(results);
            this.view.$('#flightsAvailable').find('option').remove().end();
            this.view.$('#flightsAvailable').append('<option value="0">Flights</option>');
            for (let i in results) {
                let flight = results[i];
                let element = '';
                element += '<option value="' + flight.flightNum + '">';
                element += '<span class=".h4">' + flight.flightNum + '- Airplane:' + flight.airplane.idAirplane + '- Trip:' + flight.trip.idTrip + '- Departure:' + flight.departureDate + '- AvailableSeats:' + flight.availableSeats + '</span></option>';
                $(element).appendTo(this.view.$('#flightsAvailable'));
                if (!this.view.$('#flightsAvailable').has('option').length > 1)
                    this.view.$('#flightsAvailable').append('<option value="undefined">No Flights</option>');
            }
        });
    },
    getTicketByFlight: function () {
        $("#tableTickets").empty();
        var flight_num = this.view.$('#flightsAvailable').val();
        if (!isSomethingBlank()) {
            this.airlineController.getTicketsByFlight(flight_num, (jsonResults) => {
                console.log(jsonResults);
                $("#tableTickets").html("");
                var head = $("<thead />");
                var row = $("<tr/>");
                head.append(row);
                $("#tableTickets").append(head);
                row.append($("<th><b>TICKET NUMBER</b></th>"));
                row.append($("<th><b>FLIGHT NUMBER</b></th>"));
                row.append($("<th><b>NUMBER OF PASSENGERS</b></th>"));
                var row = $("<tr />");
                for (let i in jsonResults) {
                    let ticket = jsonResults[i];
                    var row = $("<tr/>");
                    $("#tableTickets").append(row);
                    row.append($("<td>" + ticket.number + "</td>"));
                    row.append($("<td>" + ticket.flight.flightNum + "</td>"));
                    row.append($("<td>" + ticket.numPassengers + "</td>"));
                }

            });
        } else {
            showModal("myModal", "ALERT", "Please select a flight");
            setTimeout(() => hideModal('myModal'), 1500);
        }
    },

}

function isSomethingBlank() {
    let error = false;
    if ($('#flightsAvailable').val() == "0") {
        error = true;
    }
    return error;
}






