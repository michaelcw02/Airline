let attributes;

function loadPage() {
    attributes = new Preload();
    loadCarousel();
}

//THIS WILL BE THE CONEXION TO THE BACKEND IN ORDER TO RETRIEVE OFFERS
function loaddiscounts() {
    let array = [];
    array.push(new Offer('SJO', 'LHR', '$746', 'How about London?', 'images/background-1.jpg'));
    array.push(new Offer('SJO', 'MIA', '$292', 'Wanna go to Miami?', 'images/background-2.jpg'));
    array.push(new Offer('SJO', 'LAX', '$419', 'Let\'s go to Los Angeles!', 'images/background-3.jpg'));
    array.push(new Offer('SJO', 'NRT', '$954', 'Japan is just Amazing!', 'images/background-4.jpg'));
    array.push(new Offer('SJO', 'BOG', '$317', 'Have you thought about Bogotá?', 'images/background-5.jpg'));
    array.push(new Offer('SJO', 'BOS', '$426', 'Let us take you to Boston!', 'images/background-6.jpg'));
    return array;
}
/*
function loadCarousel() {
    discounts = loaddiscounts();
    for (let i in discounts) {
        let element = '<li data-target="#advertisement-carousel" data-slide-to="' + i + '"></li>'; 
        $(element).appendTo('.carousel-indicators');
        element = '<div class="item"><img class="img-rounded" src="' + discounts[i].pathToImg + '"><div class="carousel-caption h1">' + discounts[i].description + '</div>   </div>';
        $(element).appendTo('.carousel-inner');
    }
    $('.item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
    $('#advertisement-carousel').carousel();
}
*/

function loadCarousel() {
    discounts = attributes.discounts;
    console.log(discounts);
    for (let i in discounts) {
        let element = '<li data-target="#advertisement-carousel" data-slide-to="' + i + '"></li>'; 
        $(element).appendTo('.carousel-indicators');
        element = '<div class="item"><img class="img-rounded" src="' + discounts[i].path + '">';
            element += '<div class="carousel-caption">';
            let flight = discounts[i].flight;
            element += '<h1>' + flight.title(' - ') + '</h1>';
            element += '<h3>' + discounts[i].description + '</h3>';
            element += '<h3><a href="">' + 'Limited offer for ' + discounts[i].discount + '% </a></h3>'
        element += '</div>   </div>';
        $(element).appendTo('.carousel-inner');
    }
    $('.item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
    $('#advertisement-carousel').carousel();
}

function hideShow(){
    $("#btnOneWay").click(function(){
       $("#returning").hide();
    });
    $("#btnRoundTrip").click(function(){
        $("#returning").show();
    });
}

function increase(){
    var valueSelected=$('select[id=flightsFormAdults]').val();
    if(valueSelected != "6"){   
        $('select[id=flightsFormAdults]').val(newValue);
    }    
}

function decrease(){
    var valueSelected=$('select[id=flightsFormAdults]').val();
    if(valueSelected != "1"){   
        $('select[id=flightsFormAdults]').val(newValue);
    }    
}

$(loadPage);