
function Promotion(flight, discount, description = '', path) {
    this.Promotion(flight, discount, description, path);
}

Promotion.prototype = {
    Promotion: function (flight, discount, description, path) {
        this.flight = flight;
        this.discount = discount;
        this.description = description;
        this.path = path;
    }
}
