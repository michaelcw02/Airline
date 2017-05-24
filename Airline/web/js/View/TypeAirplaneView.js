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
function deleteTypeAirplane(type_airline) {
    controller.deleteTypeAirplane(type_airline);
}

$(loadPage);

