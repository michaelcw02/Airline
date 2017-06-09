var controller;

function loadPage() {
    this.controller = new SummaryController(window);
    this.controller.loadDetails();
    addElementsProperties();
}

function addElementsProperties() {
    //BASIC ELEMENTS
    $('#cancelPayment').click( () => new SummaryController().cancelPayment() );
    $('#confirmPayment').click( () => new SummaryController().confirmPayment() );
    $('#generatePDF').click( () => new SummaryController().generatePDF() );
}


$(loadPage);