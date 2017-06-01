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


$(loadPage);