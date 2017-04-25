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
        let trip = this.findTrip(codeCityFrom, codeCityTo);
        let flights = this.flights();

        let results = flights.filter((flight) => { return (flight.trip === trip); });
        let codeCityFromTo = trip.travel();

        Storage.store('searchFlights', { codeCityFromTo, results });
    },
    getSearch: function (codeCityFrom, codeCityTo) {
        let results = Storage.retrieve('searchFlights');
        if (results.codeCityFromTo == (codeCityFrom + ' - ' + codeCityTo))
            return results.results;
    },
    findTrip: function (codeCityFrom, codeCityTo) {
        let trip = this.trips().filter((trip) => { return (trip.cityFrom.code === codeCityFrom) && (trip.cityTo.code === codeCityTo) });
        return trip[0];
    }

}
