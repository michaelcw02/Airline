function UserController(view) {
    this.UserController(view);
}
UserController.prototype = {
    UserController: function (view) {
        this.view = view;
        this.airlineController = new AirlineController();
    },
    getAllUsers: function () {
        this.airlineController.getAllUsers((jsonResults) => {
            $("#tableUser").html("");
            var head = $("<thead />");
            var row = $("<tr/>");
            head.append(row);
            $("#tableUser").append(head);
            row.append($("<th><b>USERNAME</b></th>"));
            row.append($("<th><b>NAME</b></th>"));
            row.append($("<th><b>FIRST LASTNAME</b></th>"));
            row.append($("<th><b>SECOND LASTNAME</b></th>"));
            row.append($("<th><b>BIRTHDATE</b></th>"));
            row.append($("<th><b>EMAIL</b></th>"));
            row.append($("<th><b>TELEPHONE</b></th>"));
            row.append($("<th><b>CELLPHONE</b></th>"));
            row.append($("<th><b>DIRECTION</b></th>"));
            row.append($("<th><b>ADMINISTRATOR</b></th>"));
            row.append($("<th><b>CLIENT</b></th>"));
            row.append($("<th><b>ACTION</th>"));
            var row = $("<tr/>");
            for (let i in jsonResults) {
                let user = jsonResults[i];
                var row = $("<tr/>");
                $("#tableUser").append(row);
                row.append($("<td>" + user.username + "</td>"));
                row.append($("<td>" + user.name + "</td>"));
                row.append($("<td>" + user.lastname1 + "</td>"));
                row.append($("<td>" + user.lastname2 + "</td>"));
                row.append($("<td>" + user.birthday + "</td>"));
                row.append($("<td>" + user.email + "</td>"));
                row.append($("<td>" + user.phone + "</td>"));
                row.append($("<td>" + user.celular + "</td>"));
                row.append($("<td>" + user.address + "</td>"));
                row.append($("<td>" + user.administrator + "</td>"));
                row.append($("<td>" + user.client + "</td>"));
                row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="showUserForModify(\'' + user.name + '\',\'' + user.lastname1 +
                    '\',\'' + user.lastname2 + '\',\'' + user.birthday + '\',\'' + user.email + '\',\'' + user.username + '\',\'' + user.password + '\',\'' + user.phone +
                    '\',\'' + user.celular + '\',\'' + user.address + '\');">' +
                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                    '</button>' +
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="deleteUser(\'' + user.username + '\');">' +
                    '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                    '</button></td>'));
            }

        });
    },
    searchUserByUsername: function () {
        let username = this.view.$('#search').val();
        this.airlineController.searchUserByUsername(username, (jsonResults) => {
            $("#tableUser").html("");
            var head = $("<thead />");
            var row = $("<tr/>");
            head.append(row);
            $("#tableUser").append(head);
            row.append($("<th><b>USERNAME</b></th>"));
            row.append($("<th><b>NAME</b></th>"));
            row.append($("<th><b>FIRST LASTNAME</b></th>"));
            row.append($("<th><b>SECOND LASTNAME</b></th>"));
            row.append($("<th><b>BIRTHDATE</b></th>"));
            row.append($("<th><b>EMAIL</b></th>"));
            row.append($("<th><b>TELEPHONE</b></th>"));
            row.append($("<th><b>CELLPHONE</b></th>"));
            row.append($("<th><b>DIRECTION</b></th>"));
            row.append($("<th><b>ADMINISTRATOR</b></th>"));
            row.append($("<th><b>CLIENT</b></th>"));
            row.append($("<th><b>ACTION</th>"));
            var row = $("<tr/>");
            $("#tableUser").append(row);
            row.append($("<td>" + jsonResults.username + "</td>"));
            row.append($("<td>" + jsonResults.name + "</td>"));
            row.append($("<td>" + jsonResults.lastname1 + "</td>"));
            row.append($("<td>" + jsonResults.lastname2 + "</td>"));
            row.append($("<td>" + jsonResults.birthday + "</td>"));
            row.append($("<td>" + jsonResults.email + "</td>"));
            row.append($("<td>" + jsonResults.phone + "</td>"));
            row.append($("<td>" + jsonResults.celular + "</td>"));
            row.append($("<td>" + jsonResults.address + "</td>"));
            row.append($("<td>" + jsonResults.administrator + "</td>"));
            row.append($("<td>" + jsonResults.client + "</td>"));
            row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="showUserForModify(\'' + jsonResults.name + '\',\'' + jsonResults.lastname1 +
                '\',\'' + jsonResults.lastname2 + '\',\'' + jsonResults.birthday + '\',\'' + jsonResults.email + '\',\'' + jsonResults.username + '\',\'' + jsonResults.password + '\',\'' + jsonResults.phone +
                '\',\'' + jsonResults.celular + '\',\'' + jsonResults.address + '\');">' +
                '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                '</button>' +
                '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="deleteUser(\'' + jsonResults.username + '\');">' +
                '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                '</button></td>'));
        });
    },
    addUser: function () {
        if (!doValidate()) {
            let user = {
                username: this.view.$("#user").val(),
                name: this.view.$("#name").val(),
                lastname1: this.view.$("#firstlastname").val(),
                lastname2: this.view.$("#secondlastname").val(),
                email: this.view.$("#email").val(),
                birthdate: this.view.$("#birthdate").val(),
                password: this.view.$("#pass").val(),
                telephone: this.view.$("#telephone").val(),
                cellphone: this.view.$("#cellphone").val(),
                direction: this.view.$("#direction").val()
            }
            this.airlineController.addUser(user, 1, 0, (data) => {
                showModal('myModal', 'Status', 'The user was successfully registered into the database');
                setTimeout( () => { hideModal('myModal') }, 1500);
            });
            hideModal("myModalUser");
            $("#tableUser").empty();
        }
    },
    deleteUser: function (username) {
        this.airlineController.deleteUser(username);
        $("#tableUser").empty();
    },
    updateUser: function () {
        if (!doValidate()) {
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
            hideModal("myModalUser");
            $('#userAction').val("addUser");
            $("#tableUser").empty();
        }
    },
    sendAction: function () {
        let verify = $('#userAction').val();
        if (verify == "updateUser") {
            this.updateUser();
        } else {
            this.addUser();
        }
    },
    cleanForm: () => {
        $('#user').focus();
        $("#user").removeAttr("readonly");
        $("#userAction").val("addUser");
        $('#formUser').trigger("reset");
    }
}

function showUserForModify(name, firstlastname, secondlastname, birthdate, email, username, password, telephone, cellphone, direction) {
    showModal("myModalUser");
    $("#name").val(name);
    $("#firstlastname").val(firstlastname);
    $("#secondlastname").val(secondlastname);
    $("#birthdate").val(birthdate);
    $("#email").val(email);
    $("#user").attr('readonly', 'readonly');
    $("#user").val(username);
    $("#pass").val(password);
    $("#passwordRepeat").val(password);
    $("#telephone").val(telephone);
    $("#cellphone").val(cellphone);
    $("#direction").val(direction);
    $('#userAction').val("updateUser");
}

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

function isSomethingBlank() {
    let blanks = false;
    if (isBlank($('#user'))) {
        blanks = true;
    } else if (isBlank($('#name'))) {
        blanks = true;
    } else if (isBlank($('#firstlastname'))) {
        blanks = true;
    } else if (isBlank($('#secondlastname'))) {
        blanks = true;
    } else if (isBlank($('#birthdate'))) {
        blanks = true;
    } else if (isBlank($('#email'))) {
        blanks = true;
    } else if (isBlank($('#pass'))) {
        blanks = true;
    } else if (isBlank($('#passwordRepeat'))) {
        blanks = true;
    } else if (isBlank($('#telephone'))) {
        blanks = true;
    } else if (isBlank($('#cellphone'))) {
        blanks = true;
    } else if (isBlank($('#direction'))) {
        blanks = true;
    }
    return blanks;
}

function validateLength() {
    let error = false;
    var Max_Length1 = 20;
    var Max_Length2 = 40;
    var Max_Length3 = 50;
    var lengthUsername = $("#user").val().length;
    var lengthName = $("#name").val().length;
    var lengthFLast = $("#firstlastname").val().length;
    var lengthSLast = $("#secondlastname").val().length;
    var lengthEmail = $("#email").val().length;
    var lengthPass = $("#pass").val().length;
    var lengthPass2 = $("#passwordRepeat").val().length;
    var lengthTel = $("#telephone").val().length;
    var lengthCel = $("#cellphone").val().length;
    var lengthDirection = $("#direction").val().length;

    if (lengthUsername > Max_Length1) {
        alert("The max length of " + Max_Length1 + " characters is reached in Username, you typed in  " + lengthUsername + "characters");
        error = true;
    }
    if (lengthName > Max_Length1) {
        alert("The max length of " + Max_Length1 + " characters is reached in name, you typed in  " + lengthName + "characters");
        error = true;
    }
    if (lengthFLast > Max_Length1) {
        alert("The max length of " + Max_Length1 + " characters is reached in first lastname, you typed in  " + lengthFLast + "characters");
        error = true;
    }
    if (lengthSLast > Max_Length1) {
        alert("The max length of " + Max_Length1 + " characters is reached in second lastname, you typed in  " + lengthSLast + "characters");
        error = true;
    }
    if (lengthEmail > Max_Length2) {
        alert("The max length of " + Max_Length2 + " characters is reached in email, you typed in  " + lengthEmail + "characters");
        error = true;
    }
    if (lengthPass > Max_Length1) {
        alert("The max length of " + Max_Length1 + " characters is reached in password, you typed in  " + lengthPass + "characters");
        error = true;
    }
    if (lengthPass2 > Max_Length1) {
        alert("The max length of " + Max_Length1 + " characters is reached in password, you typed in  " + lengthPass2 + "characters");
        error = true;
    }
    if (lengthTel > Max_Length2) {
        alert("The max length of " + Max_Length2 + " characters is reached in telephone, you typed in  " + lengthTel + "characters");
        error = true;
    }
    if (lengthCel > Max_Length1) {
        alert("The max length of " + Max_Length1 + " characters is reached in cellphone, you typed in  " + lengthCel + "characters");
        error = true;
    }
    if (lengthDirection > Max_Length3) {
        alert("The max length of " + Max_Length3 + " characters is reached in direction, you typed in  " + lengthDirection + "characters");
        error = true;
    }

    return error;
}

function validatePass() {
    let error = false;
    let pass = $("#pass").val();
    let pass2 = $("#passwordRepeat").val();
    if (pass != pass2) {
        alert("Passwords do not match");
        error = true;
    }
    return error;
}

function phoneCheck(element, errorMsg) {
    removeInvalid(element);
    var regex = /^\d{4}[-\s]?\d{4}$/;
    if (!regex.test(element.val())) {
        setInvalid(element);
        alert(errorMsg);
        return true;
    }
    
    return false;
}

function doValidate() {
    let error = false;
    if (this.isSomethingBlank()) {
        alert("There is something you missed, please fill it up!");
        error = true;
    } else if (validateLength()) {
        error = true;
    } else if (validatePass()) {
        error = true;
    } else if(phoneCheck( $('#telephone'), 'This is not a valid telephone number, please check it out!' )) {
        error = true;
    } else if(phoneCheck( $('#cellphone'), 'This is not a valid cellphone number, please check it out!' )) {
        error = true;
    }
    return error;
}