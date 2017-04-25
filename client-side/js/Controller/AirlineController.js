function AirlineController() {
    this.AirlineController();
}

AirlineController.prototype = {
    
    AirlineController: function() {
        this.model = new AirlineModel();    
    },
    cities: function() {
        return this.model.cities;
    },
    discounts: function() {
        return this.model.discounts;
    },
    flights: function() {
        return this.model.flights;
    },
    searchTrips: function(codeCityFrom) {
        let citiesTo = [];
        if(codeCityFrom != 0) {
            let trips = this.model.trips;
            let results = trips.filter( (trip) => { return (trip.cityFrom.code === codeCityFrom); });
            results.forEach( (result) => { citiesTo.push(result.cityTo); });
        } else {
            citiesTo = this.model.cities;
        }
        Storage.store('searchTrips', {codeCityFrom, citiesTo});
    },
    getSearchTrips: function(codeCityFrom) {
        let results = Storage.retrieve('searchTrips');
        if(results.codeCityFrom === codeCityFrom)
            return results.citiesTo;
    },
    searchFlights: function(cityFrom, cityTo) {
        let search = 'all'
        let jsonFlights = this.flights();
        if(typeof cityFrom !== 'undefined') {
            if(typeof cityTo !== 'undefined') {
                jsonFlights = jsonFlights.filter( (flight) => { return (flight.cityFrom.code === cityFrom) && (flight.cityTo.code === cityTo) } );
                search = cityFrom + '-' + cityTo;
            }
            else {
                jsonFlights = jsonFlights.filter( (flight) => { return flight.cityFrom.code === cityFrom } );
                search = cityFrom;
            }
        }
        let object = {search, jsonFlights};
        Storage.store(search, jsonFlights);
    },
    getSearch: function(cityFrom, cityTo) {
        let key = 'all';
        if(typeof cityFrom !== 'undefined') {
            if(typeof cityTo !== 'undefined')
                key = cityFrom + '-' + cityTo;
            else 
                key = cityFrom;
        }
        return Storage.retrieve(key);
    }

}
