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
    //toma el día de la semana de la fecha seleccionada
    test: function () {
        var date1 = $('#firstDate').val();
        var date = new Date(date1);
        var day = date.getDay();
        console.log(day);
    },
    //suma de días, día más uno, suma 1 día es el mismo día
    test2: function () {
        var date = $('#firstDate').val();
        var result = new Date(date);
        var days = 366;
        result.setDate(result.getDate() + days);
        console.log(result);
    },
    test3: function () {
        var date = $('#firstDate').val();
        var fecha1 = new Date(date);
        var date2 = $('#lastDate').val();
        var fecha2 = new Date(date2);
        

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


