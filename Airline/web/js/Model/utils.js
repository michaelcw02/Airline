function showModal(idDiv, title, message) {
    $("#" + idDiv + "Title").html(title);
    $("#" + idDiv + "Message").html(message);
    $("#" + idDiv).modal();
}

function hideModal(idDiv) {
    $("#" + idDiv).modal("hide");
}

function changeMessageModal(idDiv, title, message) {
    $("#" + idDiv + "Title").html(title);
    $("#" + idDiv + "Message").html(message);
}
