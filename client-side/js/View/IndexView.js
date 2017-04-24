var controller;

function loadPage() {
    controller = new IndexController(window);
    addElementsProperties();
    controller.showCarousel();
}

function addElementsProperties() {
    $('#btnRoundTrip').click( () => $("#returning").show() );
    $('#btnOneWay').click( () => $("#returning").hide() );
    $("#departing").datepicker({ minDate: new Date() });
    $("#departing").change( () => controller.setMinReturnDate() );
    $("#returning").datepicker({ minDate: new Date() } );
    $('#btnDecrease').click( () =>  controller.decreaseAdults() );
    $('#btnIncrease').click( () => controller.increaseAdults() );
}

function showCities(){
    window.alert("hello");
}

$(loadPage);