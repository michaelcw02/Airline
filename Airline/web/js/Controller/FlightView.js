var controller;

function loadPage() {
    controller = new FlightController(window);
    controller.loadTrips();
    controller.loadAirplanes();
    addElementsProperties();
}
function addElementsProperties() {
    //BASIC ELEMENTS
    $("#firstDate").datepicker({
        minDate: new Date(),
        dateFormat: "yy-mm-dd"
    });
    $("#lastDate").datepicker({
        minDate: new Date(),
        dateFormat: "yy-mm-dd"
    });
    $("#btGenerateFlights").click(() => controller.test3());
}
$(loadPage);


