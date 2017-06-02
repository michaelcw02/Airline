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
    return '! - ' + departureDate;
}

function calculateArrivalTime(departureTime, duration) {
    return '! - ' + departureTime;
}

function calculatePrice(basePrice, discount) {
    return (discount != 0) ? basePrice * ((100 - discount) / 100) : basePrice;
}

function calculateTime(time) {
    time += '';
    if(time.length == 4) {
        var hour = time.charAt(0) + time.charAt(1);
        var mode = 'PM';
        if(hour != 12)
            hour -= 12;
        var min = time.charAt(2) + time.charAt(3);
    }
    if(time.length == 3) {
        hour = time.charAt(0);
        min = time.charAt(1) + time.charAt(2);
        mode = 'AM';
    }
    if(time.length < 3 && time.length > 0) {
        hour = 12;
        min = time;
        mode = 'AM';
    }
    if(min >= 60) {
        hour = parseInt(hour) + Math.floor(min / 60);
        min = min % 60;
    }
    return hour + ':' + min + ' ' + mode;
}

function calculateDuration(duration) {
    let minutes = duration % 60;
    let hours = Math.floor(duration / 60);
    return (hours == 0) ? minutes + 'm' : hours + 'h ' + minutes + 'm';
}

function showMessage(idDiv, title, message, type) {
    $("#" + idDiv + "Title").html(title);
    $("#" + idDiv + "Message").html(message);
    if (type != undefined) {
        $("#" + idDiv).removeClass("alert-success");
        $("#" + idDiv).addClass("alert-" + type);
    }
    $("#" + idDiv).show();
}
