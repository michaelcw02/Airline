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
    departureDate = new Date(departureDate);
    days = calculateEstimated(departureTime, duration).split('~')[0];
    departureDate.setDate(departureDate.getDate() + parseInt(days));
    return $.datepicker.formatDate('M dd, yy', departureDate);
}

function calculateArrivalTime(departureTime, duration) {
    return calculateTime(calculateEstimated(departureTime, duration).split('~')[1]);
}

function calculateEstimated(departureTime, duration) {
    departureTime += '';
    if(departureTime.length == 4) {
        var min = departureTime.charAt(2) + departureTime.charAt(3);
        var addedMin = parseInt(min) + parseInt(duration);
        min = addedMin % 60;
        var hour = departureTime.charAt(0) + departureTime.charAt(1);
        var addedHours = parseInt(hour) + Math.floor(addedMin / 60);
        hour = addedHours % 24;
        var days = Math.floor(addedHours / 24);
        return days + '~' + hour + min;
    }
    if(departureTime.length == 3) {
        var min = departureTime.charAt(1) + departureTime.charAt(2);
        var addedMin = parseInt(min) + parseInt(duration);
        min = addedMin % 60;
        var hour = departureTime.charAt(0);
        var addedHours = parseInt(hour) + Math.floor(addedMin / 60);
        hour = addedHours % 24;
        var days = Math.floor(addedHours / 24);
        return days + '~' + hour + min;
    }
    if(departureTime.length < 3 && departureTime.length > 0) {
        var addedMin = parseInt(departureTime) + duration;
        var min = addedMin % 60;
        var addedHours = addedMin / 60;
        var hour = addedHours % 24;
        var days = Math.floor(addedHours / 24);
        return days + '~' + hour + min;
    }    
}

function calculatePrice(basePrice, discount) {
    return (discount != 0) ? basePrice * ((100 - discount) / 100) : basePrice;
}

function calculatePriceWithPassengers(basePrice, discount, passengers) {
    return (discount != 0) ? passengers * basePrice * ((100 - discount) / 100) : passengers * basePrice;
}

function calculateTime(time) {
    time += '';
    if(time.length == 4) {
        var hour = time.charAt(0) + time.charAt(1);
        var mode = 'PM';
        if(hour < 12)   mode = 'AM'
        if(hour > 12)   hour -= 12;
        
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
