
function loadPage() {
    loadCarousel();
}

//CONEXION A BACKEND PARA RETRIEVE LAS OFERTAS
function loadOfferList() {
    let array = [];
    array.push(new Offer('SJO', 'LAX', '$590', 'New Offer!', 'images/background-1.jpg'));
    array.push(new Offer('SJO', 'MIA', '$600', 'New Offer!', 'images/background-2.jpg'));
    array.push(new Offer('SJO', 'MEX', '$800', 'New Offer!', 'images/background-3.jpg'));
    array.push(new Offer('SJO', 'BOS', '$800', 'New Offer!', 'images/background-4.jpg'));
    array.push(new Offer('SJO', 'BOG', '$400', 'New Offer!', 'images/background-5.jpg'));
    return array;
}

function loadCarousel() {
    offerList = loadOfferList();
    for(let i in offerList) {
        $('<div class="item"><img src="'+offerList[i].pathToImg+'"><div class="carousel-caption"></div>   </div>').appendTo('.carousel-inner');
        $('<li data-target="#advertisement-carousel" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')
    }
    $('.item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
    $('#advertisement-carousel').carousel();
}


$(loadPage);