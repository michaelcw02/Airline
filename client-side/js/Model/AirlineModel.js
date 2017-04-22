function AirlineModel() {
    this.AirlineModel();
}

AirlineModel.prototype = {
    AirlineModel: function() {
        var preload = new PreloadData();
        this.cities = preload.cities;
        this.flights = preload.flights;
        this.discounts = preload.discounts;
    }
}