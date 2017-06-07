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
            let element = '';
            element += '<br>';
            element += '<div class="bs-example bs-example-tabs">';
                element += '<ul class="nav nav-tabs">';
                    element += '<li class="active"><a href="#section1" id="passenger1" data-toggle="tab">Passenger 1</a></li>';    
                    for(var i=1; i < outboundTicket.numPassengers; i++)
                        element += '<li><a href="#section'+ (i+1) +'" id="passenger'+ (i+1) +'" data-toggle="tab">Passenger '+ (i+1) + '</a></li>';                
                element += '</ul>';
            element += '</div>';

            element += '<div class="modal-body">';
                element += '<div class="tab-content">';

                for(var i=0; i < outboundTicket.numPassengers; i++){  
                    if(i==0)
                        element += '<div class="tab-pane active in" id="section'+ (i+1) +'">';
                    else
                        element += '<div class="tab-pane fade in" id="section'+ (i+1) +'">';

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

                        element += '<form class="form" role="form" id="PassengersForm'+ (i+1) +'">';
                            element += '<div class="form-group text-center">';
                                element += '<button type="button" class="btn btn-success" id="addPassenger'+ (i+1) +'">Add Passenger</button> ';
                                element += ' <button type="button" class="btn btn-danger" id="cancel'+ (i+1) +'">Cancel</button>';
                            element += '</div>';

                            element += '<div class="form-group height25" >';
                                element += '<div class="alert alert-success hiddenDiv" id="messageResult'+ (i+1) +'">';
                                    element += '<strong id="messageResult'+ (i+1) +'Title">Info!... </strong>';
                                    element += '<span id="messageResult'+ (i+1) +'Message">This alert box could indicate a neutral informative change or action.</span>';
                                element += '</div>';
                            element += '</div>';
                        element += '</form>';

                    element += '</form>';
                element += '</div>'; 
            }
           element += '</div>';   
        element += '</div>'; 
            
        //modal settings
        showModal('passengersInfo', ' Passengers Information', element);
        for(var i=0; i < outboundTicket.numPassengers; i++){  
            var buttonSend = "#addPassenger" + (i+1);
            var buttonCancel = "#cancel" + (i+1);
            var messageResult = "messageResult" + (i+1);
            $(buttonSend).on('click', (event) => {
                
                showMessage(messageResult, 'Info!...', ' Adding passenger!');
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
            $(buttonCancel).on('click', (event) => {
                $('#passengersInfo').modal('hide');
                $('#passengersInfoMessage').html('');
            })
        }
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