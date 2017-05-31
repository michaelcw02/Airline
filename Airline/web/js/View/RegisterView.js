var controller;

function loadPage(event){
    controller = new RegisterController(window);
    addElementsProperties();
}

function addElementsProperties() {
    //BASIC ELEMENTS
    $('#birthdate').datepicker( {
        changeMonth: true,
        changeYear: true
    });
    
    //EVENT HANDLERS
    $('#registrationForm').submit( () => controller.doValidate() );
    $('#getDirection').click( () => controller.getLocation() );
    $('#user').on( 'keypress change', () => controller.checkUsername() );
}

function addUser() {
    controller.addUser();
}

function submitRegistration() {
    controller.submitRegistration();
}
$(loadPage);
