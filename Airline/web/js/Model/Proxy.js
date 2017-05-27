var Proxy = Proxy || {};

Proxy.getCities = (callback) => {
    $.ajax({
        url: 'CitiesServlet',
        data: {
            action: "getAllCities"
        },
        error: () => { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar las ciudades de la base de datos");
        },
        success: (data) => {
            console.log(data);
            callback(data);
        },
        type: 'GET',
        dataType: "json"
    });
}
Proxy.getDiscounts = (callback) => {
    $.ajax({
        url: 'TripsServlet',
        data: {
            action: "getAllDiscounts"
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar los descuentos de la base de datos");
        },
        success: (data) => {
            console.log(data);
            callback(data);
        },
        type: 'GET',
        dataType: "json"
    });
}
Proxy.getFlights = (callback) => {
    $.ajax({
        url: 'FlightsServlet',
        data: {
            action: "getAllFlights"
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar las ciudades de la base de datos");
        },
        success: (data) => {
            console.log(data);
            callback(data);
        },
        type: 'GET',
        dataType: "json"
    });
}
Proxy.getTrips = (callback) => {
    $.ajax({
        url: 'TripsServlet',
        data: {
            action: "getAllTrips"
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar las ciudades de la base de datos");
        },
        success: (data) => {
            console.log(data);
            callback(data);
        },
        type: 'GET',
        dataType: "json"
    });
}
Proxy.searchForFlights = (cityFrom, cityTo, departDate, returnDate, callback) => {
    $.ajax({
        url: 'FlightsServlet',
        data: {
            action: 'searchFlights',
            cityFrom: cityFrom,
            cityTo: cityTo,
            departDate: departDate,
            returnDate: returnDate
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar las ciudades de la base de datos");
        },
        success: (data) => {
            console.log(data);
            callback(data);
        },
        type: 'POST',
        dataType: "json"
    });
}
Proxy.searchForTypeAirplane = (type_airline, callback) => {
    $.ajax({
        url: 'TypeAirplaneServlet',
        data: {
            action: 'findTypeAirplane',
            type_airline: type_airline
        },
        error: function () { //si existe un error en la respuesta del ajax
            showModal("myModal", "ERROR", "This type of airplane doesn´t exist");
        },
        success: (data) => {
            console.log(data);
            callback(data);
        },
        type: 'POST',
        dataType: "json"
    });
}
Proxy.getAllTypeAirline = (callback) => {
    $.ajax({
        url: 'TypeAirplaneServlet',
        data: {
            action: "getAllTypeAirplane"
        },
        error: function () { //si existe un error en la respuesta del ajax
            showModal("myModal", "ERROR", "An error occurred in the loading of type of airplane");
        },
        success: (data) => {
            console.log(data);
            callback(data);
        },
        type: 'GET',
        dataType: "json"
    });

}
Proxy.addTypeAirplane = (type_airline, year, brand, rows, seatsRow) => {

    $.ajax({
        url: 'TypeAirplaneServlet',
        data: {
            action: "addTypeAirplane",
            type_airline: type_airline,
            year: year,
            brand: brand,
            qty_of_rows: rows,
            seats_per_row: seatsRow
        },
        error: function () {
            showModal("myModal", "ERROR", "An error occurred when a type of airplane was inserted");
        },
        success: (data) => {
            console.log(data);
            showModal("myModal", "Status", "The type of airplane was inserted into the database");
        },
        type: 'POST',
        dataType: "json"
    });
}
Proxy.deleteTypeAirplane = (type_airline) => {

    $.ajax({
        url: 'TypeAirplaneServlet',
        data: {
            action: "deleteTypeAirplane",
            type_airline: type_airline
        },
        error: function () {
            showModal("myModal", "ERROR", "An error occurred when a type of airplane was deleted");
        },
        success: (data) => {
            console.log(data);
            showModal("myModal", "Status", "The type of airplane was deleted of the database");
        },
        type: 'POST',
        dataType: "json"
    });
}
Proxy.updateTypeAirplane = (type_airline, year, brand, rows, seatsRow) => {

    $.ajax({
        url: 'TypeAirplaneServlet',
        data: {
            action: "updateTypeAirplane",
            type_airline: type_airline,
            year: year,
            brand: brand,
            qty_of_rows: rows,
            seats_per_row: seatsRow
        },
        error: function () {
            showModal("myModal", "ERROR", "An error occurred when a type of airplane was modified");
        },
        success: (data) => {
            console.log(data);
            showModal("myModal", "Status", "The type of airplane was updated in the database");
        },
        type: 'POST',
        dataType: "json"
    });
 }
    
Proxy.searchForAirplane = (id_airplane, callback) => {
    $.ajax({
        url: 'AirplaneServlet',
        data: {
            action: 'findAirplane',
            id_airplane: id_airplane
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar los aviones de la base de datos");
        },
        success: (data) => {
            console.log(data);
            callback(data);
        },
        type: 'POST',
        dataType: "json"
    });
}

Proxy.addAirplane = (id_airplane, type_airplane) => {
    console.log(id_airplane, type_airplane);
    $.ajax({
        url: 'AirplaneServlet',
        data: {
            action: "addAirplane",
            id_airplane: id_airplane,
            type_airplane: type_airplane
        },
        error: function () {
            alert("Se presento un error a la hora de insertar el avion a la base de datos");

        },
        success: (data) => {
            console.log(data);
            alert("Se inserto el avion a la base de datos");
            //callback(data);
        },
        type: 'POST',
        dataType: "json"
    }); 
}
Proxy.searchTripByCode = (idTrip, callback) => {
    $.ajax({
        url: 'TripsServlet',
        data: {
            action: "getTripByCode",
            idTrip: idTrip
        },
        error: function () { //si existe un error en la respuesta del ajax
            showModal("myModal", "ERROR", "This route doesn´t exist");
        },
        success: (data) => {
            console.log(data);
            callback(data);
        },
        type: 'POST',
        dataType: "json"
    });
}
Proxy.deleteTrip = (id_trip) => {

    $.ajax({
        url: 'TripsServlet',
        data: {
            action: "deleteTrip",
            id_trip: id_trip
        },
        error: function () {
            showModal("myModal", "ERROR", "An error occurred when a route was deleted");
        },
        success: (data) => {
            console.log(data);
            showModal("myModal", "Status", "The route was deleted of the database");
        },
        type: 'POST',
        dataType: "json"
    });
}
Proxy.searchFlightByNum = (flightNum, callback) => {
    $.ajax({
        url: 'FlightsServlet',
        data: {
            action: "searchFlightByNum",
            flightNum: flightNum
        },
        error: () => { //si existe un error en la respuesta del ajax
            alert("This flight doesn´t exist");
        },
        success: (data) => {
            console.log(data);
            callback(data);
        },
        type: 'POST',
        dataType: "json"
    });

}
