
function Flight(code, cityFrom, cityTo, price) {
    this.Flight(code, cityFrom, cityTo, price);
}
Flight.prototype = {
    Flight: function (code, cityFrom, cityTo, price) {
        this.code = code;
        this.cityFrom = cityFrom;
        this.cityTo = cityTo;
        this.price = price;
    },
    getCityFrom: function(){
        return this.cityFrom;
    },
    getCityTo: function(){
        return this.cityTo;
    },
    title: function (sep) { return this.cityFrom.code + sep + this.cityTo.code; }
}