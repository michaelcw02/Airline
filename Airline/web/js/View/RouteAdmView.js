var controller;
function loadPage(event) {
    controller = new RouteAdmController(window);
    addElementsProperties();
}

function addElementsProperties() {
    $("#send").click(() => controller.enviar());
    $("#cancel").click(() => controller.cleanForm());
    $("#btShowForm").click(() => controller.cleanForm());
    $("#btSearch").click(() => controller.searchTripsByCode());
}
function  searchTripsByCode() {
    controller.searchTripsByCode();
}
    $(loadPage);

