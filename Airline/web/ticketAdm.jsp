<%-- 
    Document   : ticketAdm
    Created on : 07/06/2017, 01:20:57 AM
    Author     : Fabiana
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ticket Management</title>
        <link rel="icon" href="images/airplane-4-48.png" type="image/png">
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
        <link rel="stylesheet" href="css/hover.css">
        <link rel="stylesheet" href="css/stylesheet.css">
        <link rel="stylesheet" href="css/hover.css">
    </head>
    <body>
        <div class="container top-container">
            <jsp:include page="header.jsp"/>
        </div>
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
                <h1>Management <small>System for the visualization of tickets</small></h1>
            </div>
        </div>
        <div class="container">
            <div class="panel panel-primary">
                <div class="panel-heading"><h3>Ticket Management</h3></div>
                <div class="panel-body">

                    <form role="form" onsubmit="return false;" id="form" class="form-horizontal centered">
                        <div class="form-group row">
                            <div class="col-sm-4">
                                <label for="identifier">Select the flight of the you want to search for tickets:</label>
                            </div>
                            <div class="col-sm-6">
                                <select class='form-control' id='flightsAvailable'>
                                    <option value="0">Flights</option>
                                </select>
                            </div>
                        </div>
                    </form>
                    <center>
                        <button type="button" class="btn btn-primary centered" id="btSearchTickets">Search Tickets</button>
                    </center><br>
                    <div class="container-fluid table-responsive" id="ticketReturn">
                        <table class="table table-hover table-condensed" id="tableTickets"></table>                   
                    </div>
                </div>
            </div>
        </div>


        <!-- LIBRARIES -->
        <script type="text/javascript" src="js/jquery-3.2.1.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
        <script src="js/Model/utils.js" type="text/javascript"></script>
        <!-- NEW -->
        <script type="text/javascript" src="js/Model/Proxy.js"></script>
        <!-- CONTROLLER -->
        <script type="text/javascript" src="js/Controller/Storage.js"></script>
        <script type="text/javascript" src="js/Controller/AirlineController.js"></script>
        <script type="text/javascript" src="js/Controller/TicketAdmController.js"></script>
        <!-- VIEW -->
        <script type="text/javascript" src="js/View/TicketAdmView.js"></script>
    </body>
</html>

