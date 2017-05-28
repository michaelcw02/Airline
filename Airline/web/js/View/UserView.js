var controller;
function loadPage(event) {
    controller = new UserController(window);
    addElementsProperties();
}

function addElementsProperties() {
    $("#birthdate").datepicker({
        minDate: new Date(),
        dateFormat: "yy-mm-dd"
    });
    $("#send").click(function () {
        controller.sendAction();
    });
    $("#cancel").click(function () {
        controller.cleanForm();
        $("#myModalUser").modal("hide");
    });
    $("#btShowForm").click(() => controller.cleanForm());
    $("#btSearch").click(function () {
        controller.searchUserByUsername();
        $("#search").val("");
    });
    $("#btSearchAll").click(() => controller.getAllUsers());
}
function deleteUser(username) {
    controller.deleteUser(username);
}
$(loadPage);



