var controller;

function loadPage() {
    this.controller = new TicketsController(window);
    this.controller.loadFlightDetails();
    addElementsProperties();
}

function addElementsProperties() {
    //$('#seatBooking').modal();
    //BASIC ELEMENTS
    $('#addPassengers').click( () => new TicketsController().addPassengers() );
    $('#confirmReservation').click( () => new TicketsController().confirmReservation() );
    $('#cancelReservation').click( () => new TicketsController().cancelReservation() );
}

function addListenersButtons(idButton, num) {
    $(idButton).click(() => this.controller.pageButtonsHandler(num));
}


$(loadPage);