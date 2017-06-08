function ProfileController(view) {
    this.ProfileController(view);
}

ProfileController.prototype = {
    ProfileController: function (view) {
        this.view = view;
        this.airlineController = new AirlineController();
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
       
        return blanks;
    },
    doValidate: function () {
        $('.alert').hide();
        let isOK = true;
        if (this.isSomethingBlank()) {
            showAlert('There is something you missed, please fill it up!');
            isOK = false;
        }
        else if (!this.isPasswordOK()) {
            showAlert('The passwords doesn\'t match, please check them out!');
            isOK = false;
        }
        else if($('#telephone').val()) {
            if(!phoneCheck( $('#telephone'), 'This is not a valid telephone number, please check it out!' )) {
                isOK = false;
            }
        }
        else if($('#cellphone').val()) {
            if(!phoneCheck( $('#cellphone'), 'This is not a valid cellphone number, please check it out!' )) {
                isOK = false;
            }             
        }
        if(!isOK)
            event.preventDefault();
        return isOK;
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
    updateUser: function () {
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
        this.airlineController.updateUser(username, pass, name, firstLast, secondLast, email, birth, direction, tel, cel);
        window.location.reload(true); 
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


