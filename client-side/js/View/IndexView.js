var controller;

function loadPage() {
    controller = new IndexController(window);
    controller.loadCities();
    addElementsProperties();
    controller.showCarousel();
    controller.showSearchFlights();
}

function addElementsProperties() {
    //BASIC ELEMENTS
    $("#departing").datepicker({ minDate: new Date() });
    $("#returning").datepicker({ minDate: new Date() });
    
    //EVENT HANDLERS
    //$('#cityFrom').autocomplete( () => controller.setUpCitiesFrom() );
    $("#departing").change( () => controller.setMinReturnDate() );

    $('#btnRoundTrip').click( () => $("#returning").show() );
    $('#btnOneWay').click( () => $("#returning").hide() );
    
    $('#btnDecrease').click( () =>  controller.decreaseAdults() );
    $('#btnIncrease').click( () => controller.increaseAdults() );

    $('#cityFrom').change( () => controller.setUpCitiesTo() );

    $('#btnSearchFlights').click( () => controller.moveToFlights() );
    $('#cityTo').change( () => controller.cityFromHandlerHide() );
    $('#cityFrom').change( () => controller.cityFromHandlerHide() );
}

function addListenersButtons(idButton, num){
    $(idButton).click( () => controller.pageButtonsHandler(num) );
}

function searchFlights() {
    //THIS IS WHERE IT HAS TO GET THE FLIGHTS
    controller.searchFlights();
}

$(loadPage);