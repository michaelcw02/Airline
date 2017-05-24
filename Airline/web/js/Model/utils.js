function showModal(idDiv, titulo, mensaje) {
    $("#" + idDiv + "Title").html(titulo);
    $("#" + idDiv + "Message").html(mensaje);
    $("#" + idDiv).modal();
}

function hideModal(idDiv) {
    $("#" + idDiv).modal("hide");
}

function changeMessageModal(idDiv, title, message) {
    $("#" + idDiv + "Title").html(title);
    $("#" + idDiv + "Message").html(message);
}
