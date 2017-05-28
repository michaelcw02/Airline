var controller;

function loadPage() {
    controller = new IndexController(window);
    controller.loadCities();
    addElementsProperties();
    controller.showCarousel();
}

function addElementsProperties() {
    //BASIC ELEMENTS
    $("#departing").datepicker({
        minDate: new Date(),
        dateFormat: "yy-mm-dd"
    });
    $("#returning").datepicker({
        minDate: new Date(),
        dateFormat: "yy-mm-dd"
    });

    $('#cityFrom').change(() => controller.setUpCitiesTo());

    $("#departing").change(() => controller.setMinReturnDate());

    $('#btnRoundTrip').click(() => $("#returning").fadeIn());
    $('#btnOneWay').click(() => $("#returning").fadeOut());

    $('#btnDecrease').click(() => controller.decreaseAdults());
    $('#btnIncrease').click(() => controller.increaseAdults());


    $('#btnSearchFlights').click(() => controller.moveToFlights());
    $('#cityTo').change(() => controller.cityFromHandlerHide());
    $('#cityFrom').change(() => controller.cityFromHandlerHide());
}

function addListenersButtons(idButton, num) {
    $(idButton).click(() => controller.pageButtonsHandler(num));
}
function addListenerTable() {
    $('#outbound-flights').on('click', 'tr', () => {
        controller.showFlightDetail(this.id, 'out');
    });
    $('#return-flights').on('click', 'tr', () => {
        controller.showFlightDetail(this.id, 'in');
    });
}

function searchFlights() {
    //THIS IS WHERE IT HAS TO GET THE FLIGHTS
    controller.searchFlights();
}

function toDataTable($table) {
    if (!$.fn.DataTable.isDataTable('#' + $table.attr('id'))) {
        $table.DataTable({
            "searching": false,
            "lengthChange": false,
            "order": [[1, "desc"]]
        });
    }
}

$(loadPage);