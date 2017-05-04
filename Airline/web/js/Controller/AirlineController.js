function AirlineController() {
    this.AirlineController();
}

AirlineController.prototype = {

    AirlineController: function () {

    },
    getAllCities: function (callback) {
        Proxy.getCities( (data) => {
            Storage.store('allCities', data);
            callback(data);
        } )
    },
    retrieveAllCities: function () {
        return Storage.retrieve('allCities');
    },
    getAllDiscounts: function (callback) {
        Proxy.getDiscounts( (data) => {
            callback(data);
        })
    },
    getAllFlights: function (callback) {
        Proxy.getFlights( (data) => {
            callback(data);
        })
    },
    getAllTrips: function (callback) {
        Proxy.getTrips( (data) => {
            callback(data);
        })
    },
    trips: function () {
        return this.model.trips;
    },
    searchTrips: function (codeCityFrom, callback) {
        let citiesTo = [];
        this.getAllTrips( (data) => {
            if (codeCityFrom != 0) {
                let results = data.filter((trip) => { return (trip.cityFrom.code === codeCityFrom); });
                results.forEach((result) => { citiesTo.push(result.cityTo); });
            } else {
                citiesTo = this.retrieveAllCities();
            }
            callback(citiesTo);
            //Storage.store('searchTrips', { codeCityFrom, citiesTo });
        } )
    },
    searchFlights: function (codeCityFrom, codeCityTo, departDate) {
        resultsObject = this.searchAndFilterCities(codeCityFrom, codeCityTo);

        if(departDate) {
            let flights = resultsObject.results;
            flights = flights.filter( (flight) => { return flight.getTime() == departDate.getTime() } )
            resultsObject.results = flights;
        }

        Storage.store('searchFlights', resultsObject);
    },
    searchAndFilterCities: function(codeCityFrom, codeCityTo) {
        let flights = this.flights();
        let codeCityFromTo = '';
        let results = [];

        if(codeCityFrom == 'All' && codeCityTo == 'All') {
            results = flights;
            codeCityFromTo = 'All - All';
        }
        else if(codeCityFrom != 'All' && codeCityTo == 'All') {
            results = flights.filter( (flight) => { return (flight.trip.cityFrom.code == codeCityFrom)});
            codeCityFromTo = codeCityFrom + ' - ' + 'All';
        } else {
            let trip = this.findTrip(codeCityFrom, codeCityTo);
            results = flights.filter((flight) => { return (flight.trip === trip); });
            codeCityFromTo = trip.travel();
        }
        return {codeCityFromTo, results};
    },
    getSearch: function (codeCityFrom, codeCityTo) {
        let results = Storage.retrieve('searchFlights');
        if(codeCityTo == 0)
            codeCityTo = 'All';
        if (results.codeCityFromTo == (codeCityFrom + ' - ' + codeCityTo))
            return results.results;
    },
    retrieveSearchFlights: function() {
        let results = Storage.retrieve('searchFlights');
        return results.results;
    },
    findTrip: function (codeCityFrom, codeCityTo) {
        let trip = this.trips().filter((trip) => { return (trip.cityFrom.code === codeCityFrom) && (trip.cityTo.code === codeCityTo) });
        return trip[0];
    }

}
