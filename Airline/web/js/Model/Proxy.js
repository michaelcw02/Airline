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
            alert("Se presento un error a la hora de cargar las rutas de la base de datos");
        },
        success: (data) => {
            console.log(data);
            callback(data);
        },
        type: 'GET',
        dataType: "json"
    });
};
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
};
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
            showModal("myModal", "ERROR", "This airplane doesn´t exist");
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
    $.ajax({
        url: 'AirplaneServlet',
        data: {
            action: "addAirplane",
            id_airplane: id_airplane,
            type_airplane: type_airplane
        },
        error: function () {
            showModal("myModal", "ERROR", "An error occurred when a airplane was inserted");
        },
        success: (data) => {
            showModal("myModal", "Status", "The airplane was inserted into the database");
        },
        type: 'POST',
        dataType: "json"
    });
}

Proxy.getAllAirplanes = (callback) => {
    $.ajax({
        url: 'AirplaneServlet',
        data: {
            action: "getAllAirplane"
        },
        error: function () { //si existe un error en la respuesta del ajax
            showModal("myModal", "ERROR", "An error occurred in the loading of airplane");
        },
        success: (data) => {
            console.log(data);
            callback(data);
        },
        type: 'GET',
        dataType: "json"
    });
}
Proxy.updateAirplane = (id_airplane, type_airplane) => {

    $.ajax({
        url: 'AirplaneServlet',
        data: {
            action: "updateAirplane",
            id_airplane: id_airplane,
            type_airplane: type_airplane
        },
        error: function () {
            showModal("myModal", "ERROR", "An error occurred when an airplane was modified");
        },
        success: (data) => {
            console.log(data);
            showModal("myModal", "Status", "The airplane was updated in the database");
        },
        type: 'POST',
        dataType: "json"
    });
}
Proxy.deleteAirplane = (id_airplane) => {
    $.ajax({
        url: 'AirplaneServlet',
        data: {
            action: "deleteAirplane",
            id_airplane: id_airplane
        },
        error: function () {
            showModal("myModal", "ERROR", "An error occurred when a airplane was deleted");
        },
        success: (data) => {
            showModal("myModal", "Status", "The airplane was deleted of the database");
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
Proxy.reserveFlight = (flightNum, mode, callback) => {
    $.ajax({
        url: 'FlightsServlet',
        data: {
            action: "reserveFlight",
            flightNum: flightNum,
            mode: mode
        },
        error: () => { //si existe un error en la respuesta del ajax
            showModal("myModal", "ERROR", "Sorry, we could not select your flight.");
        },
        success: (data) => {
            console.log(data);
            callback(data);
        },
        type: 'POST',
        dataType: "json"
    });
}
Proxy.searchCityByCode = (code, callback) => {
    $.ajax({
        url: 'CitiesServlet',
        data: {
            action: "getCityByCode",
            code: code
        },
        error: function () { //si existe un error en la respuesta del ajax
            showModal("myModal", "ERROR", "This city doesn´t exist");
        },
        success: (data) => {
            console.log(data);
            callback(data);
        },
        type: 'POST',
        dataType: "json"
    });
}

Proxy.addCity = (code, name, country) => {
    $.ajax({
        url: 'CitiesServlet',
        data: {
            action: "addCity",
            code: code,
            name: name,
            country: country
        },
        error: function () {
            showModal("myModal", "ERROR", "An error occurred when a city was inserted");
        },
        success: (data) => {
            showModal("myModal", "Status", "The city was inserted into the database");
        },
        type: 'POST',
        dataType: "json"
    });
}
Proxy.deleteCity = (code) => {
    $.ajax({
        url: 'CitiesServlet',
        data: {
            action: "deleteCity",
            code: code
        },
        error: function () {
            showModal("myModal", "ERROR", "An error occurred when a city was deleted");
        },
        success: (data) => {
            console.log(data);
            showModal("myModal", "Status", "The city was deleted of the database");
        },
        type: 'POST',
        dataType: "json"
    });
}
Proxy.updateCity = (code, name, country) => {
    $.ajax({
        url: 'CitiesServlet',
        data: {
            action: "updateCity",
            code: code,
            name: name,
            country: country
        },
        error: function () {
            showModal("myModal", "ERROR", "An error occurred when a city was modified");
        },
        success: (data) => {
            console.log(data);
            showModal("myModal", "Status", "The city was updated in the database");
        },
        type: 'POST',
        dataType: "json"
    });
}
Proxy.getLastID = (callback) => {
    $.ajax({
        url: 'TripsServlet',
        data: {
            action: "getLastID"
        },
        error: function () { //si existe un error en la respuesta del ajax
            showModal("myModal", "ERROR", "An error occurred");
        },
        success: (data) => {
            callback(data);
        },
        type: 'POST',
        dataType: "json"
    });
}
Proxy.searchUserByUsername = (username, callback) => {
    $.ajax({
        url: 'UserServlet',
        data: {
            action: "getUserByUsername",
            username: username
        },
        error: function () { //si existe un error en la respuesta del ajax
            showModal("myModal", "ERROR", "This user doesn´t exist");
        },
        success: (data) => {
            callback(data);
        },
        type: 'POST',
        dataType: "json"
    });
}
Proxy.getAllUsers = (callback) => {
    $.ajax({
        url: 'UserServlet',
        data: {
            action: "getAllUsers"
        },
        error: function () { //si existe un error en la respuesta del ajax
            showModal("myModal", "ERROR", "An error occurred in the loading of users");
        },
        success: (data) => {
            callback(data);
        },
        type: 'GET',
        dataType: "json"
    });
}
Proxy.addUser = (user, admin, client, callback) => {
    $.ajax({
        url: 'UserServlet',
        data: {
            action: "addUser",
            username: user.username,
            password: user.password,
            name: user.name,
            lastname1: user.lastname1,
            lastname2: user.lastname2,
            email: user.email,
            birthdate: user.birthdate,
            address: user.direction,
            phone: user.telephone,
            celular: user.cellphone,
            administrator: admin,
            client: client
        },
        error: function () {
            showModal("myModal", "ERROR", "An error occurred when a user was inserted");
        },
        success: (data) => {
            callback(data);
        },
        type: 'POST',
        dataType: "json"
    });
}
Proxy.deleteUser = (username) => {
    $.ajax({
        url: 'UserServlet',
        data: {
            action: "deleteUser",
            username: username
        },
        error: function () {
            showModal("myModal", "ERROR", "An error occurred when a user was deleted");
        },
        success: (data) => {
            showModal("myModal", "Status", "The user was deleted of the database");
        },
        type: 'POST',
        dataType: "json"
    });
};
//THIS METHOD ADDS THE IMAGE FIRST, AND THEN ADDS THE TRIP
Proxy.addTrip = (code, distance, duration, departureCity, arrivalCity, departureTime, departureDay, cost, discount, discountDes, discountPath, image, callback) => {
    Proxy.addTripImage(code, image, (dat) => {
        $.ajax({
            url: 'TripsServlet',
            data: {
                action: "addTrip",
                distance: distance,
                duration: duration,
                departureCity: departureCity,
                arrivalCity: arrivalCity,
                departureTime: departureTime,
                departureDay: departureDay,
                cost: cost,
                discount: discount,
                discountDes: discountDes,
                discountPath: discountPath
            },
            error: function () {
                showModal("myModal", "ERROR", "An error occurred when a trip was inserted");
            },
            success: (data) => {
                console.log(data);
                callback(data);
                showModal("myModal", "Status", "The trip was inserted in the database");
            },
            type: 'POST',
            dataType: "json"
        });
    });
}
Proxy.addTripImage = (idTrip, image, callback) => {
    var formData = new FormData();
    formData.append('code', idTrip);
    formData.append('image', image);
    $.ajax({
        url: 'ImageUpload',
        data: formData,
        processData: false,
        contentType: false,
        error: function () {
            showModal("myModal", "ERROR", "An error occurred while uploading the image");
        },
        success: (data) => {
            console.log(data);
            callback(data.data);
        },
        type: 'POST',
        dataType: "json"
    });
}
Proxy.updateUser = (username, password, name, lastname1, lastname2, email, birthdate, address, phone, celular) => {
    $.ajax({
        url: 'UserServlet',
        data: {
            action: "updateUser",
            username: username,
            password: password,
            name: name,
            lastname1: lastname1,
            lastname2: lastname2,
            email: email,
            birthdate: birthdate,
            address: address,
            phone: phone,
            celular: celular
        },
        error: function () {
            showModal("myModal", "ERROR", "An error occurred when a user was modified");
        },
        success: (data) => {
            showModal("myModal", "Status", "The user was updated in the database");
        },
        type: 'POST',
        dataType: "json"
    });
}
Proxy.getTripsFromCity = (cityFrom, callback) => {
    $.ajax({
        url: 'TripsServlet',
        data: {
            action: "getTripsFromCity",
            cityFrom: cityFrom
        },
        error: function () { //si existe un error en la respuesta del ajax
            showModal("myModal", "ERROR", "An error occurred while retrieving cities");
        },
        success: (data) => {
            console.log(data);
            callback(data);
        },
        type: 'GET',
        dataType: "json"
    });
}
Proxy.confirmReservation = (mode, numPassengers, callback) => {
    $.ajax({
        url: 'TicketsServlet',
        data: {
            action: "confirmReservation",
            mode: mode,
            numPassengers: numPassengers
        },
        error: function () { //si existe un error en la respuesta del ajax
            showModal("myModal", "ERROR", "An error occurred while reserving the tickets");
        },
        success: (data) => {
            console.log(data);
            callback(data);
        },
        type: 'POST',
        dataType: "json"
    });
}
Proxy.loginUser = (username, password, callback) => {
    $.ajax({
        url: 'UserServlet',
        data: {
            action: "userLogin",
            username: username,
            password: password
        },
        error: function () { //si existe un error en la respuesta del ajax
            showModal("myModal", "ERROR", "An error occurred while signing in");
        },
        success: (data) => {
            console.log(data);
            callback(data.response);
        },
        type: 'POST',
        dataType: "json"
    });
}
Proxy.logoutUser = (callback) => {
    $.ajax({
        url: 'UserServlet',
        data: {
            action: "userLogout",
        },
        error: function () { //si existe un error en la respuesta del ajax
            //showModal("myModal", "ERROR", "An error occurred closing session");
            callback();
        },
        success: (data) => {
            callback();
        },
        type: 'POST',
        dataType: "json"
    });
}
Proxy.updateTrip = (code, distance, duration, departureCity, arrivalCity, departureTime, departureDay, cost, discount, discountDes, discountPath, image,callback) => {
    Proxy.addTripImage(code, image, (dat) => {
        $.ajax({
            url: 'TripsServlet',
            data: {
                action: "updateTrip",
                id_trip: code,
                distance: distance,
                duration: duration,
                departureCity: departureCity,
                arrivalCity: arrivalCity,
                departureTime: departureTime,
                departureDay: departureDay,
                cost: cost,
                discount: discount,
                discountDes: discountDes,
                discountPath: discountPath
            },
            error: function () {
                showModal("myModal", "ERROR", "An error occurred when a trip was updated");
            },
            success: (data) => {
                console.log(data);
                callback(data);
                showModal("myModal", "Status", "The trip was updated in the database");
            },
            type: 'POST',
            dataType: "json"
        });
    });
}
