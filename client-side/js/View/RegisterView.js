var model;
var controller;

function loadPage(event){
    model = new RegisterModel();
    controller = new RegisterController(model, window);
    addElementsProperties();

}

function addElementsProperties() {
    //BASIC ELEMENTS
    $('#birthdate').datepicker();

    //EVENT HANDLERS
    $('#registrationForm').submit( () => controller.doValidate() );
    $('#getDirection').click( () => controller.location() )
}

$(loadPage);
