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
        $("#myModalCity").modal("hide");
    });
    $("#btShowForm").click(() => controller.cleanForm());
    $("#btSearch").click(function () {
        $("#tableCity").empty();
        controller.searchCityByCode();
        $("#search").val("");
    });
    $("#btSearchAll").click(function () {
        $("#tableCity").empty();
        controller.getAllCities();
    });
}
function deleteCity(code) {
    controller.deleteCity(code);
}

$(loadPage);



