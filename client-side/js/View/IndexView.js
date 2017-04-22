var controller;

function loadPage() {
    controller = new IndexController(window);
    addElementsProperties();
    controller.showCarousel();
}

function addElementsProperties() {
    $('#btnRoundTrip').click( controller.showReturning() );
    $('#btnOneWay').click( controller.hideReturning() );
    $("#departing").datepicker({ minDate: new Date() });
    $("#returning").datepicker( controller.returningDate() );
    $('#btnDecrease').click( controller.decreaseAdults() );
    $('#btnIncrease').click( controller.increaseAdults() );
}

$(loadPage);