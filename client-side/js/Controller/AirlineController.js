function AirlineController() {
    this.AirlineController();
}

AirlineController.prototype = {

    AirlineController: function () {
        this.model = new AirlineModel();
    },
    cities: function () {
        return this.model.cities;
    },
    discounts: function () {
        return this.model.discounts;
    },
    flights: function () {
        return this.model.flights;
    },
    trips: function () {
        return this.model.trips;
    },
    searchTrips: function (codeCityFrom) {
        let citiesTo = [];
        if (codeCityFrom != 0) {
            let trips = this.model.trips;
            let results = trips.filter((trip) => { return (trip.cityFrom.code === codeCityFrom); });
            results.forEach((result) => { citiesTo.push(result.cityTo); });
        } else {
            citiesTo = this.model.cities;
        }
        Storage.store('searchTrips', { codeCityFrom, citiesTo });
    },
    getSearchTrips: function (codeCityFrom) {
        let results = Storage.retrieve('searchTrips');
        if (results.codeCityFrom === codeCityFrom)
            return results.citiesTo;
    },
    searchFlights: function (codeCityFrom, codeCityTo) {
        let flights = this.flights();
        let codeCityFromTo = '';
        let results = [];
        if(codeCityTo != 0) {
            let trip = this.findTrip(codeCityFrom, codeCityTo);
            results = flights.filter((flight) => { return (flight.trip === trip); });
            codeCityFromTo = trip.travel();
        } else {
            results = flights.filter( (flight) => { return (flight.trip.cityFrom.code == codeCityFrom)});
            codeCityFromTo = codeCityFrom + ' - ' + 'All';
        }
        Storage.store('searchFlights', { codeCityFromTo, results });
    },
    getSearch: function (codeCityFrom, codeCityTo) {
        let results = Storage.retrieve('searchFlights');
        if(codeCityTo == 0)
            codeCityTo = 'All';
        if (results.codeCityFromTo == (codeCityFrom + ' - ' + codeCityTo))
            return results.results;
    },
    findTrip: function (codeCityFrom, codeCityTo) {
        let trip = this.trips().filter((trip) => { return (trip.cityFrom.code === codeCityFrom) && (trip.cityTo.code === codeCityTo) });
        return trip[0];
    }

}
