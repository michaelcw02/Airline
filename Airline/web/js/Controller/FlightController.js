function FlightController(view) {
    this.FlightController(view);
}

FlightController.prototype = {
    FlightController: function (view) {
        this.view = view;
        this.airlineController = new AirlineController();
    },
    loadTrips: function () {
        this.airlineController.getAllTrips((results) => {
            fillWithTrips(this.view.$('#tripsAvailable'), results);
        });
    },
    loadAirplanes: function () {
        this.airlineController.getAllAirplane((results) => {
            fillWithAirplanes(this.view.$('#airplaneAvailable'), results);
        });
    },
    validateDayMatch: function () {
        var date1 = $('#firstDate').val();
        var date = new Date(date1);
        date.setDate(date.getDate() + 1);
        var day = date.getDay();
        var error = false;
        var idTrip = this.view.$("#tripsAvailable").val();
        this.airlineController.getTripByCode(idTrip, (jsonResults) => {

            console.log(jsonResults.departureDay);
            if (jsonResults.departureDay === "MONDAY" && day !== 1) {
                error = true;
            }
            return error;

        });
    },
    generateFlights: function () {
        if (!doValidate()) {
            var dates = [];
            dates = arrayDates();
            var idTrip = $("#tripsAvailable").val();
            var codeAirplane = $("#airplaneAvailable").val();
            var flightNum1 = $("#identifier").val();
            var i = 0;
            this.airlineController.generateFlights(dates, flightNum1, idTrip, codeAirplane);
            showModal("myModal", "Waiting...", "Inserting Flights..");
            setTimeout(() => hideModal('myModal'), 1500);
        }
    },
}
function fillWithTrips($select, trips) {
    $select.find('option').remove().end();
    $select.append('<option value="0">Trips</option>');
    for (let i in trips) {
        let trip = trips[i];
        let element = '';
        element += '<option value="' + trip.idTrip + '">';
        element += '<span class=".h4">' + trip.idTrip + '-' + trip.cityByDepartureCity.code + ' to ' + trip.cityByArrivalCity.code + ' ' + trip.departureDay + ' ' + calculateDuration(trip.departureTime) + '</span></option>';
        $(element).appendTo($select);
    }
    if (!$select.has('option').length > 1)
        $select.append('<option value="undefined">No Trips</option>');
}
function fillWithAirplanes($select, airplanes) {
    $select.find('option').remove().end();
    $select.append('<option value="0">Airplanes</option>');
    for (let i in airplanes) {
        let airplane = airplanes[i];
        let element = '';
        element += '<option value="' + airplane.idAirplane + '">';
        element += '<span class=".h4">' + airplane.idAirplane + '</span></option>';
        $(element).appendTo($select);
    }
    if (!$select.has('option').length > 1)
        $select.append('<option value="undefined">No Airplanes</option>');
}
//TAKE THE SELECTED DATES AND MAKE AN ARRAY WITH ALL DAYS OF THE RANGE
function arrayDates() {
    var datesArray = [];
    var date1 = $('#firstDate').val();
    var firstDate = new Date(date1);
    var days1 = 1;
    firstDate.setDate(firstDate.getDate() + days1);
    var date2 = $('#lastDate').val();
    var lastDate = new Date(date2);
    var days = 8;
    lastDate.setDate(lastDate.getDate() + days);
    for (var d = firstDate; d < lastDate; d.setDate(d.getDate() + 7)) {
        datesArray.push(new Date(d).getTime());
    }
    return datesArray;
}
function validateDaysSelected() {
    var date = new Date($("#firstDate").val());
    date.setDate(date.getDate() + 1);
    var dateL = new Date($("#lastDate").val());
    dateL.setDate(dateL.getDate() + 1);
    var error = false;
    if (date > dateL) {
        error = true;
    }
    return error;
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
    if (isBlank($('#identifier'))) {
        blanks = true;
    } else if ($('#tripsAvailable').val() == "0") {
        alert("Please, select a trip");
        blanks = true;
    } else if ($('#airplaneAvailable').val() == "0") {
        alert("Please, select a city");
        blanks = true;
    } else if (isBlank($("#firstDate"))) {
        blanks = true;
    } else if (isBlank($("#lastDate"))) {
        blanks = true;
    }
    return blanks;
}
function validateLength() {
    let error = false;
    var Max_Length1 = 3;
    var lengthId = $("#identifier").val().length;
    if (lengthId > Max_Length1) {
        alert("The max length of " + Max_Length1 + " characters is reached in Identifier, you typed in  " + lengthId + "characters");
        error = true;
    }
    return error;
}
function doValidate() {
    var error = false;
    if (this.isSomethingBlank()) {
        alert("There is something you missed, please fill it up!");
        error = true;
    } else if (validateLength()) {
        error = true;
    } else if (validateDaysSelected()) {
        error = true;
        alert("The first date are bigger than the last date");
    }
    return error;
}


