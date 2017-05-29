<%-- 
    Document   : index
    Created on : May 1, 2017, 10:23:04 PM
    Author     : michaelcw02
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StarAir</title>
    <link rel="icon" href="images/airplane-4-48.png" type="image/png">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/bootstrap-theme.css">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <link rel="stylesheet" href="css/stylesheet.css" type="text/css">
    <link rel="stylesheet" href="css/dataTables.bootstrap.css" type="text/css" />
    <link rel="stylesheet" href="css/hover.css">
</head>

<body>
    <div class="container top-container">

        <jsp:include page="header.jsp" />

        <div class="carousel-container">
            <div id="advertisement-carousel" class="carousel slide" data-ride="carousel" data-interval="4000">
                <!-- Indicators -->
                <ol class="carousel-indicators"> </ol>
                <!-- Wrapper for slides -->
                <div class="carousel-inner"> </div>
                <!-- Controls -->
                <a class="left carousel-control" href="#advertisement-carousel" role="button" data-slide="prev">
                    <img class="left" src="images/arrow-left-88-48.png" alt="left">
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#advertisement-carousel" role="button" data-slide="next">
                    <img class="right" src="images/arrow-right-24-48.png" alt="right">
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>

    </div>

    <div class="container body-container">
        <div class="tab navbar-inverse text-center">
            <a class="hvr-grow" href="#flightsContent"><img src="images/airplane-4-48.png" alt="Flights">Flights</a>
        </div>
        <div class="tabcontent text-center" id="flightsContent">
            <form action="javascript:searchFlights();" class="form-horizontal">
                <div class="row">
                    <div class="btn-group-md col-md-12"><br>
                        <button type="button" class="btn btn-primary" id="btnRoundTrip">Round-trip</button>
                        <button type="button" class="btn btn-primary" id="btnOneWay">One-way</button>
                        <input type="hidden" value="RoundTrip" id="FlightMode"/>
                    </div>
                </div>
                <hr>
                <div class="form-group row">
                    <div class="col-md-6">
                        <div class="input-group back">
                            <span class="input-group-addon"><b>From</b></span>
                            <select class='form-control' name="cityFrom" id='cityFrom'>
                                <option value="0">All cities</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="input-group back">
                            <span class="input-group-addon"><b>To</b></span>
                            <select class='form-control' name="cityTo" id='cityTo'>
                                <option value="0">All cities</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Departing" id="departing">
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Returning" id="returning">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-4 col-md-offset-4">
                        <div class="input-group lh-dropdown-spinner back">
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-primary" id="btnDecrease">-</button>
                            </span>
                            <select class="form-control" id="flightsFormAdults">
                                <option selected="selected" value="1">1 Adult</option>
                                <option value="2">2 Adults</option>
                                <option value="3">3 Adults</option>
                                <option value="4">4 Adults</option>
                                <option value="5">5 Adults</option>
                                <option value="6">6 Adults</option>
                            </select>
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-primary" id="btnIncrease">+</button>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-md-12">
                        <button type="submit" id="btnSearchFlights" class="btn btn-success" data-toggle="collapse" data-target="#flights,#pagination">Search Flights</button>
                    </div>
                </div>
            </form>

            <div class="container-fluid outbound-flights-div">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h1>Outbound Flights</h1>
                    </div>
                    <div class="panel-body">
                        <table class="table-responsive table-hover outbound-flights-table col-md-offset-2 col-md-8">
                            <thead>
                                <tr>
                                    <th>Information</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody id="outbound-flights">

                            </tbody>
                        </table>
                        <input type="hidden" value="none" id="OutboundSelection"/>
                    </div>
                </div>
            </div>
            <div class="container-fluid return-flights-div">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h1>Return Flights</h1>
                    </div>
                    <div class="panel-body">
                        <table class="table-responsive table-hover return-flights-table col-md-offset-2 col-md-8">
                            <thead>
                                <tr>
                                    <th>Information</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody id="return-flights">

                            </tbody>
                        </table>
                        <input type="hidden" value="none" id="ReturnSelection"/>
                    </div>
                </div>
            </div>

            <div class="container-fluid confirmation-div">
                <div class="row text-center" id="confirmation">
                    <button type="button" class="btn btn-success" id="confirmReservation">Confirm Reservation</button>
                    <button type="button" class="btn btn-danger" id="cancelReservation">Cancel</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="flightDetail" role="dialog">
        <div class="modal-dialog modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h3 class="modal-title" id="flightDetailTitle">Flight Information</h3>
                </div>
                <div class="modal-body" id="flightDetailMessage">
                    <!--THIS PLACE WILL BE THE FLIGHT DETAILS-->

                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title" id="myModalTitle">Modal Header</h4>
                </div>
                <div class="modal-body" id="myModalMessage">
                    <p>This is a small modal.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="container footer-container">
        <jsp:include page="footer.jsp" />
    </div>

    <!-- LIBRARIES -->
    <script type="text/javascript" src="js/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="js/jquery.dataTables.js" type="text/javascript"></script>
    <script src="js/dataTables.bootstrap.js" type="text/javascript"></script>
    <script src="js/Model/utils.js" type="text/javascript"></script>
    <!-- MODEL -->
    <script type="text/javascript" src="js/Model/City/City.js"></script>
    <script type="text/javascript" src="js/Model/Trip/Trip.js"></script>
    <script type="text/javascript" src="js/Model/Flight/Flight.js"></script>
    <script type="text/javascript" src="js/Model/Discount/Discount.js"></script>
    <!-- NEW -->
    <script src="js/Model/Proxy.js" type="text/javascript"></script>

    <!-- CONTROLLER -->
    <script type="text/javascript" src="js/Controller/Storage.js"></script>
    <script type="text/javascript" src="js/Controller/AirlineController.js"></script>
    <script type="text/javascript" src="js/Controller/IndexController.js"></script>

    <!-- VIEW -->
    <script type="text/javascript" src="js/View/IndexView.js"></script>
</body>

</html>