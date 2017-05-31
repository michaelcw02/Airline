var controller;
function loadPage(event) {
    controller = new RouteAdmController(window);
    controller.loadCities();
    addElementsProperties();
}

function addElementsProperties() {
    $("#send").click(function () {
        controller.sendAction();
    });
    $("#cancel").click(function () {
        controller.cleanForm();
        $("#modalRoute").modal("hide");
    });
    $("#btShowForm").click(() => controller.cleanForm());
    $("#btSearch").click(function () {
        controller.searchTripsByCode();
        $("#search").val("");
    });
    $("#btSearchAll").click(() => controller.getAllTrips());
}
function  searchTripsByCode() {
    controller.searchTripsByCode();
}
function deleteTrip(id_trip) {
    controller.deleteTrip(id_trip);
}
$(loadPage);

