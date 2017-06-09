var controller;
function loadPage() {
    controller = new TicketAdmController(window);
    controller.loadFlights();
    addElementsProperties();
}
function addElementsProperties() {
    $("#btSearchTickets").click(() => controller.getTicketByFlight());
}
function  getTicketByFlight(){
   controller.getTicketByFlight();
}
$(loadPage);


