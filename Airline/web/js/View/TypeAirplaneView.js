var controller;
function loadPage(event) {
    controller = new TypeAirplaneController(window);
    addElementsProperties();
}

function addElementsProperties() {
    $("#send").click(() => controller.addTypeAirplane());
    $("#cancel").click(() => controller.cleanForm());
    $("#btShowForm").click(() => controller.cleanForm());
    $("#btSearch").click(() => controller.searchTypeAirplane());
}
function searchTypeAirplane() {
    controller.searchTypeAirplane();
}
    $(loadPage);

