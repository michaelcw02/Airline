function RouteAdmController(view) {
    this.RouteAdmController(view);
}
RouteAdmController.prototype = {
    RouteAdmController: function (view) {
        this.view = view;
        this.airlineController = new AirlineController();
    },
    loadCities: function () {
        this.airlineController.getAllCities((results) => {
            fillWithCities(this.view.$('#arrivalCity'), results);
            fillWithCities(this.view.$('#departureCity'), results);
        });
    },
    searchTripsByCode: function () {
        let idTrip = this.view.$('#search').val();
        this.airlineController.getTripByCode(idTrip, (jsonResults) => {
            console.log(jsonResults);
            $("#tableRoute").html("");
            var head = $("<thead />");
            var row = $("<tr/>");
            head.append(row);
            $("#tableRoute").append(head);
            row.append($("<th><b>IDENTIFIER</b></th>"));
            row.append($("<th><b>DEPARTURE CITY</b></th>"));
            row.append($("<th><b>ARRIVAL CITY</b></th>"));
            row.append($("<th><b>DISTANCE</b></th>"));
            row.append($("<th><b>DURATION</b></th>"));
            row.append($("<th><b>DEPARTURE TIME</th>"));
            row.append($("<th><b>DEPARTURE DAY</th>"));
            row.append($("<th><b>COST</th>"));
            row.append($("<th><b>DISCOUNT</th>"));
            row.append($("<th><b>DISCOUNT DESCRIPTION</th>"));
            row.append($("<th><b>ACTION</th>"));
            var row = $("<tr />");
            $("#tableRoute").append(row);
            row.append($("<td>" + jsonResults.idTrip + "</td>"));
            row.append($("<td>" + jsonResults.cityByDepartureCity.code + "</td>"));
            row.append($("<td>" + jsonResults.cityByArrivalCity.code + "</td>"));
            row.append($("<td>" + jsonResults.distance + "</td>"));
            row.append($("<td>" + jsonResults.duration + "</td>"));
            row.append($("<td>" + jsonResults.departureTime + "h" + "</td>"));
            row.append($("<td>" + jsonResults.departureDay + "</td>"));
            row.append($("<td>" + jsonResults.cost + "</td>"));
            row.append($("<td>" + jsonResults.discount + "</td>"));
            row.append($("<td>" + jsonResults.discountDescription + "</td>"));
            row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="alert(\'modify\');">' +
                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                    '</button>' +
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="alert(\'eliminate\');">' +
                    '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                    '</button></td>'));
        });
    },
    getAllTrips: function () {
        this.airlineController.getAllTrips((jsonResults) => {
            $("#tableRoute").html("");
            var head = $("<thead />");
            var row = $("<tr/>");
            head.append(row);
            $("#tableRoute").append(head);
            row.append($("<th><b>IDENTIFIER</b></th>"));
            row.append($("<th><b>DISTANCE</b></th>"));
            row.append($("<th><b>DURATION</b></th>"));
            row.append($("<th><b>DEPARTURE CITY</b></th>"));
            row.append($("<th><b>ARRIVAL CITY</b></th>"));
            row.append($("<th><b>DEPARTURE TIME</th>"));
            row.append($("<th><b>DEPARTURE DAY</th>"));
            row.append($("<th><b>COST</th>"));
            row.append($("<th><b>DISCOUNT</th>"));
            row.append($("<th><b>DISCOUNT DESCRIPTION</th>"));
            row.append($("<th><b>ACTION</th > "));
            var row = $("<tr />");
            for (let i in jsonResults) {
                let trip = jsonResults[i];
                var row = $("<tr/>");
                $("#tableRoute").append(row);
                row.append($("<td>" + trip.idTrip + "</td>"));
                row.append($("<td>" + trip.distance + "</td>"));
                row.append($("<td>" + trip.duration + "</td>"));
                row.append($("<td>" + trip.cityByDepartureCity.code + "</td>"));
                row.append($("<td>" + trip.cityByArrivalCity.code + "</td>"));
                row.append($("<td>" + trip.departureTime + "h" + "</td>"));
                row.append($("<td>" + trip.departureDay + "</td>"));
                row.append($("<td>" + trip.cost + "</td>"));
                row.append($("<td>" + trip.discount + "</td>"));
                row.append($("<td>" + trip.discountDescription + "</td>"));
                row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="alert(\'modify\');">' +
                        '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                        '</button>' +
                        '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="deleteTrip(\'' + trip.idTrip + '\');">' +
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                        '</button></td>'));
            }

        });
    },
    deleteTrip: function (id_trip) {
        this.airlineController.deleteTrip(id_trip);
        $("#tableRoute").empty();
    },
    addTrip: function () {
            let code = this.getPreviousId();
            console.log(code);
            let distance = this.view.$('#distance').val();
            let duration1 = this.view.$('#hours').val();
            let duration2 = this.view.$('#minutes').val();
            let duration3 = convertHours_Minutes(duration1) + parseInt(duration2);
            let duration=duration3.toString();
            let departureCity = this.view.$('#departureCity').val();
            let arrivalCity = this.view.$('#arrivalCity').val();
            let departureTime = this.view.$('#departureTime').val();
            let departureDay = this.view.$('#departureDay').val();
            let cost = this.view.$('#price').val();
            let discount = this.view.$('#discount').val();
            let discountDes = this.view.$('#discountDescription').val();
            let discountPath = ("/") + "images/" + code + ".png";
            let image = this.view.$('#image').files;
            this.airlineController.addTrip(code, distance, duration, departureCity, arrivalCity, departureTime, departureDay, cost, discount, discountDes, discountPath,image, (jsonResults) => {
            });
       
    },
    getPreviousId: function () {
        this.airlineController.getPreviousId((jsonResults) => {
            let number = jsonResults;
            return number+1;
        });
    },
    cleanForm: () => {
        $('#identifier').focus();
        $("#identifier").removeAttr("readonly");
        $("#routeAction").val("addRoute");
        $('#formRoute').trigger("reset");
    },

}
function fillWithCities($select, cities) {
    $select.find('option').remove().end();
    $select.append('<option value="0">Cities</option>');
    for (let i in cities) {
        let city = cities[i];
        let element = '';
        element += '<option value="' + city.code + '">';
        element += '<span class=".h4">' + city.code + '</span></option>';
        $(element).appendTo($select);
    }
    if (!$select.has('option').length > 1)
        $select.append('<option value="undefined">No Cities</option>');
}
function convertHours_Minutes(hours) {
    let minutes = parseInt(hours) * 60;
    return minutes;
}