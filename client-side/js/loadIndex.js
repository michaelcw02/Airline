
function loadPage() {
    loadCarousel();
}

//CONEXION A BACKEND PARA RETRIEVE LAS OFERTAS
function loadOfferList() {
    let array = [];
    array.push(new Offer('SJO', 'LAX', '$590', 'LET\'S GO TO LOS ANGELES!', 'images/background-1.jpg'));
    array.push(new Offer('SJO', 'MIA', '$600', 'WANT TO GO TO MIAMI?', 'images/background-2.jpg'));
    array.push(new Offer('SJO', 'MEX', '$800', 'HOW ABOUT MEXICO?', 'images/background-3.jpg'));
    array.push(new Offer('SJO', 'BOS', '$800', 'LET US TAKE YOU TO BOSTON!', 'images/background-4.jpg'));
    array.push(new Offer('SJO', 'BOG', '$400', 'WANT TO MEET COLOMBIANS?', 'images/background-5.jpg'));
    return array;
}

function loadCarousel() {
    offerList = loadOfferList();
    for (let i in offerList) {
        $('<li data-target="#advertisement-carousel" data-slide-to="' + i + '"></li>').appendTo('.carousel-indicators')
        $('<div class="item"><img src="' + offerList[i].pathToImg + '"><div class="carousel-caption h2">' + offerList[i].description + '</div>   </div>').appendTo('.carousel-inner');
    }
    $('.item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
    $('#advertisement-carousel').carousel();
}


$(loadPage);