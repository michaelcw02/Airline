var controller;

function loadPage(event){
    controller = new ProfileController(window);
    addElementsProperties();
}

function addElementsProperties() {
    //BASIC ELEMENTS
    $('#birthdate').datepicker( {
        changeMonth: true,
        changeYear: true,
        yearRange: '1900:-14'
    });
    
    //EVENT HANDLERS
    $('#btnUpdate').click( function (event){
        $("#update").removeClass("hide").addClass("show");
    });
    $('#profileForm').submit( () => controller.doValidate() );
}

function updateUser() {
    controller.updateUser();
}

$(loadPage);
