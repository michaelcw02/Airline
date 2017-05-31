var controller;

function loadPage() {
    this.controller = new TicketsController(window);
    this.controller.loadFlightDetails();
    addElementsProperties();
}

function addElementsProperties() {
    //BASIC ELEMENTS
}

function addListenersButtons(idButton, num) {
    $(idButton).click(() => this.controller.pageButtonsHandler(num));
}

function searchFlights() {
    //THIS IS WHERE IT HAS TO GET THE FLIGHTS
    this.controller.searchFlights();
}

$(loadPage);