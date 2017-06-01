var controller;
function loadPage(event) {
    controller = new UserController(window);
    addElementsProperties();
}

function addElementsProperties() {
    $('#birthdate').datepicker( {
        changeMonth: true,
        changeYear: true,
        yearRange: '1900:-14'
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
        $("#tableUser").empty();
        controller.searchUserByUsername();
        $("#search").val("");
    });
    $("#btSearchAll").click(function () {
        $("#tableUser").empty();
        controller.getAllUsers();
    });
}
function deleteUser(username) {
    controller.deleteUser(username);
}
$(loadPage);



