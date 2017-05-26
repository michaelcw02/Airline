var controller;
function loadPage(event) {
    controller = new TypeAirplaneController(window);
    addElementsProperties();
}

function addElementsProperties() {
    $("#send").click(function () {
        controller.sendAction();
        controller.showTable();
    });
    $("#cancel").click(function () {
        controller.cleanForm();
        $("#myModalTypeAirplane").modal("hide");
    });
    $("#btShowForm").click(() => controller.cleanForm());
    $("#btSearch").click(function () {
        controller.searchTypeAirplane();
        $("#search").val("");
    });
    $("#btSearchAll").click(() => controller.getAllTypeAirline());
}
function deleteTypeAirplane(type_airline) {
    controller.deleteTypeAirplane(type_airline);
}

$(loadPage);

