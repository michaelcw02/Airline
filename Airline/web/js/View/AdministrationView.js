var controller;
function loadPage(event) {
    controller = new AdministrationController(window);
    addElementsProperties();
}

function addElementsProperties() {
    $("#send").click(() => controller.enviar());
    $("#cancel").click(() => controller.cleanForm());
    $("#btShowForm").click(() => controller.cleanForm());
    $("#btSearch").click(() => controller.searchTypeAirplane());
}
function searchTypeAirplane() {
    controller.searchTypeAirplane();
}
    $(loadPage);

