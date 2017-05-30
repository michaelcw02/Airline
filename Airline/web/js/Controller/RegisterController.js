const GoogleMapKey = 'AIzaSyDTA1btQZJ0v_4ry2yFCX7u70GcpePQcts';
function RegisterController(view) {
    this.RegisterController(view);
}

RegisterController.prototype = {
    RegisterController: function (view) {
        this.view = view;
        var divElemMap = document.getElementById('map');
        this.gMap = new GoogleMap(GoogleMapKey, divElemMap);
        this.airlineController = new AirlineController();
        //this.registerModel = new RegisterModel();
    },
    getLocation: function () {
        $('.map-container').show(); //CONTROLLER
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => this.gMap.setLocation(position, () => this.setLocationName()),
                (error) => this.gMap.showError(error)
            );
        } else {
            $('#map').innerHTML = "<h2>Geolocation is not supported by this browser.</h2>";
        }
    },
    setLocationName: function () {
        let latlng = this.gMap.mapOptions.center;
        let results = this.gMap.getLocationName(latlng);
        $('#direction').val(results[0].formatted_address);
    },
    isSomethingBlank: function () {
        let blanks = false;
        
        blanks = isBlank($('#name'));
        blanks = isBlank($('#firstlastname'));
        blanks = isBlank($('#secondlastname'));
        blanks = isBlank($('#birthdate'));
        blanks = isBlank($('#user'));
        blanks = isBlank($('#email'));
        blanks = isBlank($('#pass'));
        blanks = isBlank($('#passwordRepeat'));

        let $sex = $('input[name="sex"]:checked');
        removeInvalid($('#sex-radio-btn'));
        if(!$sex.length)
            setInvalid($('#sex-radio-btn'));        

        if ($('#agree:checked').length === 0) {
            $('#agree').addClass('invalid');
            blanks = true;
        }
        $('#agree').removeClass('invalid');
        if ($('#agree:checked').length === 0) {
            $('#agree').addClass('invalid');
            blanks = true;
        }
        
        return blanks;
    },
    doValidate: function () {
        $('.alert').hide();
        let error = false;
        if (this.isSomethingBlank()) {
            showAlert('There is something you missed, please fill it up!');
            error = true;
        }
        else if (!this.isPasswordOK()) {
            showAlert('The passwords doesn\'t match, please check them out!');
            error = true;
        }
        else if($('#telephone').val()) {
            phoneCheck( $('#telephone'), 'This is not a valid telephone number, please check it out!' );
            error = true;
        }
        else if($('#cellphone').val()) {
            phoneCheck( $('#cellphone'), 'This is not a valid cellphone number, please check it out!' );
            error = true;
        }
        if(error)
            event.preventDefault();
        return error;
    },

    isPasswordOK: function () {
        var pass_1 = $('#pass').val();
        var pass_2 = $('#passwordRepeat').val();
        if (pass_1 !== pass_2)
            return false;
        return true;
    },
    checkUsername: function(event) {
        console.log('password check')
    },
    submitRegistration: function() {
        let name = $('#name').val();
        let firstLast = $("#firstlastname").val();
        let secondLast = $("#secondlastname").val();
        let lastname = $('#lastname').val();
        let birthdate = $('#birthdate').val();
        let username = $('#username').val();
        let email = $('#email').val();
        let password = $('#pass').val();

        let msg = 'thank you for registering (THIS IS JUST A PLACEHOLDER!)';
        console.log(msg)
        window.alert(msg);
    },
    addUser: function () {
        let username = this.view.$("#user").val();
        let name = this.view.$("#name").val();
        let firstLast = this.view.$("#firstlastname").val();
        let secondLast = this.view.$("#secondlastname").val();
        let email = this.view.$("#email").val();
        let birth = this.view.$("#birthdate").val();
        let pass = this.view.$("#pass").val();
        let tel = this.view.$("#telephone").val();
        let cel = this.view.$("#cellphone").val();
        let direction = this.view.$("#direction").val();
        this.airlineController.addUser(username, pass, name, firstLast, secondLast, email, birth, direction, tel, cel);
    }
}



//AUXILIAR FUNCTIONS
function isBlank(element) {
    removeInvalid(element);
    if (!element.val()) {
        setInvalid(element);
        return true;
    }
}
function removeInvalid(element) {
    element.removeClass('invalid');
}
function setInvalid(element) {
    element.addClass('invalid');
}
function showAlert(msg) {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    $('#alert').text(msg)
    $('.alert').show();
}
function phoneCheck(element, errorMsg) {
    var regex = /^\d{4}[-\s]?\d{4}$/;
    removeInvalid( element );
    if (!regex.test(element.val())) {
        setInvalid(element);
        showAlert(errorMsg);
        return false;
    }
    return true;
}