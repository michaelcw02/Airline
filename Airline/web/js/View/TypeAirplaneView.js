var controller;
function loadPage(event) {
    controller = new TypeAirplaneController(window);
    addElementsProperties();
}

function addElementsProperties() {
    $("#send").click(function () {
        controller.sendAction();
      //  controller.showTable(); //tiene que hacer la modificacion o insercion primero y despues muestra la tabla
      //esta mostrando tabla antes de que se inserte o modifique
    });
    $("#cancel").click(function () {
        controller.cleanForm();
        hideModal('myModalTypeAirplane');
    });
    $("#btShowForm").click(() => controller.cleanForm());
    $("#btSearch").click(function () {
        $("#tableTypeAirplane").empty();
        controller.searchTypeAirplane();
        $("#search").val("");
    });
    $("#btSearchAll").click(function () {
        $("#tableTypeAirplane").empty();
        controller.getAllTypeAirline();
    });
}
function deleteTypeAirplane(type_airline) {
    controller.deleteTypeAirplane(type_airline);
}

$(loadPage);

