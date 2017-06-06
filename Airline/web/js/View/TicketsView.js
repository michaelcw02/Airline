var controller;

function loadPage() {
    this.controller = new TicketsController(window);
    this.controller.loadFlightDetails();
    addElementsProperties();
}

function addElementsProperties() {
<<<<<<< HEAD
    $('#seatBooking').modal();
=======
    //BASIC ELEMENTS
    $('#addPassengers').click( () => new TicketsController().addPassengers() );
    $('#cancelReservation').click( () => new TicketsController().cancelReservation() );
>>>>>>> 07ce3194e74aa10c6029b3955e6662ea9858f284
}

function addListenersButtons(idButton, num) {
    $(idButton).click(() => this.controller.pageButtonsHandler(num));
}


$(loadPage);