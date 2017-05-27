var controller;
function loadPage(event) {
    controller = new CityController(window);
    addElementsProperties();
}

function addElementsProperties() {
    $("#send").click(function () {
        controller.sendAction();
    });
    $("#cancel").click(function () {
        controller.cleanForm();
        $("#myModalTypeAirplane").modal("hide");
    });
    $("#btShowForm").click(() => controller.cleanForm());
    $("#btSearch").click(function () {
        controller.searchCityByCode();
        $("#search").val("");
    });
    $("#btSearchAll").click(() => controller.getAllCities());
}
function deleteCity(code) {
    controller.deleteCity(code);
}

$(loadPage);



