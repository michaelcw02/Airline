var controller;

function loadPage() {
    controller = new TicketsController(window);
    addElementsProperties();
}

function addElementsProperties() {
    //BASIC ELEMENTS
}

function addListenersButtons(idButton, num) {
    $(idButton).click(() => controller.pageButtonsHandler(num));
}

function searchFlights() {
    //THIS IS WHERE IT HAS TO GET THE FLIGHTS
    controller.searchFlights();
}

$(loadPage);