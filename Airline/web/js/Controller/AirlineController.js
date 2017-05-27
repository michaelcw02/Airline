/* global Proxy */

function AirlineController() {
    this.AirlineController();
}

AirlineController.prototype = {

    AirlineController: function () {

    },
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
    searchTrips: function (codeCityFrom, callback) {
        let citiesTo = [];
        this.getAllTrips((data) => {
            if (codeCityFrom != 0) {
                let results = data.filter((trip) => {
                    return (trip.cityByDepartureCity.code === codeCityFrom);
                });
                results.forEach((result) => {
                    citiesTo.push(result.cityByArrivalCity);
                });
            } else {
                citiesTo = this.retrieveAllCities();
            }
            callback(citiesTo);
            //Storage.store('searchTrips', { codeCityFrom, citiesTo });
        })
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

    addAirplane: function (identifier, type_airline) {
        Proxy.addAirplane(identifier, type_airline);
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
    addTrip: function(code,distance,duration,departureCity,arrivalCity,departureTime,departureDay,cost,discount,discountDes,discountPath,image,callback){
        Proxy.addTrip(code,distance,duration,departureCity,arrivalCity,departureTime,departureDay,cost,discount,discountDes,discountPath,image,callback);  
    },
    getPreviousId: function(callback){
        Proxy.getPreviousId(callback);
    },
}
