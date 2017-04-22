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
    }
}
