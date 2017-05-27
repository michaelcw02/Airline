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
function calculateArrivalDate(departureDate, departureTime, duration) {
    return 'Missing ' + departureDate;
}
function calculateArrivalTime(departureTime, duration) {
    return 'Missing' + departureTime;
}
function calculatePrice(basePrice, discount) {
    return (discount != 0) ? basePrice * ((100 - discount) / 100) : basePrice;
}
function calculateDuration(duration) {
    let minutes = duration % 60;
    let hours = Math.floor(duration / 60);
    return (hours == 0) ? minutes + 'm' : hours + 'h ' + minutes + 'm';
}
