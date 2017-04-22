function IndexController(view) {
    this.IndexController(view);
}

IndexController.prototype = {
    IndexController: function (view) {
        this.view = view;
        this.airlineController = new AirlineController();
    },
    showCarousel: function () {
        discounts = this.airlineController.discounts;
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
    },
    hideReturning: function () {
        this.view.$("#returning").hide();
    },
    showReturning: function () {
        this.view.$("#returning").show();
    },
    increaseAdults: function () {
        var valueSelected = this.view.$('select[id=flightsFormAdults]').val();
        if (valueSelected != "6") {
            var newValue = parseInt(valueSelected);
            this.view.$('select[id=flightsFormAdults]').val(newValue + 1);
        }
    },
    decreaseAdults: function () {
        var valueSelected = this.view.$('select[id=flightsFormAdults]').val();
        if (valueSelected != "1") {
            var newValue = parseInt(valueSelected);
            this.view.$('select[id=flightsFormAdults]').val(newValue - 1);
        }
    }
}