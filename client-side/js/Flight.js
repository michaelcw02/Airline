
function Flight(code, countryFrom, countryTo, price) {
    this.Flight(code, countryFrom, countryTo, price);
}
Flight.prototype = {
    Flight: function (code, countryFrom, countryTo, price) {
        this.code = code;
        this.countryFrom = countryFrom;
        this.countryTo = countryTo;
        this.price = price;
    },
    completo: function (sep) { return this.code + sep + this.price; }
}