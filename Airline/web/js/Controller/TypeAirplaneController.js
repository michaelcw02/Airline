
function TypeAirplaneController(view) {
    this.TypeAirplaneController(view);
}

TypeAirplaneController.prototype = {
    TypeAirplaneController: function (view) {
        this.view = view;
        this.airlineController = new AirlineController();
    },
    getAllTypeAirline: function (callback) {
        this.airlineController.getAllTypeAirline((result) => {
            callback(result);
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
            row.append($("<th><b>ROWS PER SEAT</th>"));
            row.append($("<th><b>ACTION</th>"));
            var row = $("<tr />");
            $("#tableTypeAirplane").append(row);
            row.append($("<td>" + jsonResults.typeAirline + "</td>"));
            row.append($("<td>" + jsonResults.year + "</td>"));
            row.append($("<td>" + jsonResults.brand + "</td>"));
            row.append($("<td>" + jsonResults.qtyOfSeats + "</td>"));
            row.append($("<td>" + jsonResults.qtyOfRows + "</td>"));
            row.append($("<td>" + jsonResults.seatsPerRow + "</td>"));
            row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="alert(\'eliminate\');">' +
                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                    '</button>' +
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="deleteTypeAirplane('+jsonResults+');">' +
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
        }
    },
    cleanForm: () => {
        $('#identifier').focus();
        $("#identifier").removeAttr("readonly");
        $("#typeAirplaneAction").val("addTypeAirplane");
        $('#formTypeAirplane').trigger("reset");
    },
    deleteTypeAirplane: function (typeAirplane) {
        this.airlineController.deleteTypeAirplane(typeAirplane.typeAirline);
    },
    updateTypeAirplane: function () {
        let type_airplane = this.view.$('#identifier').val();
        let year = this.view.$('#year').val();
        let brand = this.view.$('#brand').val();
        let rows = this.view.$('#rows').val();
        let seatsPerRow = this.view.$('#seatsRow').val();
        this.airlineController.updateTypeAirplane(type_airplane, year, brand, rows, seatsPerRow);
        hideModal("myModalTypeAirplane");
    },
}

function showResult($container, jsonTypeAirplane) {
    $container.empty();
    $container.show();
    $container.css('z-index', 4000);
    $container.find('div.results').text(jsonTypeAirplane);
    console.log(jsonTypeAirplane);
}
function showTypeAirplaneForModify(typeAirplane) {
    showModal("myModalTypeAirplane");
    $("#identifier").attr('readonly', 'readonly');
    $("#identifier").val(typeAirplane.typeAirline);
    $("#year").val(typeAirplane.year);
    $("#brand").val(typeAirplane.brand);
    $("#rows").val(typeAirplane.qtyOfRows);
    $("#seatsRow").val(typeAirplane.seatsPerRow);
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
    if(isBlank($('#identifier'))){
        blanks=true;
    }else if(isBlank($('#year'))){
        blanks=true;
    }else if(isBlank($('#brand'))){
        blanks=true;
    }else 
        if(isBlank($('#seatsRow'))){
        blanks=true;
    }
    return blanks;
}
function validateYear() {
    let text = $('#year');
    let error = false;
    if (!/^([1600-2018])*$/.test(text)) {
        error = true;
    }
    return error;
}
function doValidate() {
    let error = false;
    if (this.isSomethingBlank()) {
        alert('There is something you missed, please fill it up!');
        error = true;
    } //else if (validateYear()) {
        //alert("The value year isn´t a number or is an invalid number");
       // error = true;
  
    return error;
}