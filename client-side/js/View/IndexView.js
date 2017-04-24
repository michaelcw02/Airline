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
<<<<<<< HEAD
    //showCities($("#from").first());
    //showCities($("#to").first());
    $("#returning").datepicker( () => controller.returningDate() );
=======
    $("#departing").change( () => controller.setMinReturnDate() );
    $("#returning").datepicker({ minDate: new Date() } );
>>>>>>> finished datepickers
    $('#btnDecrease').click( () =>  controller.decreaseAdults() );
    $('#btnIncrease').click( () => controller.increaseAdults() );
}

function showCities(){
    window.alert("hello");
}

$(loadPage);