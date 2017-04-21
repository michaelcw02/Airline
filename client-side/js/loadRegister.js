
function loadRegister() {
    $('#birthdate').datepicker({});
    addEventListeners();
   // initAutocomplete();
}

function addEventListeners() {
    $('#registrationForm').on('submit', doValidate);
    $('#getDirection').on('click', getLocation);
}

function doValidate() {
    if (areBlanks) {
        //make the pop up!
    }

}

function areBlanks() {
    let blanks = false;
    blanks = isBlank($('#name')[0]);
    blanks = isBlank($('#lastname')[0]);
    blanks = isBlank($('#birthdate')[0]);
    blanks = isBlank($('#email')[0]);
    blanks = isBlank($('#password')[0]);
    blanks = isBlank($('#passwordRepeat')[0]);
    return blanks;
}
function isBlank(element) {
    element.classList.remove('invalid');
    if (element.value.length == 0) {
        element.classList.add('invalid');
        return true;
    }
}

function submitRegistration() {

}

$(loadRegister);