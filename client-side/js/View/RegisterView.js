var controller;

function loadPage(event){
    controller = new RegisterController(window);
    addElementsProperties();
}

function addElementsProperties() {
    //BASIC ELEMENTS
    $('#birthdate').datepicker();

    //EVENT HANDLERS
    $('#getDirection').click( () => controller.getLocation() );
    $('#registrationForm').submit( () => controller.doValidate() );
}

$(loadPage);
