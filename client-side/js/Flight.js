
function Flight(codigo, countryFrom, countryTo, departureDate, arrivalDate, price) {
    this.Flight(codigo, countryFrom, countryTo, departureDate, arrivalDate, price);
}
Flight.prototype = {
    Flight: function (codigo, countryFrom, countryTo, departureDate, arrivalDate, price) {
        this.codigo = codigo;
        this.countryFrom = countryFrom;
        this.countryTo = countryTo;
        this.arrivalDate = arrivalDate;
        this.departureDate = departureDate;
        this.price = price;
    },
    completo: function (sep) { return this.codigo + sep + this.price; }
}