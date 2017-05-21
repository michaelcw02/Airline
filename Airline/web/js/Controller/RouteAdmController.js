function RouteAdmController(view) {
    this.RouteAdmController(view);
}
RouteAdmController.prototype = {
   RouteAdmController: function (view) {
        this.view = view;
        this.airlineController = new AirlineController();
    },
   searchTripsByCode: function () {
        let idTrip= this.view.$('#search').val();
        this.airlineController.getTripByCode(idTrip, (jsonResults) => {
        $("#tableRoute").html("");
        var head = $("<thead />");
        var row = $("<tr/>");
        head.append(row);
        $("#tableRoute").append(head);
        row.append($("<th><b>IDENTIFIER</b></th>"));
        row.append($("<th><b>ARRIVAL CITY</b></th>"));
        row.append($("<th><b>DEPARTURE CITY</b></th>"));
        row.append($("<th><b>DISTANCE</b></th>"));
        row.append($("<th><b>DURATION</b></th>"));
        row.append($("<th><b>DEPARTURE TIME</th>"));
        row.append($("<th><b>ACTION</th>"));
       var row = $("<tr />");
        $("#tableRoute").append(row);
        row.append($("<td>" + jsonResults.idTrip + "</td>"));
        row.append($("<td>" + jsonResults.cityByArrivalCity.code+ "</td>"));
        row.append($("<td>" + jsonResults.cityByDepartureCity.code + "</td>"));
        row.append($("<td>" + jsonResults.distance + "</td>"));
        row.append($("<td>" + jsonResults.duration+ "</td>"));
        row.append($("<td>" + jsonResults.departureTime + "</td>"));
        row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="alert(\'modify\');">' +
                '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                '</button>' +
                '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="alert(\'eliminate\');">' +
                '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                '</button></td>'));
        });
        
    },
    cleanForm: () => {
        $('#identifier').focus();
        $("#identifier").removeAttr("readonly");
        $("#routeAction").val("addRoute");
        $('#formRoute').trigger("reset");
    },

}



