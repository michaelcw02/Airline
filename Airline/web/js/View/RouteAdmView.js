var controller;
function loadPage(event) {
    controller = new RouteAdmController(window);
    controller.loadCities();
    addElementsProperties();
}

function addElementsProperties() {
    $("#send").click(() => controller.addTrip());
    $("#cancel").click(function () {
        controller.cleanForm();
        $("#myModalTypeAirplane").modal("hide");
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

