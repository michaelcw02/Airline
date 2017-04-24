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
        Storage.store('search', object);
    }

}
