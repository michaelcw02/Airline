function IndexModel() {
    this.IndexModel();
}

IndexModel.prototype = {
    IndexModel: function() {
        var preload = new PreloadData();
        this.cities = preload.cities;
        this.flights = preload.flights;
        this.discounts = preload.discounts;
    }
}