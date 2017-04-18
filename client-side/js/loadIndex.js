
function loadPage() {
    loadCarousel();
}

//CONEXION A BACKEND PARA RETRIEVE LAS OFERTAS
function loadOfferList() {
    let array = [];
    array.push(new Offer('SJO', 'LHR', '$746', 'How about London?', 'images/background-1.jpg'));
    array.push(new Offer('SJO', 'MIA', '$292', 'Wanna go to Miami?', 'images/background-2.jpg'));
    array.push(new Offer('SJO', 'LAX', '$419', 'Let\'s go to Los Angeles!', 'images/background-3.jpg'));
    array.push(new Offer('SJO', 'NRT', '$954', 'Japan is just Amazing!', 'images/background-4.jpg'));
    array.push(new Offer('SJO', 'BOG', '$317', 'Have you thought about Bogotá?', 'images/background-5.jpg'));
    array.push(new Offer('SJO', 'BOS', '$426', 'Let us take you to Boston!', 'images/background-6.jpg'));
    return array;
}

function loadCarousel() {
    offerList = loadOfferList();
    for (let i in offerList) {
        $('<li data-target="#advertisement-carousel" data-slide-to="' + i + '"></li>').appendTo('.carousel-indicators')
        $('<div class="item"><img src="' + offerList[i].pathToImg + '"><div class="carousel-caption h1">' + offerList[i].description + '</div>   </div>').appendTo('.carousel-inner');
    }
    $('.item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
    $('#advertisement-carousel').carousel();
}


$(loadPage);