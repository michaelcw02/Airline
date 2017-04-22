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
    //showCities($("#from").first());
    //showCities($("#to").first());
    $("#returning").datepicker( () => controller.returningDate() );
    $('#btnDecrease').click( () =>  controller.decreaseAdults() );
    $('#btnIncrease').click( () => controller.increaseAdults() );
}

function showCities(){
    window.alert("hello");
}

$(loadPage);