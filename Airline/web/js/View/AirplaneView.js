var controller;
function loadPage(event) {
    controller = new AirplaneController(window);
    addElementsProperties();
}

function addElementsProperties() {
    $("#send").click(() => controller.addAirplane());
    $("#cancel").click(() => controller.cleanForm());
    $("#btShowForm").click(() => controller.cleanForm());
    $("#btSearch").click(() => controller.searchAirplane());
}
function searchAirplane() {
    controller.searchAirplane();
}
$(loadPage);