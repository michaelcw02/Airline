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
        $("#tableAirplane").empty();
        controller.searchAirplane();
        $("#search").val("");
    });
    $("#btSearchAll").click(function () {
        $("#tableAirplane").empty();
        controller.getAllAirplane();
    });
}
function deleteAirplane(id_airplane) {
    controller.deleteAirplane(id_airplane);
}
$(loadPage);