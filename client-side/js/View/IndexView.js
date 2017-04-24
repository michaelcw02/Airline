var controller;

function loadPage() {
    controller = new IndexController(window);
    controller.loadCities();
    addElementsProperties();
    controller.showCarousel();
    controller.showSearchFlights(1);
    controller.printButtons();
}

function addElementsProperties() {
    //BASIC ELEMENTS
    $("#departing").datepicker({ minDate: new Date() });
    $("#returning").datepicker({ minDate: new Date() });
    $('#ctryFrom').autocomplete( () => controller.setUpCountriesFrom() );

    //EVENT HANDLERS
    $('#btnRoundTrip').click( () => $("#returning").show() );
    $('#btnOneWay').click( () => $("#returning").hide() );
    $("#departing").change( () => controller.setMinReturnDate() );
    $('#btnDecrease').click( () =>  controller.decreaseAdults() );
    $('#btnIncrease').click( () => controller.increaseAdults() );
    $('#from').change( () => controller.setUpCountriesTo() );
}

function addListenersButtons(idButton, num){
    $(idButton).click( () => clearSearchFlights() );
    $(idButton).click( () => controller.showSearchFlights((num)) );
}

function clearSearchFlights(){
    $("#flights").empty();
}

$(loadPage);