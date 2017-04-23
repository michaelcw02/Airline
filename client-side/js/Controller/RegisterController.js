//ONE OF THESE CONSTRUCTORS IS THE RIGHT OPTION
/*
function RegisterController(model,view){
    this.RegisterController(model,view)
}
*/
function RegisterController(view) {
    this.RegisterController(view);
}

RegisterController.prototype = {
    RegisterController: function(view){
        this.view = view;
        this.airlineController = new AirlineController();
        this.registerModel = new RegisterModel();
    },
    getLocation: function() {
        return registerModel.getLocation();
    },
    areBlanks: function() {
        let blanks = false;
        blanks = isBlank($('#name')[0]);
        blanks = isBlank($('#lastname')[0]);
        blanks = isBlank($('#birthdate')[0]);
        blanks = isBlank($('#email')[0]);
        blanks = isBlank($('#password')[0]);
        blanks = isBlank($('#passwordRepeat')[0]);
        return blanks;
    },
    doValidate: function() {
    // if (areBlanks) 
    //    window.alert("ESPACIOS EN BLANCO");   //make the pop up!
    //  if (!samePassword)
    //     window.alert("CONTRASEÑAS DIFERENTES"); 
        window.alert("hola");
    },
    isBlank: function(element) {
        element.classList.remove('invalid');
        if (element.value.length == 0) {
            element.classList.add('invalid');
            return true;
        }
    },

    isNumber: function(){
        var regex = /^\(?\d{3}\)?-?\s*-?\d{4}$/;
        if(regex.test(phno.telephone.value)){
            return true;
        }
        else{
            alert("This is not a valid phone number");
            return false;
        }
    },

    samePassword: function(){
        $('#passwordRepeat').keyup(function(){
            var pass_1 = $('#password').val();
            var pass_2 = $('#passwordRepeat').val();
            if(pass_1 != pass_2 && pass_2 != ''){
                return true;
            }
        });
    }
}