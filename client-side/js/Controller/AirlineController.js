function AirlineController() {
    this.AirlineController();
}

AirlineController.prototype = {
    
    AirlineController: function() {
        this.model = new AirlineModel();    
    },
    discounts: function() {
        return this.model.discounts;
    },
    flights: function() {
        return this.model.flights;
    }

}
