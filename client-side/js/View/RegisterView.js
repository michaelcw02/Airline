

var model;
var controller;

function pageLoad(event){
    model = new RegisterModel();
    controller = new RegisterController(model, window);

    $('#birthdate').datepicker();
    $('#registrationForm').on('submit', doValidate);
    $('#getDirection').on('click', getLocation);
}
