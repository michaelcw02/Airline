
function AirplaneController(view) {
    this.AirplaneController(view);
}

AirplaneController.prototype = {
    AirplaneController: function (view) {
        this.view = view;
        this.airlineController = new AirlineController();
    },
    getAllAirplane: function (callback) {
        this.airlineController.getAllAirline((result) => {
            callback(result);
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
            row.append($("<td>" + jsonResults.id_airplane + "</td>"));
            row.append($("<td>" + jsonResults.type_airplane + "</td>"));
            row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="alert(\'modify\');">' +
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