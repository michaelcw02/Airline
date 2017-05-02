/** Universidad Nacional de Costa Rica
 *      Proyecto Aerolínea
 *     Desarrollado por:
 *          Christian Fuentes
 *          Fabiana Salas
 *          Michael Chen W.
 * 
 * @param {City} cityFrom 
 * @param {City} cityTo 
 * @param {Int} duration
 */
function Trip(cityFrom, cityTo, duration) {
    this.Trip(cityFrom, cityTo, duration);
}
Trip.prototype = {
    Trip: function (cityFrom, cityTo, duration) {
        this.cityFrom = cityFrom;
        this.cityTo = cityTo;
        this.duration = duration;
    },
    travel: function () { return this.cityFrom.code + ' - ' + this.cityTo.code; }
}