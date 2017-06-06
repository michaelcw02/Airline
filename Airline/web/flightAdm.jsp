<%-- 
    Document   : fligthAdm
    Created on : 30/05/2017, 09:31:18 PM
    Author     : Fabiana
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Flight Management</title>
        <link rel="icon" href="images/airplane-4-48.png" type="image/png">
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
        <link rel="stylesheet" href="css/hover.css">
        <link rel="stylesheet" href="css/stylesheet.css">
        <link rel="stylesheet" href="css/hover.css">
    </head>
    <body>
        <jsp:include page="header.jsp" />
        <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="myModalTitle">Modal Header</h4>
                    </div>
                    <div class="modal-body" id="myModalMessage">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="page-header">
                <h1>Management <small>System for the administration of flights</small></h1>
            </div>
        </div>
        <div class="container">
            <div class="panel panel-primary">
                <div class="panel-heading"><h3>Flight Management</h3></div>
                <div class="panel-body">

                    <form role="form" onsubmit="return false;" id="form" class="form-horizontal centered">
                        <div class="form-group row">
                            <div class="col-sm-3">
                                <label for="identifier">Initials for the flights identifiers:</label>
                            </div>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" placeholder="Initials identifiers only 3 letters" id="identifier">
                            </div>
                        </div>

                        <div class=" form-group row">          
                            <div class="col-sm-1">
                                <label for="tripsAvailable">Available trips:</label>
                            </div> 
                            <div class="col-sm-6">
                                <select class='form-control' id='tripsAvailable'>
                                    <option value="0">Trips</option>
                                </select>
                            </div>

                            <div class="col-sm-2">
                                <label for="airplaneAvailable">Available airplanes:</label>
                            </div>
                            <div class="col-sm-3">
                                <select class='form-control' id='airplaneAvailable'>
                                    <option value="0">Airplanes</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-12">
                                <label for="notify">Select the range of dates for your flights:</label>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6">
                                <input type="text" class="form-control" placeholder="First Date" id="firstDate">
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" placeholder="Last Date" id="lastDate">
                            </div>
                        </div>
                    </form>
                    <center>
                        <button type="button" class="btn btn-primary centered" id="btGenerateFlights">Generate Flights</button>
                    </center><br>

                    <div class="container-fluid table-responsive" id="flightReturn">
                        <table class="table table-hover table-condensed" id="tableFlight"></table>                   
                    </div>
                </div>
            </div>
        </div>

        <!-- LIBRARIES -->
        <script type="text/javascript" src="js/jquery-3.2.1.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
        <script src="js/Model/utils.js" type="text/javascript"></script>
        <!-- MODEL -->
        <script type="text/javascript" src="js/Model/Flight/Flight.js"></script>
        <!-- NEW -->
        <script type="text/javascript" src="js/Model/Proxy.js"></script>
        <!-- CONTROLLER -->
        <script type="text/javascript" src="js/Controller/Storage.js"></script>
        <script type="text/javascript" src="js/Controller/AirlineController.js"></script>
        <script type="text/javascript" src="js/Controller/FlightController.js"></script>
        <!-- VIEW -->
        <script type="text/javascript" src="js/View/FlightView.js"></script>
    </body>
