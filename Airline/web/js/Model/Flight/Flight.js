/** Universidad Nacional de Costa Rica
 *      Proyecto Aerolínea
 *     Desarrollado por:
 *          Christian Fuentes
 *          Fabiana Salas
 *          Michael Chen W.
 * 
 * @param {String} code 
 * @param {Trip} trip 
 * @param {Date} departureDate
 * @param {double} price 
 */
function Flight(code, trip, departureDate, price) {
    this.Flight(code, trip, departureDate, price);
}
Flight.prototype = {
    Flight: function (code, trip, departureDate, price) {
        this.code = code;
        this.trip = trip;
        this.departureDate = departureDate;
        this.price = price;
    },
    getTime: function() {
        let d = new Date(this.departureDate);
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var date = d.getDate();
        return new Date(year+'/'+month+'/'+date).getTime();
    },
    getDate: function() {
        let d = new Date(this.departureDate);
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var date = d.getDate();
        return year + '/' + pad(month) + '/' + pad(date);
    }
}

function pad(num) {
    return (num < 10 ? '0' : '') + num;
}