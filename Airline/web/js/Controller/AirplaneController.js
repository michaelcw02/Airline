
function AirplaneController(view) {
    this.AirplaneController(view);
}

AirplaneController.prototype = {
    AirplaneController: function (view) {
        this.view = view;
        this.airlineController = new AirlineController();
    },
    loadTypeAirplanes: function () {
        this.airlineController.getAllTypeAirline((results) => {
            fillWithTypeAirplanes(this.view.$('#typeAirplane'), results);
        });
    },
    getAllAirplane: function (callback) {
        this.airlineController.getAllAirplane((results) => {
            $("#tableAirplane").html("");
            var head = $("<thead />");
            var row = $("<tr/>");
            head.append(row);
            $("#tableAirplane").append(head);
            row.append($("<th><b>IDENTIFIER</b></th>"));
            row.append($("<th><b>TYPE OF AIRPLANE</b></th>"));
            row.append($("<th><b>ACTION</th>"));
            var row = $("<tr />");
            for (let i in results) {
                let airplane = results[i];
                var row = $("<tr/>");
                $("#tableAirplane").append(row);
                row.append($("<td>" + airplane.idAirplane + "</td>"));
                row.append($("<td>" + airplane.typeairplane.typeAirline + "</td>"));
                row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="showAirplaneForModify(\'' + results + '\');">' +
                        '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                        '</button>' +
                        '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="deleteTypeAirplane(\'' + results.airplane + '\');">' +
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                        '</button></td>'));
            }
        });
    },
    searchAirplane: function () {
        let airplane = this.view.$('#search').val();
        this.airlineController.searchAirplane(airplane, (jsonResults) => {
            $("#tableAirplane").html("");
            var head = $("<thead />");
            var row = $("<tr/>");
            head.append(row);
            $("#tableAirplane").append(head);
            row.append($("<th><b>IDENTIFIER</b></th>"));
            row.append($("<th><b>TYPE OF AIRPLANE</b></th>"));
            row.append($("<th><b>ACTION</th>"));
            var row = $("<tr />");
            $("#tableAirplane").append(row);
            row.append($("<td>" + jsonResults.idAirplane + "</td>"));
            row.append($("<td>" + jsonResults.typeairplane.typeAirline + "</td>"));
            row.append($('<td><button type="button" id="update" class="btn btn-default btn-xs" aria-label="Left Align" onclick="showAirplaneForModify(\'' + jsonResults.idAirplane + '\',\'' + jsonResults.typeairplane.typeAirline + '\');">' +
                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                    '</button>' +
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="alert(\'eliminate\');">' +
                    '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                    '</button></td>'));
        });
    },
    addAirplane: function () {
        if (!doValidate()) {
            let identifier = this.view.$('#identifier').val();
            let type_airplane = this.view.$('#typeAirplane').val();
            this.airlineController.addAirplane(identifier, type_airplane);
            hideModal("modalAirplane");
            $("#tableAirplane").empty();
        }
    },
    updateAirplane: function () {
        if (!doValidate()) {
            let id_airplane = this.view.$('#identifier').val();
            let type_airplane = this.view.$('#typeAirplane').val();
            this.airlineController.updateAirplane(id_airplane,type_airplane);
            hideModal("modalAirplane");
            $('#airplaneAction').val("addAirplane");
            $("#tableAirplane").empty();
        }
    },
    cleanForm: () => {
        $('#identifier').focus();
        $("#identifier").removeAttr("readonly");
        $("#airplaneAction").val("addAirplane");
        $('#formAirplanes').trigger("reset");
    },
    sendAction: function () {
        let verify = $('#airplaneAction').val();
        if (verify == "updateAirplane") {
            this.updateAirplane();
        } else {
            this.addAirplane();
        }
    },

}

function showResult($container, jsonAirplane) {
    $container.empty();
    $container.show();
    $container.css('z-index', 4000);

    $container.find('div.results').text(jsonAirplane);
    console.log(jsonAirplane);
}

function fillWithTypeAirplanes($select, typeAirplane) {
    $select.find('option').remove().end();
    $select.append('<option value="0">-</option>');
    for (let i in typeAirplane) {
        let tAirplane = typeAirplane[i];
        let element = '';
        element += '<option value="' + tAirplane.typeAirline + '">';
        element += '<span class=".h4">' + tAirplane.typeAirline + '</span></option>';
        $(element).appendTo($select);
    }
    if (!$select.has('option').length > 1)
        $select.append('<option value="undefined">No Type of Airplane</option>');
}

function showAirplaneForModify(idAirplane, typeAirplane) {
    showModal("modalAirplane");
    $("#identifier").attr('readonly', 'readonly');
    $("#identifier").val(idAirplane);
    $("#typeAirplane").val(typeAirplane);
    $('#airplaneAction').val("addAirplane");
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
    if (isBlank($('#identifier'))) {
        blanks = true;
    } else if (isBlankTypeAirplane($('#typeAirplane'))) {
        blanks = true;
    } 
    return blanks;
}
function isBlankTypeAirplane(element){
    removeInvalid(element);
    if(element.val() == 0){
        setInvalid(element);
        return true;
    }
}
function validateLength() {
    let error = false;
    var Max_Length = 20;
    var lengthIdentifier = $("#identifier").val().length;
    if (lengthIdentifier > Max_Length) {
        alert("The max length of " + Max_Length + " characters is reached in Identifier, you typed in  " + lengthIdentifier + "characters");
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