
function loadRegister() {
    $('#birthdate').datepicker({ minDate: new Date() });
    initAutocomplete();
    addEventListeners();
}

function addEventListeners() {
    $('#registrationForm').on('submit', doValidate);
    $('#getDirection').on('click', getLocation);
    $('#direction').on('focus', showMap);
}

function showMap(event) {
    $('.map-container').show();
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