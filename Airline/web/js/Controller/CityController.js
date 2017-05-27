function CityController(view) {
    this.CityController(view);
}
CityController.prototype = {
    CityController: function (view) {
        this.view = view;
        this.airlineController = new AirlineController();
    },
    getAllCities: function () {
        this.airlineController.getAllCities((jsonResults) => {
            $("#tableCity").html("");
            var head = $("<thead />");
            var row = $("<tr/>");
            head.append(row);
            $("#tableCity").append(head);
            row.append($("<th><b>CODE</b></th>"));
            row.append($("<th><b>NAME</b></th>"));
            row.append($("<th><b>COUNTRY</b></th>"));
            row.append($("<th><b>ACTION</th>"));
            var row = $("<tr/>");
            for (let i in jsonResults) {
                let city = jsonResults[i];
                var row = $("<tr/>");
                $("#tableCity").append(row);
                row.append($("<td>" + city.code + "</td>"));
                row.append($("<td>" + city.name + "</td>"));
                row.append($("<td>" + city.country + "</td>"));
                row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="showCityForModify(\'' + city.code + '\',\'' + city.name + '\',\'' + city.country + '\');">' +
                        '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                        '</button>' +
                        '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="deleteCity(\'' + city.code + '\');">' +
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                        '</button></td>'));
            }

        });
    },
    searchCityByCode: function () {
        let code = this.view.$('#search').val();
        this.airlineController.searchCityByCode(code, (jsonResults) => {
            $("#tableCity").html("");
            var head = $("<thead />");
            var row = $("<tr/>");
            head.append(row);
            $("#tableCity").append(head);
            row.append($("<th><b>CODE</b></th>"));
            row.append($("<th><b>NAME</b></th>"));
            row.append($("<th><b>COUNTRY</b></th>"));
            row.append($("<th><b>ACTION</th>"));
            var row = $("<tr/>");
            $("#tableCity").append(row);
            row.append($("<td>" + jsonResults.code + "</td>"));
            row.append($("<td>" + jsonResults.name + "</td>"));
            row.append($("<td>" + jsonResults.country + "</td>"));
            row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="showCityForModify(\'' + jsonResults.code + '\',\'' + jsonResults.name + '\',\'' + jsonResults.country + '\');">' +
                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                    '</button>' +
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="deleteCity(\'' + jsonResults.code + '\');">' +
                    '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                    '</button></td>'));
        });
    },
    addCity: function () {
        if (!doValidate()) {
            let code = this.view.$('#code').val();
            let name = this.view.$('#name').val();
            let country = this.view.$('#country').val();
            this.airlineController.addCity(code, name, country);
            hideModal("myModalCity");
            $("#tableCity").empty();
        }
    },
    deleteCity: function (code) {
        this.airlineController.deleteCity(code);
        $("#tableCity").empty();
    },
    updateCity: function () {
        if (!doValidate()) {
            let code = this.view.$('#code').val();
            let name = this.view.$('#name').val();
            let country = this.view.$('#country').val();
            this.airlineController.updateCity(code, name, country);
            hideModal("myModalCity");
            $('#cityAction').val("addCity");
            $("#tableCity").empty();
        }
    },
    sendAction: function () {
        let verify = $('#cityAction').val();
        console.log(verify);
        if (verify == "updateCity") {
            this.updateCity();
        } else {
            this.addCity();
        }
    },
    cleanForm: () => {
        $('#code').focus();
        $("#code").removeAttr("readonly");
        $("#cityAction").val("addCity");
        $('#formCity').trigger("reset");
    },
}
function showCityForModify(code, name, country) {
    showModal("myModalCity");
    $("#code").attr('readonly', 'readonly');
    $("#code").val(code);
    $("#name").val(name);
    $("#country").val(country);
    $('#cityAction').val("updateCity");
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
    if (isBlank($('#code'))) {
        blanks = true;
    } else if (isBlank($('#name'))) {
        blanks = true;
    } else if (isBlank($('#country'))) {
        blanks = true;
    }
    return blanks;
}
function validateLength() {
    let error = false;
    var Max_Length1 = 20;
    var Max_Length2 = 3;
    var lengthCode = $("#code").val().length;
    var lengthName = $("#name").val().length;
    var lengthCountry = $("#country").val().length;

    if (lengthCode > Max_Length2) {
        alert("The max length of " + Max_Length2 + " characters is reached in Identifier, you typed in  " + lengthCode + "characters");
        error = true;
    }
    if (lengthName > Max_Length1) {
        alert("The max length of " + Max_Length1 + " characters is reached in Brand, you typed in  " + lengthName + "characters");
        error = true;
    }
    if (lengthCountry > Max_Length1) {
        alert("The max length of " + Max_Length1 + " characters in Rows is reached, you typed in  " + lengthCountry + "characters");
        error = true;
    }

    return error;
}

function doValidate() {
    let error = false;
    if (this.isSomethingBlank()) {
        alert("There is something you missed, please fill it up!");
        error = true;
    } else if (validateLength()) {
        error = true;
    }
    return error;
}


