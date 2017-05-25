var controller;
function loadPage(event) {
    controller = new TypeAirplaneController(window);
    addElementsProperties();
}

function addElementsProperties() {
    $("#send").click(() => controller.addTypeAirplane());
    $("#cancel").click(function () {
        controller.cleanForm();
        $("#myModalTypeAirplane").modal("hide");
    });
    $("#btShowForm").click(() => controller.cleanForm());
    $("#btSearch").click(() => controller.searchTypeAirplane());
    $("#btSearchAll").click(() => controller.getAllTypeAirline());
}
function deleteTypeAirplane(type_airline) {
    controller.deleteTypeAirplane(type_airline);
}

$(loadPage);

