var controller;

function loadPage() {
    this.controller = new SummaryController(window);
    this.controller.loadDetails();
    addElementsProperties();
}

function addElementsProperties() {
    //BASIC ELEMENTS
    $('#cancelReservation').click( () => new SummaryController().cancelReservation() );
}


$(loadPage);