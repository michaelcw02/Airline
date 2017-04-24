var controller;

function loadPage() {
    controller = new IndexController(window);
    controller.loadCities();
    addElementsProperties();
    controller.showCarousel();
    controller.showSearchFlights();
    controller.printButtons();
}

function addElementsProperties() {
    //BASIC ELEMENTS
    $("#departing").datepicker({ minDate: new Date() });
    $("#returning").datepicker({ minDate: new Date() });
    
    //EVENT HANDLERS
    $('#cityFrom').autocomplete( () => controller.setUpCitiesFrom() );
    $("#departing").change( () => controller.setMinReturnDate() );

    $('#btnRoundTrip').click( () => $("#returning").show() );
    $('#btnOneWay').click( () => $("#returning").hide() );
    
    $('#btnDecrease').click( () =>  controller.decreaseAdults() );
    $('#btnIncrease').click( () => controller.increaseAdults() );

    $('#cityFrom').change( () => controller.setUpCitiesTo() );

    $('#btnSearchFlights').click( () => controller.moveToFlights() );
}

function addListenersButtons(idButton, num){
    $(idButton).click( () => clearSearchFlights() );
    $(idButton).click( () => controller.showSearchFlights((num)) );
}

function searchFlights() {
    console.log('search');
}

function clearSearchFlights(){
    $("#flights").empty();
}

$(loadPage);