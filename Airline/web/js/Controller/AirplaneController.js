
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
            row.append($('<td><button type="button" id="update" class="btn btn-default btn-xs" aria-label="Left Align" onclick="showAirplaneForModify(\'' + jsonResults + '\');">' +
                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                    '</button>' +
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="alert(\'eliminate\');">' +
                    '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                    '</button></td>'));
        });
    },
    addAirplane: function () {
        let identifier = this.view.$('#identifier').val();
        let type_airplane = this.view.$('#type_airplane').val();
        this.airlineController.addAirplane(identifier, type_airplane);
    },
    updateAirplane: function () {
        let id_airplane = this.view.$('#identifier').val();
        let type_airplane = this.view.$('#typeAirplane').val();
        this.airlineController.updateAirplane(id_airplane,type_airplane);
        hideModal("modalAirplane");
    },
    cleanForm: () => {
        $('#identifier').focus();
        $("#identifier").removeAttr("readonly");
        $("#airplaneAction").val("addAirplane");
        $('#formAirplanes').trigger("reset");
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

function showAirplaneForModify(airplane) {
    showModal("modalAirplane");
    $("#identifier").attr('readonly', 'readonly');
    $("#identifier").val(airplane.idAirplane);
    $("#typeAirplane").val(airplane.typeairplane.typeAirline);
}