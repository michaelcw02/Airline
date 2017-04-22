var controller;

function loadPage() {
    controller = new IndexController(window);
    controller.loadCities();
    addElementsProperties();
    controller.showCarousel();
}

function addElementsProperties() {
    //BASIC ELEMENTS
    $("#departing").datepicker({ minDate: new Date() });
    $("#returning").datepicker({ minDate: new Date() } );
    $('#ctryFrom').autocomplete( () => controller.setUpCountriesFrom() );

    //EVENT HANDLERS
    $('#btnRoundTrip').click( () => $("#returning").show() );
    $('#btnOneWay').click( () => $("#returning").hide() );
    $("#departing").change( () => controller.setMinReturnDate() );
    $("#departing").datepicker({ minDate: new Date() });
    //showCities($("#from").first());
    //showCities($("#to").first());
    $('#btnDecrease').click( () =>  controller.decreaseAdults() );
    $('#btnIncrease').click( () => controller.increaseAdults() );
    $('#from').change( () => controller.setUpCountriesTo() );
}

function showCities(){
    window.alert("hello");
}

$(loadPage);