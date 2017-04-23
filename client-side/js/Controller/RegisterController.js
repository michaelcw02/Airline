const GoogleMapKey = 'AIzaSyDTA1btQZJ0v_4ry2yFCX7u70GcpePQcts';
function RegisterController(view) {
    this.RegisterController(view);
}

RegisterController.prototype = {
    RegisterController: function (view) {
        this.view = view;
        var divElemMap = document.getElementById('map');
        this.gMap = new GoogleMap(GoogleMapKey, divElemMap);
        //this.airlineController = new AirlineController();
        //this.registerModel = new RegisterModel();
    },
    completeLocation: () => {

    },
    getLocation: function () {
        $('.map-container').show(); //CONTROLLER
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => this.gMap.setLocation(position, () => this.setLocationName() ),
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
    areBlanks: function () {
        let blanks = false;
        blanks = isBlank($('#name')[0]);
        blanks = isBlank($('#lastname')[0]);
        blanks = isBlank($('#birthdate')[0]);
        blanks = isBlank($('#email')[0]);
        blanks = isBlank($('#password')[0]);
        blanks = isBlank($('#passwordRepeat')[0]);
        return blanks;
    },
    doValidate: function () {
        // if (areBlanks) 
        //    window.alert("ESPACIOS EN BLANCO");   //make the pop up!
        //  if (!samePassword)
        //     window.alert("CONTRASEÑAS DIFERENTES"); 
        window.alert("hola");
    },
    isBlank: function (element) {
        element.classList.remove('invalid');
        if (element.value.length == 0) {
            element.classList.add('invalid');
            return true;
        }
    },

    isNumber: function () {
        var regex = /^\(?\d{3}\)?-?\s*-?\d{4}$/;
        if (regex.test(phno.telephone.value)) {
            return true;
        }
        else {
            alert("This is not a valid phone number");
            return false;
        }
    },

    samePassword: function () {
        $('#passwordRepeat').keyup(function () {
            var pass_1 = $('#password').val();
            var pass_2 = $('#passwordRepeat').val();
            if (pass_1 != pass_2 && pass_2 != '') {
                return true;
            }
        });
    }
}


function setLocation(gMap) {
    return function (position) {
        gMap.setLocation(position);
    }
}
function showError(gMap) {
    return function (error) {
        gMap.showError(error);
    }
}