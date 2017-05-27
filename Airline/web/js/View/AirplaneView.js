var controller;
function loadPage(event) {
    controller = new AirplaneController(window);
    controller.loadTypeAirplanes();
    addElementsProperties();
}

function addElementsProperties() {
    $("#send").click(() => controller.addAirplane());
    $("#cancel").click(function () {
        controller.cleanForm();
        $("#modalAirplane").modal("hide");
    });
    $("#btShowForm").click(() => controller.cleanForm());
    $("#btSearch").click(() => controller.searchAirplane());
    $("#btSearchAll").click(() => controller.getAllAirplane());
    $("#update").click(() => controller.updateAirplane());
}
function searchAirplane() {
    controller.searchAirplane();
}
$(loadPage);