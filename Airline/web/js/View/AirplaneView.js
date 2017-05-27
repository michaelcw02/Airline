var controller;
function loadPage(event) {
    controller = new AirplaneController(window);
    controller.loadTypeAirplanes();
    addElementsProperties();
}

function addElementsProperties() {
    $("#send").click(function () {
        controller.sendAction();
    });
    $("#cancel").click(function () {
        controller.cleanForm();
        $("#modalAirplane").modal("hide");
    });
    $("#btShowForm").click(() => controller.cleanForm());
    $("#btSearch").click(function () {
        controller.searchAirplane();
        $("#search").val("");
    });
    $("#btSearchAll").click(() => controller.getAllAirplane());
}
$(loadPage);