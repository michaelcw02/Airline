
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
            let returnTypeAirplane = jsonResults.brand;
            console.log( returnTypeAirplane);
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
        row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="alert(\'modify\');">' +
                '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                '</button>' +
                '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="alert(\'eliminate\');">' +
                '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +
                '</button></td>'));
           
            showResult(this.view.$('#typeAirplaneReturn'), returnTypeAirplane);

        });
        
    },
    cleanForm: () => {
        $('#identifier').focus();
        $("#identifier").removeAttr("readonly");
        $("#typeAirplaneAction").val("addTypeAirplane");
        $('#formTypeAirplane').trigger("reset");
    },

}

function showResult($container, jsonTypeAirplane) {
    $container.empty();
    $container.show();
    $container.css('z-index', 4000);

    $container.find('div.results').text(jsonTypeAirplane);
    console.log(jsonTypeAirplane);
}