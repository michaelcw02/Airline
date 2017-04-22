
function Discount(flight, discount, description = '', path) {
    this.Discount(flight, discount, description, path);
}

Discount.prototype = {
    Discount: function (flight, discount, description, path) {
        this.flight = flight;
        this.discount = discount;
        this.description = description;
        this.path = path;
    }
}
