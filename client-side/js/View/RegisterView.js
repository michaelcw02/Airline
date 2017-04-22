var model;
var controller;

function loadPage(event){
    model = new RegisterModel();
    controller = new RegisterController(model, window);
    addElementsProperties();

}

function addElementsProperties() {
    $('#birthdate').datepicker({ minDate: new Date() });
    $('#registrationForm').submit( () => controller.doValidate() );
    $('#getDirection').click( () => controller.location() )
}

$(loadPage);
