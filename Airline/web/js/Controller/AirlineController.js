/* global Proxy */

function AirlineController() {
    this.AirlineController();
}

AirlineController.prototype = {

    AirlineController: function () {

    },
    //CITIES
    getAllCities: function (callback) {
        Proxy.getCities((data) => {
            Storage.store('allCities', data);
            callback(data);
        });
    },
    retrieveAllCities: function () {
        return Storage.retrieve('allCities');
    },

    getAllDiscounts: function (callback) {
        Proxy.getDiscounts((data) => {
            callback(data);
        })
    },
    getAllFlights: function (callback) {
        Proxy.getFlights((data) => {
            callback(data);
        })
    },
    getAllTrips: function (callback) {
        Proxy.getTrips((data) => {
            callback(data);
        })
    },
    searchCitiesTo: function (codeCityFrom, callback) {
        if (codeCityFrom != 0) {
            Proxy.getTripsFromCity(codeCityFrom, (data) => {
                let citiesTo = [];
                data = data.filter((trip) => {
                    return(trip.cityByDepartureCity.code === codeCityFrom)
                });
                data.forEach((trip) => {
                    citiesTo.push(trip.cityByArrivalCity)
                });
                callback(citiesTo);
            })
        }
        if (codeCityFrom == 0) {
            callback(this.retrieveAllCities());
        }
    },
    searchFlights: function (codeCityFrom, codeCityTo, departDate, returnDate, callback) {
        Proxy.searchForFlights(codeCityFrom, codeCityTo, departDate, returnDate, (data) => {
            Storage.store('searchFlights', data);
            callback(data);
        });
    },
    getSearch: function (codeCityFrom, codeCityTo) {
        let results = Storage.retrieve('searchFlights');
        if (codeCityTo == 0)
            codeCityTo = 'All';
        if (results.codeCityFromTo == (codeCityFrom + ' - ' + codeCityTo))
            return results.results;
    },
    retrieveSearchFlights: function (callback) {
        let results = Storage.retrieve('searchFlights');
        callback(results);
    },
    findTrip: function (codeCityFrom, codeCityTo) {
        let trip = this.trips().filter((trip) => {
            return (trip.cityFrom.code === codeCityFrom) && (trip.cityTo.code === codeCityTo)
        });
        return trip[0];
    },
    searchTypeAirplane: function (type_airline, callback) {
        Proxy.searchForTypeAirplane(type_airline, (data) => {
            Storage.store('searchTypeAirplane', data);
            callback(data);
        });
    },
    getAllTypeAirline: function (callback) {
        Proxy.getAllTypeAirline((data) => {
            Storage.store('getAllTypeAirline', data);
            callback(data);
        });
    },

    addTypeAirplane: function (type_airline, year, brand, rows, seatsRow) {
        Proxy.addTypeAirplane(type_airline, year, brand, rows, seatsRow);
    },
    deleteTypeAirplane: function (type_airline) {
        Proxy.deleteTypeAirplane(type_airline);
    },
    updateTypeAirplane: function (type_airline, year, brand, rows, seatsRow) {
        Proxy.updateTypeAirplane(type_airline, year, brand, rows, seatsRow);
    },
    getTripByCode: function (idTrip, callback) {
        Proxy.searchTripByCode(idTrip, (data) => {
            Storage.store('searchTripByCode', data);
            callback(data);
        });
    },
    deleteTrip: function (id_trip) {
        Proxy.deleteTrip(id_trip);
    },
    searchFlightByNum: function (flightNum, callback) {
        Proxy.searchFlightByNum(flightNum, (data) => {
            callback(data);
        });
    },
    searchAirplane: function (airplane, callback) {
        Proxy.searchForAirplane(airplane, (data) => {
            Storage.store('searchAirplane', data);
            callback(data);
        });
    },
    getAllAirplane: function (callback) {
        Proxy.getAllAirplanes((data) => {
            Storage.store('getAllAirplane', data);
            callback(data);
        });
    },
    updateAirplane: function (id_airplane, type_airplane) {
        Proxy.updateAirplane(id_airplane, type_airplane);
    },
    addAirplane: function (identifier, type_airline) {
        Proxy.addAirplane(identifier, type_airline);
    },
    deleteAirplane: function (id_airplane) {
        Proxy.deleteAirplane(id_airplane);
    },
    addCity: function (code, name, country) {
        Proxy.addCity(code, name, country);
    },
    updateCity: function (code, name, country) {
        Proxy.updateCity(code, name, country);
    },
    deleteCity: function (code) {
        Proxy.deleteCity(code);
    },
    searchCityByCode: function (code, callback) {
        Proxy.searchCityByCode(code, (data) => {
            Storage.store('searchCityByCode', data);
            callback(data);
        });
    },
    addUser: function (user, admin, client, callback) {
        Proxy.addUser(user, admin, client, (data) => {
            callback(data);
        });
    },
    updateUser: function (username, password, name, lastname1, lastname2, email, birthdate, address, phone, celular) {
        Proxy.updateUser(username, password, name, lastname1, lastname2, email, birthdate, address, phone, celular);
    },
    deleteUser: function (username) {
        Proxy.deleteUser(username);
    },
    searchUserByUsername: function (username, callback) {
        Proxy.searchUserByUsername(username, (data) => {
            Storage.store('searchUserByUsername', data);
            callback(data);
        });
    },
    getAllUsers: function (callback) {
        Proxy.getAllUsers((data) => {
            Storage.store('getAllUsers', data);
            callback(data);
        });
    },
    addTrip: function (code, distance, duration, departureCity, arrivalCity, departureTime, departureDay, cost, discount, discountDes, discountPath, image, callback) {
        Proxy.addTrip(code, distance, duration, departureCity, arrivalCity, departureTime, departureDay, cost, discount, discountDes, discountPath, image, (data) => {
            callback(data);
        });
    },
    getLastID: function (callback) {
        Proxy.getLastID(callback);
    },
    reserveFlight: function (flightNum, mode, callback) {
        Proxy.reserveFlight(flightNum, mode, (data) => {
            $('#' + mode + 'Selection').val(flightNum);
            callback(data);
        })
    },
    confirmFlights: function (mode, numPassengers, callback) {
        Proxy.confirmFlights(mode, numPassengers, (data) => {
            let response = data.response;
            callback(response);
        });
    },
    cancelReservation: function (callback) {
        Proxy.cancelReservation( (data) => {
            callback(data);
        } ) 
    },
    loginUser: function () {
        $('#username').removeClass("has-error");
        $('#password').removeClass("has-error");
        let username = $('#username').val();
        let password = $('#password').val();
        Proxy.loginUser(username, password, (response) => {
            if (response[0] === 'C') {
                location.reload();
            } else {
                $('#username').addClass("has-error");
                $('#password').addClass("has-error");
            }
        });
    },
    logout: function () {
        Proxy.logoutUser((data) => {
            window.location.replace("/Airline");
            callback(data);
        });
    },
    updateTrip: function (code, distance, duration, departureCity, arrivalCity, departureTime, departureDay, cost, discount, discountDes, discountPath, image, callback) {
        Proxy.updateTrip(code, distance, duration, departureCity, arrivalCity, departureTime, departureDay, cost, discount, discountDes, discountPath, image, (data) => {
            callback(data);
        });
    },
    getReservedFlights: function (callback) {
        Proxy.getReservedFlights( (reserveFlights) => {
            if(reserveFlights) {
                Storage.store('TicketsInfo', reserveFlights);
                callback(reserveFlights);
            }
        } )
    },
    getFlightSeatsInfo: function (flightNum, callback) {
        Proxy.getFlightSeatsInfo( flightNum, (data) => {
            if(data.length > 0) {
                callback(data);
            }
        } );
    }, 
}