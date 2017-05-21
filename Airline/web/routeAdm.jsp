<%-- 
    Document   : routeAdm
    Created on : 20/05/2017, 01:24:29 AM
    Author     : Fabiana
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>typeAirplaneAdm</title>
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="css/stylesheetAdm.css">
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
                        <p>This is a small modal.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="myModalFormulario" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="myModalTitle">Insert Route</h4>
                    </div>
                    <div class="modal-body" id="myModalMessage">
                        <form role="form" onsubmit="return false;" id="formRoute">
                            <div class="form-group" id="groupIdentifier">
                                <label for="identifier">Identifier:</label>
                                <input type="text" class="form-control" id="identifier" autofocus="true" placeholder="Identifier">
                            </div>

                            <div class="form-group" id="groupDistance">
                                <label for="distance">Distance:</label>
                                <input type="text" class="form-control" id="distance" placeholder="Distance" >
                            </div>

                            <div class="form-group" id="duration">
                                <label for="duration">Duration:</label>
                                <input type="text" class="form-control" id="duration" placeholder="Duration">
                            </div>

                            <div class="form-group" id="departureCity">
                                <label for="departureCity">Departure City:</label>
                                <input type="text" class="form-control" id="departureCity" placeholder="Id departure city">
                            </div>

                            <div class="form-group" id="arrivalCity">
                                <label for="arrivalCity">Arrival City:</label>
                                <input type="text" class="form-control" id="arrivalCity" placeholder="Id arrival city ">
                            </div>

                            <div class="form-group" id="departureTime">
                                <label for="departureCity">Departure Time:</label>
                                <input type="text" class="form-control" id="departureTime" placeholder="Departure time">
                            </div>

                            <div class="form-group">
                                <input type="hidden" value="addRoute" id="ruteAction"/>
                                <button type="submit" class="btn btn-primary" id="send">Save</button>
                                <button type="reset" class="btn btn-danger" id="cancel">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="page-header">
                <h1>Management <small>System for the administration of routes</small></h1>
            </div>
        </div>
        <div class="container">
            <div class="panel panel-primary">
                <div class="panel-heading"><h3>Route Management</h3></div>
                <div class="panel-body">
                    <center>
                        <button type="button" class="btn btn-primary centered" data-toggle="modal" data-target="#myModalFormulario" id="btMostarForm">Insert Route</button>
                    </center><br>
                    <div class="col-sm-12">
                        <form role="form" onsubmit="return false;" id="form" class="form-horizontal centered">
                            <div class="form-group" id="groupIdentifier">
                                <div class="col-sm-4" style="text-align: right; vertical-align: middle;">
                                    <h4 class="bold">Search route per indentifier:</h4>
                                </div>
                                <div class="col-sm-4">
                                    <input type="text" class="form-control" id="search" placeholder="Enter the identifier">
                                </div>
                                <div class="col-sm-4">
                                    <button type="button" class="btn btn-info centered"  id="btSearch">            
                                        Search <span class="glyphicon glyphicon-search"></span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <table class="table table-hover table-condensed" id="tableRoute"></table>
                </div>
            </div>
        </div>

        <!-- MODEL -->
        <script type="text/javascript" src="js/Model/Trip/Trip.js"></script>
        <!-- NEW -->
        <script src="js/Model/Proxy.js" type="text/javascript"></script>
        <script src="js/Model/utils.js" type="text/javascript"></script>
        <!-- CONTROLLER -->
        <script type="text/javascript" src="js/Controller/Storage.js"></script>
        <script type="text/javascript" src="js/Controller/AirlineController.js"></script>
        <script type="text/javascript" src="js/Controller/RouteAdmController.js"></script>
        <!-- VIEW -->
        <script type="text/javascript" src="js/View/RouteAdmView.js"></script>
    </body>
</html>
