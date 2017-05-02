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
    $('#username').on( 'keypress change', () => controller.checkUsername() );
}

function submitRegistration() {
    controller.submitRegistration();
}
$(loadPage);
