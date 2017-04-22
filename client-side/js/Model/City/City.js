
function City(code, name, country) {
    this.City(code, name, country);
}

City.prototype = {
    City: function (code, name, country) {
        this.code = code;
        this.name = name;
        this.country = country;
    },
    completo: function (sep) { return this.code + sep + this.name; }
}