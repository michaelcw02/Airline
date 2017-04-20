
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
    title: function (sep) { return this.countryFrom.code + sep + this.countryTo.code; }
}