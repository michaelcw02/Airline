function TicketsController(view) {
    this.TicketsController(view);
}

TicketsController.prototype = {
    TicketsController: function (view) {
        this.view = view;
        this.airlineController = new AirlineController();
    },
    loadFlightDetails: function () {
        this.airlineController.getReservedFlights( (reservedFlights) => {
            let outboundTicket = reservedFlights.outboundTicket;
            showDetail($('#outbound-flight-detail'), outboundTicket, 'OUTBOUND');
            if(reservedFlights.returnTicket) {
                var returnTicket = reservedFlights.returnTicket;
                showDetail($('#return-flight-detail'), returnTicket, 'RETURN');
            }
            showTotalPrice($('#price-detail'), outboundTicket, returnTicket);
        } );
    },
    addPassengers: function() {
        this.airlineController.getReservedFlights( (reservedFlights) => {
            let outboundTicket = reservedFlights.outboundTicket;
            showPassengersInfo(outboundTicket);
        } );
    },
    cancelReservation: function() {
        window.location.replace("/Airline");
    }
}

function showDetail($div, ticket, mode) {
    let flight = ticket.flight;
    let element = '';
    element += '<div class="row"><h3 class="col-md-4">' + mode + ' FLIGHT: <strong>'+ flight.flightNum +'</strong> </h3></div>';
    element += '<div class="row">';
    let depCity = flight.trip.cityByDepartureCity;
    let arrCity = flight.trip.cityByArrivalCity;
    element += '<h4 class="col-md-offset-2 col-md-4">From: <strong>'+ depCity.code + ', ' + depCity.name + ', ' + depCity.country +'</strong> </h4><h4 class="col-md-4"> To: <strong>'+ arrCity.code + ', ' + arrCity.name + ', ' + arrCity.country +'</strong></h4>';
    element += '</div>';
    element += '<div class="row">';
    element += '<h4 class="col-md-offset-2 col-md-4">Date of departure: <strong>' + flight.departureDate + '</strong> </h4><h4 class="col-md-4"> Departure Time: <strong>' + calculateTime(flight.trip.departureTime) + '</strong></h4>';
    element += '</div>';
    element += '<div class="row">';
    element += '<h4 class="col-md-offset-2 col-md-4">Date of arrival: <strong>' + calculateArrivalDate(flight.departureDate, flight.trip.departureTime, flight.trip.duration) + '</strong> </h4><h4 class="col-md-4"> Arrival Time: <strong>' + calculateArrivalTime(flight.trip.departureTime, flight.trip.duration) + '</strong></h4>';
    element += '</div>'; 
    element += '<div class="row"> <h4 class="col-md-offset-4 col-md-4">Duration: <strong>' + calculateDuration(flight.trip.duration) + '</strong></h4></div>'
    element += '<hr>';
    element += '<div class="row">';
    element += '<h4 class="col-md-offset-2 col-md-4"><strong> Base Price: </strong> ' + flight.trip.cost + ' USD</h4><h4 class="col-md-4"><strong> Discount: </strong> ' + flight.trip.discount + ' %</h4>';
    element += '</div>';
    element += '<div class="row">';
    element += '<h4 class="col-md-12"><strong> Passengers: </strong> ' + ticket.numPassengers + '</h4>';
    element += '</div>';
    element += '<div class="row"><h1 class="col-md-12"><strong> Price for ' + mode + ' tickets: ' + calculatePriceWithPassengers(flight.trip.cost, flight.trip.discount, ticket.numPassengers) + ' USD</strong> </h1></div>';
    $div.append($(element));
}

function showTotalPrice($div, outboundTicket, returnTicket) {
    var price2;
    let outboundT = outboundTicket.flight.trip;
    let price1 = calculatePriceWithPassengers(outboundT.cost, outboundT.discount, outboundTicket.numPassengers);
    if ( returnTicket != undefined){
        var returnT = returnTicket.flight.trip;
        price2 = calculatePriceWithPassengers(returnT.cost, returnT.discount, returnTicket.numPassengers);
    }
    else{
        price2 = 0;
    }    
    let element = '';
    element += '<div class="row"><h1 class="col-md-12"> Total Price: <strong>' + (price1 + price2) + '</strong> USD </h1></div>';
    $div.append($(element));
}

function showPassengersInfo (outboundTicket) {
//    new AirlineController().retrieveSearchFlights((results) => {
//        if(flight !== undefined) {
            let element = '';
            element += '<div class="container-fluid">';
                element += '<div class="row content">';
                    element += '<div class="col-sm-3 sidenav">';
                        element += '<ul class="nav nav-pills nav-stacked">';
                            for(var i=0; i < outboundTicket.numPassengers; i++){
                                var id = "#passenger"+(i+1);
                                element += '<li><a href="#section'+ (i+1) +'")" id="passenger'+ (i+1) +'" onclick="active(this);">Passenger '+ (i+1) + '</a></li>';    
                                $(this).on('click', (event) => {
                                    $(this).addClass('active');
                                })
                            }                
                        element += '</ul><br>';
                    element += '</div>';
                
                    //MOSTRAR FORM POR CADA PASAJERO, CORREGIR!!!
                    //for(var i=0; i < outboundTicket.numPassengers; i++){  
                        element += '<div class="col-sm-9 " id="section'+ (i+1) +'">';
                            element += '<form action="" method="POST" id="formPassenger'+ (i+1) +'">';
                                element += '<br><div class="row">';
                                    element += '<div class="form-group text-center">';
                                        element += '<div class="col-sm-offset-3 col-sm-2 text-center"><strong>Passport: </strong></div>';
                                        element += '<div class="col-sm-4"><input type="text" id="passport" class="form-control" placeholder="8-8888-8888"></div>';
                                    element += '</div>';
                                element += '</div><br>';
                                element += '<div class="row">';
                                    element += '<div class="form-group text-center">';
                                        element += '<div class="col-sm-offset-3 col-sm-2 text-center"><strong>Name:</strong></div>';
                                        element += '<div class="col-sm-4"><input type="text" id="name" class="form-control" placeholder="John"></div>';
                                    element += '</div>';
                                element += '</div><br>';
                                element += '<div class="row">';
                                    element += '<div class="form-group text-center">';
                                        element += '<div class="col-sm-offset-3 col-sm-2 text-center"><strong>Lastname: </strong></div>';
                                        element += '<div class="col-sm-4"><input type="text" id="lastname" class="form-control" placeholder="Doe"></div>';
                                    element += '</div>';
                                element += '</div><br><br>';
                            element += '</form>';
                        element += '</div>';              
                    //}
                    
                element += '</div>';
            element += '</div>';
            
            element += '<form class="form" role="form" id="PassengersForm">';
                element += '<div class="form-group text-center">';
                    element += '<button type="button" class="btn btn-success" id="addPassenger">Add Passenger</button> ';
                    element += ' <button type="button" class="btn btn-danger" id="cancel">Cancel</button>';
                element += '</div>';

                element += '<div class="form-group height25" >';
                    element += '<div class="alert alert-success hiddenDiv" id="messageResult">';
                        element += '<strong id="messageResultTitle">Info!... </strong>';
                        element += '<span id="messageResultMessage">This alert box could indicate a neutral informative change or action.</span>';
                    element += '</div>';
                element += '</div>';
            element += '</form>';
            
            //modal settings
            showModal('passengersInfo', ' Passengers Information', element);
            $('#addPassenger').on('click', (event) => {
                showMessage('messageResult', 'Info!...', 'Adding passenger!');
//                new AirlineController().reserveFlight(flight.flightNum, mode, (data) => {
//                    if(data.response[0] == 'S') {
//                        let response = data.response.split('~')[1];
//                        showMessage('messageResult', 'Info!...', response, 'success');
//                        setTimeout( () => { $('#flightDetail').modal("hide"); }, 1500 );
//                    }
//                    else {
//                        let response = data.response.split('~')[1];
//                        showMessage('messageResult', 'Warning!...', response, 'warning');
//                        setTimeout( () => { $('#flightDetail').modal("hide"); }, 1500 );
//                    }
//                });
            });
            $('#cancel').on('click', (event) => {
                $('#passengersInfo').modal('hide');
                $('#passengersInfoMessage').html('');
            })
//        }
//    })
}

function showDiv(div){
    if (document.getElementById){  
        var aux = document.getElementById(div).style;  
        aux.display = aux.display? "":"block";  
    }  
}

function active(item){
    elemento = $(item).attr('id');
    document.getElementById(elemento).className = 'active';
}