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
        $("#tableRoute").empty();
        let idTrip = this.view.$('#search').val();
        this.airlineController.getTripByCode(idTrip, (jsonResults) => {
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
            row.append($("<td>" + jsonResults.distance + " miles</td>"));
            row.append($("<td>" + calculateDuration(jsonResults.duration) + "</td>"));
            row.append($("<td>" + calculateDuration(jsonResults.departureTime) + "h" + "</td>"));
            row.append($("<td>" + jsonResults.departureDay + "</td>"));
            row.append($("<td>" + jsonResults.cost + "</td>"));
            row.append($("<td>" + jsonResults.discount + "</td>"));
            row.append($("<td>" + jsonResults.discountDescription + "</td>"));
            row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="showTripForModify(\'' + jsonResults.idTrip + '\',\'' + jsonResults.distance + '\',\'' + jsonResults.duration + '\',\'' + jsonResults.cityByDepartureCity.code + '\',\'' + jsonResults.cityByArrivalCity.code + '\',\'' + jsonResults.departureTime + '\',\'' + jsonResults.departureDay + '\',\'' + jsonResults.cost + '\',\'' + jsonResults.discount + '\',\'' + jsonResults.discountDescription + '\');">' +
                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                    '</button>' +
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="alert(\'eliminate\');">' +
                    '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                    '</button></td>'));
        });
    },
    getAllTrips: function () {
        $("#tableRoute").empty();
        this.airlineController.getAllTrips((jsonResults) => {
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
            row.append($("<th><b>ACTION</th > "));
            var row = $("<tr />");
            for (let i in jsonResults) {
                let trip = jsonResults[i];
                var row = $("<tr/>");
                $("#tableRoute").append(row);
                row.append($("<td>" + trip.idTrip + "</td>"));
                row.append($("<td>" + trip.cityByDepartureCity.code + "</td>"));
                row.append($("<td>" + trip.cityByArrivalCity.code + "</td>"));
                row.append($("<td>" + trip.distance + " miles</td>"));
                row.append($("<td>" + calculateDuration(trip.duration) + "</td>"));
                row.append($("<td>" + calculateDuration(trip.departureTime) + "</td>"));
                row.append($("<td>" + trip.departureDay + "</td>"));
                row.append($("<td>" + trip.cost + "</td>"));
                row.append($("<td>" + trip.discount + "</td>"));
                row.append($("<td>" + trip.discountDescription + "</td>"));
                row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="showTripForModify(\'' + trip.idTrip + '\',\'' + trip.distance + '\',\'' + trip.duration + '\',\'' + trip.cityByDepartureCity.code + '\',\'' + trip.cityByArrivalCity.code + '\',\'' + trip.departureTime + '\',\'' + trip.departureDay + '\',\'' + trip.cost + '\',\'' + trip.discount + '\',\'' + trip.discountDescription + '\');">' +
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
        if (!doValidate()) {
            this.airlineController.getLastID((number) => {
                let idTrip = number + 1;
                console.log(idTrip);
                let distance = this.view.$('#distance').val();
                let duration1 = this.view.$('#hours').val();
                let duration2 = this.view.$('#minutes').val();
                let duration3 = convertHours_Minutes(duration1) + parseInt(duration2);
                let duration = duration3.toString();
                let departureCity = this.view.$('#departureCity').val();
                let arrivalCity = this.view.$('#arrivalCity').val();
                let departureTime1 = this.view.$('#hoursDT').val();
                let departureTime2 = this.view.$('#minutesDT').val();
                let departureTime3 = convertHours_Minutes(departureTime1) + parseInt(departureTime2);
                let departureTime = departureTime3.toString();
                let departureDay = this.view.$('#departureDay').val();
                let cost = this.view.$('#price').val();
                let discount = this.view.$('#discount').val();
                let discountDes = this.view.$('#discountDescription').val();
                let discountPath = 'images/' + idTrip + '.jpg';
                let image = this.view.$('#image')[0].files[0];
                this.airlineController.addTrip(idTrip, distance, duration, departureCity, arrivalCity, departureTime, departureDay, cost, discount, discountDes, discountPath, image, (jsonResults) => {
                });
                $("#modalRoute").modal("hide");
                this.cleanForm();
            })
        }
    },
    updateTrip: function () {
        if (!doValidate()) {
            let id_trip = this.view.$('#idTrip').val();
            let distance = this.view.$('#distance').val();
            let duration1 = this.view.$('#hours').val();
            let duration2 = this.view.$('#minutes').val();
            let duration3 = convertHours_Minutes(duration1) + parseInt(duration2);
            let duration = duration3.toString();
            let departureCity = this.view.$('#departureCity').val();
            let arrivalCity = this.view.$('#arrivalCity').val();
            let departureTime1 = this.view.$('#hoursDT').val();
            let departureTime2 = this.view.$('#minutesDT').val();
            let departureTime3 = convertHours_Minutes(departureTime1) + parseInt(departureTime2);
            let departureTime = departureTime3.toString();
            let departureDay = this.view.$('#departureDay').val();
            let cost = this.view.$('#price').val();
            let discount = this.view.$('#discount').val();
            let discountDes = this.view.$('#discountDescription').val();
            let discountPath = 'images/' + id_trip + '.jpg';
            let image = this.view.$('#image')[0].files[0];
            this.airlineController.updateTrip(id_trip, distance, duration, departureCity, arrivalCity, departureTime, departureDay, cost, discount, discountDes, discountPath, image, (jsonResults) => {
            });
            hideModal("modalRoute");
            $('#routeAction').val("addRoute");
            console.log($('#routeAction').val());
            $("#tableRoute").empty();

        }
    },
    sendAction: function () {
        let verify = $('#ruteAction').val();
        console.log(verify);
        if ($('#ruteAction').val() == "updateTrip") {
            this.updateTrip();
        } else {
            this.addTrip();
        }
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
function convertMinutes_hours(minutes) {
    let hours = Math.floor(minutes / 60);
    return hours;
}
function convertMinutes(minutes) {
    let minutes1 = parseInt(minutes) % 60;
    return minutes1;
}
function isBlank(element) {
    removeInvalid(element);
    if (!element.val()) {
        setInvalid(element);
        return true;
    }
}
function removeInvalid(element) {
    element.removeClass('invalid');
}
function setInvalid(element) {
    element.addClass('invalid');
}
function isSomethingBlank() {
    let blanks = false;
    if (isBlank($('#distance'))) {
        blanks = true;
    } else if (isBlank($('#hours')) && isBlank($('#minutes'))) {
        blanks = true;
    } else if (isBlank($('#hours')) && !isBlank($('#minutes'))) {
        $('#hours').val("0");
    } else if (!isBlank($('#hours')) && isBlank($('#minutes'))) {
        $('#minutes').val("0");
    } else if (isBlank($('#hoursDT')) && isBlank($('#minutesDT'))) {
        blanks = true;
    } else if (isBlank($('#hoursDT')) && !isBlank($('#minutesDT'))) {
        $('#hoursDT').val("0");
    } else if (!isBlank($('#hoursDT')) && isBlank($('#minutesDT'))) {
        $('#minutesDT').val("0");
    } else
    if (isBlank($('#price'))) {
        blanks = true;
    }
    if (isBlank($('#discount'))) {
        $('#discount').val("0");
    }
    if (isBlank($('#discountDescription'))) {
        $('#discountDescription').val("None");
    }
    return blanks;
}
function validateCities() {
    let error = false;
    if ($('#arrivalCity').val() == "0") {
        alert("Please, select a city");
        error = true;
    } else if ($('#departureCity').val() == "0") {
        alert("Please, select a city");
        error = true;
    }
    return error;
}
function validateLength() {
    let error = false;
    var Max_Length2 = 45;
    var Max_Length1 = 11;
    var lengthDistance = $("#distance").val().length;
    var lengthDiscountDescription = $("#discountDescription").val().length;

    if (lengthDistance > Max_Length1) {
        alert("The max length of " + Max_Length1 + " characters is reached in distance, you typed in  " + lengthDistance + "characters");
        error = true;
    }
    if (lengthDiscountDescription > Max_Length2) {
        alert("The max length of " + Max_Length2 + " characters is reached in discount description, you typed in  " + lengthDiscountDescription + "characters");
        error = true;
    }
    return error;
}
function validateDiscount() {
    let error = false;
    if ($('#discount').val() != "0") {
        if ($('#discountDescription').val() == "None" && $('#image').val() == "") {
            error = true;
            alert("You put a discount, so please register a description and an image");
        } else if ($('#discountDescription').val() == "None") {
            error = true;
            alert("You put a discount, so please register a description");
        } else if ($('#routeAction').val() == "addTrip") {
            if ($('#image').val() == "") {
                error = true;
                alert("You put a discount, so please register an image");
            }
        }
    }
    return error;
}
function validateNumbers() {
    let text = $('#hoursDT').val();
    let text2 = $('#discount').val();
    let text3 = $('#minutesDT').val();
    let text4 = $('#minutes').val();
    let text5 = $('#hours').val();
    let error = false;
    let regex = /^(?:[0-1]?[0-9]|2[0-3])(?::[0-5][0-9])?$/;
    let regex2 = /^([0-9]|[1-9][0-9]|100)$/;
    let regex3 = /^([0-5]?[0-9]|59)$/;
    if (!regex.test(text)) {
        error = true;
        alert("The hours in departure time are in the format of 24 hours and you wrote  " + text);
    }
    if (!regex2.test(text2)) {
        error = true;
        alert("The discount is in the format of 0-100 and you wrote  " + text2);
    }
    if (!regex3.test(text3)) {
        error = true;
        alert("The minutes in departure time are in the format of 0-59 and you wrote  " + text3);
    }
    if (!regex3.test(text4)) {
        error = true;
        alert("The minutes in duration are in the format of 0-59 and you wrote  " + text4);
    }
      if (!regex.test(text5)) {
        error = true;
        alert("The hours in duration are in the format of 24 hours and you wrote  " + text5);
    }
    
    return error;
}
function doValidate() {
    let error = false;
    if (this.isSomethingBlank()) {
        alert("There is something you missed, please fill it up!");
        error = true;
    } else if (validateDiscount()) {
        error = true;
    } else if (validateLength()) {
        error = true;
    } else if (validateNumbers()) {
        error = true;
    } else if (validateCities()) {
        error = true;
    }
    return error;
}
function showTripForModify(code, distance, duration, departureCity, arrivalCity, departureTime, departureDay, cost, discount, discountDes) {
    showModal("modalRoute");
    $("#idTrip").val(code);
    $("#distance").val(distance);
    let hours = convertMinutes_hours(duration);
    let minutes = convertMinutes(duration);
    $("#hours").val(hours);
    $("#minutes").val(minutes);
    $("#distance").val(distance);
    $("#departureCity").val(departureCity);
    $("#arrivalCity").val(arrivalCity);
    let hoursDT = convertMinutes_hours(departureTime);
    let minutesDT = convertMinutes(departureTime);
    $("#hoursDT").val(hoursDT);
    $("#minutesDT").val(minutesDT);
    $("#departureDay").val(departureDay);
    $("#price").val(cost);
    $("#discount").val(discount);
    $("#discountDescription").val(discountDes);
    $('#ruteAction').val("updateTrip");
    console.log($('#ruteAction').val());
}