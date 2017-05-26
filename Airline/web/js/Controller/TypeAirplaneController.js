
function TypeAirplaneController(view) {
    this.TypeAirplaneController(view);
}

TypeAirplaneController.prototype = {
    TypeAirplaneController: function (view) {
        this.view = view;
        this.airlineController = new AirlineController();
    },
    getAllTypeAirline: function () {
        this.airlineController.getAllTypeAirline((jsonResults) => {
            $("#tableTypeAirplane").html("");
            var head = $("<thead />");
            var row = $("<tr/>");
            head.append(row);
            $("#tableTypeAirplane").append(head);
            row.append($("<th><b>IDENTIFIER</b></th>"));
            row.append($("<th><b>YEAR</b></th>"));
            row.append($("<th><b>BRAND</b></th>"));
            row.append($("<th><b>QUANTITY OF SEATS</b></th>"));
            row.append($("<th><b>ROWS</b></th>"));
            row.append($("<th><b>SEATS PER ROW</th>"));
            row.append($("<th><b>ACTION</th>"));
            var row = $("<tr/>");
            for (let i in jsonResults) {
                let typeAirplane = jsonResults[i];
                var row = $("<tr/>");
                $("#tableTypeAirplane").append(row);
                row.append($("<td>" + typeAirplane.typeAirline + "</td>"));
                row.append($("<td>" + typeAirplane.year + "</td>"));
                row.append($("<td>" + typeAirplane.brand + "</td>"));
                row.append($("<td>" + typeAirplane.qtyOfSeats + "</td>"));
                row.append($("<td>" + typeAirplane.qtyOfRows + "</td>"));
                row.append($("<td>" + typeAirplane.seatsPerRow + "</td>"));
                row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="showTypeAirplaneForModify(\'' + typeAirplane.typeAirline + '\',\'' + typeAirplane.year + '\',\'' + typeAirplane.brand + '\',\'' + typeAirplane.qtyOfRows + '\',\'' + typeAirplane.seatsPerRow + '\');">' +
                        '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                        '</button>' +
                        '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="deleteTypeAirplane(\'' + typeAirplane.typeAirline + '\');">' +
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                        '</button></td>'));
            }

        });
    },
    searchTypeAirplane: function () {
        let type_airline = this.view.$('#search').val();
        this.airlineController.searchTypeAirplane(type_airline, (jsonResults) => {
            $("#tableTypeAirplane").html("");
            var head = $("<thead />");
            var row = $("<tr/>");
            head.append(row);
            $("#tableTypeAirplane").append(head);
            row.append($("<th><b>IDENTIFIER</b></th>"));
            row.append($("<th><b>YEAR</b></th>"));
            row.append($("<th><b>BRAND</b></th>"));
            row.append($("<th><b>QUANTITY OF SEATS</b></th>"));
            row.append($("<th><b>ROWS</b></th>"));
            row.append($("<th><b>SEATS PER ROW</th>"));
            row.append($("<th><b>ACTION</th>"));
            var row = $("<tr/>");
            $("#tableTypeAirplane").append(row);
            row.append($("<td>" + jsonResults.typeAirline + "</td>"));
            row.append($("<td>" + jsonResults.year + "</td>"));
            row.append($("<td>" + jsonResults.brand + "</td>"));
            row.append($("<td>" + jsonResults.qtyOfSeats + "</td>"));
            row.append($("<td>" + jsonResults.qtyOfRows + "</td>"));
            row.append($("<td>" + jsonResults.seatsPerRow + "</td>"));
            row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="showTypeAirplaneForModify(\'' + jsonResults.typeAirline + '\',\'' + jsonResults.year + '\',\'' + jsonResults.brand + '\',\'' + jsonResults.qtyOfRows + '\',\'' + jsonResults.seatsPerRow + '\');">' +
                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                    '</button>' +
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="deleteTypeAirplane(\'' + jsonResults.typeAirline + '\');">' +
                    '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                    '</button></td>'));
        });
    },
    showTable: function () {
        let type_airline = this.view.$('#identifier').val();
        this.airlineController.searchTypeAirplane(type_airline, (jsonResults) => {
            $("#tableTypeAirplane").html("");
            var head = $("<thead />");
            var row = $("<tr/>");
            head.append(row);
            $("#tableTypeAirplane").append(head);
            row.append($("<th><b>IDENTIFIER</b></th>"));
            row.append($("<th><b>YEAR</b></th>"));
            row.append($("<th><b>BRAND</b></th>"));
            row.append($("<th><b>QUANTITY OF SEATS</b></th>"));
            row.append($("<th><b>ROWS</b></th>"));
            row.append($("<th><b>SEATS PER ROW</th>"));
            row.append($("<th><b>ACTION</th>"));
            var row = $("<tr/>");
            $("#tableTypeAirplane").append(row);
            row.append($("<td>" + jsonResults.typeAirline + "</td>"));
            row.append($("<td>" + jsonResults.year + "</td>"));
            row.append($("<td>" + jsonResults.brand + "</td>"));
            row.append($("<td>" + jsonResults.qtyOfSeats + "</td>"));
            row.append($("<td>" + jsonResults.qtyOfRows + "</td>"));
            row.append($("<td>" + jsonResults.seatsPerRow + "</td>"));
            row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="showTypeAirplaneForModify(\'' + jsonResults.typeAirline + '\',\'' + jsonResults.year + '\',\'' + jsonResults.brand + '\',\'' + jsonResults.qtyOfRows + '\',\'' + jsonResults.seatsPerRow + '\');">' +
                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                    '</button>' +
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="deleteTypeAirplane(\'' + jsonResults.typeAirline + '\');">' +
                    '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                    '</button></td>'));
        });
    },
    addTypeAirplane: function () {
        if (!doValidate()) {
            let type_airplane = this.view.$('#identifier').val();
            let year = this.view.$('#year').val();
            let brand = this.view.$('#brand').val();
            let rows = this.view.$('#rows').val();
            let seatsPerRow = this.view.$('#seatsRow').val();
            this.airlineController.addTypeAirplane(type_airplane, year, brand, rows, seatsPerRow);
            hideModal("myModalTypeAirplane");
            $("#tableTypeAirplane").empty();
        }
    },
    cleanForm: () => {
        $('#identifier').focus();
        $("#identifier").removeAttr("readonly");
        $("#typeAirplaneAction").val("addTypeAirplane");
        $('#formTypeAirplane').trigger("reset");
    },

    deleteTypeAirplane: function (typeAirline) {
        //verificar que no exista ningun avion ligado a el para poder eliminar
        this.airlineController.deleteTypeAirplane(typeAirline);
        $("#tableTypeAirplane").empty();
    },
    updateTypeAirplane: function () {
        if (!doValidate()) {
            let type_airplane = this.view.$('#identifier').val();
            let year = this.view.$('#year').val();
            let brand = this.view.$('#brand').val();
            let rows = this.view.$('#rows').val();
            let seatsPerRow = this.view.$('#seatsRow').val();
            this.airlineController.updateTypeAirplane(type_airplane, year, brand, rows, seatsPerRow);
            hideModal("myModalTypeAirplane");
            $('#typeAirplaneAction').val("addTypeAirplane");
            $("#tableTypeAirplane").empty();
        }
    },
    sendAction: function () {
        let verify = $('#typeAirplaneAction').val();
        console.log(verify);
        if (verify == "updateTypeAirplane") {
            this.updateTypeAirplane();
        } else {
            this.addTypeAirplane();
        }
    },
}
function showResult($container, jsonTypeAirplane) {
    $container.empty();
    $container.show();
    $container.css('z-index', 4000);
    $container.find('div.results').text(jsonTypeAirplane);
    console.log(jsonTypeAirplane);
}
function showTypeAirplaneForModify(typeAirline, year, brand, qtyOfRows, seatsPerRow) {
    showModal("myModalTypeAirplane");
    $("#identifier").attr('readonly', 'readonly');
    $("#identifier").val(typeAirline);
    $("#year").val(year);
    $("#brand").val(brand);
    $("#rows").val(qtyOfRows);
    $("#seatsRow").val(seatsPerRow);
    $('#typeAirplaneAction').val("updateTypeAirplane");
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
    } else if (isBlank($('#year'))) {
        blanks = true;
    } else if (isBlank($('#brand'))) {
        blanks = true;
    } else
    if (isBlank($('#rows'))) {
        blanks = true;
    }
    return blanks;
}
function validateYear() {
    let text = $('#year').val();
    let error = true;
    let regex = /^(194[0-9]|19[5-9]\d|200\d|201[0-7])$/;
    if (regex.test(text)) {
        error = false;
    }
    return error;
}
function validateLength() {
    let error = false;
    var Max_Length1 = 20;
    var Max_Length2 = 11;
    var lengthId = $("#identifier").val().length;
    var lengthBrand = $("#brand").val().length;
    var lengthRow = $("#rows").val().length;

    if (lengthId > Max_Length1) {
        alert("The max length of " + Max_Length1 + " characters is reached in Identifier, you typed in  " + lengthId + "characters");
        error = true;
    }
    if (lengthBrand > Max_Length1) {
        alert("The max length of " + Max_Length1 + " characters is reached in Brand, you typed in  " + lengthBrand + "characters");
        error = true;
    }
    if (lengthRow > Max_Length2) {
        alert("The max length of " + Max_Length2 + " characters in Rows is reached, you typed in  " + lengthRow + "characters");
        error = true;
    }

    return error;
}

function doValidate() {
    let error = false;
    if (this.isSomethingBlank()) {
        alert("There is something you missed, please fill it up!");
        error = true;
    } else if (validateYear()) {
        alert("The value year isn´t a number or is an invalid number");
        error = true;
    } else if (validateLength()) {
        error = true;
    }
    return error;
}
