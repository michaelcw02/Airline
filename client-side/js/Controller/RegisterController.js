

function RegisterController(model,view){
    this.RegisterController(model,view)
}

RegisterController.prototype = {
    RegisterController: function(model,view){
        this.model = model;
        this.view = view;
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

function isNumber(){
    var regex = /^\(?\d{3}\)?-?\s*-?\d{4}$/;
    if(regex.test(phno.telephone.value)){
  
    return true;
    }
    else{
      alert("This is not a valid phone number");
      return false;
  }
}


function samePassword(){
   	$('#passwordRepeat').keyup(function(){
		var pass_1 = $('#password').val();
		var pass_2 = $('#passwordRepeat').val();
		if(pass_1 != pass_2 && pass_2 != ''){
			return true;
		}
	});
}