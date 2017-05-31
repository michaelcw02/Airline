var controller;

function loadPage() {
    controller = new TicketsController(window);
    addElementsProperties();
}

function addElementsProperties() {
    //BASIC ELEMENTS
}

function addListenersButtons(idButton, num) {
    $(idButton).click(() => controller.pageButtonsHandler(num));
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