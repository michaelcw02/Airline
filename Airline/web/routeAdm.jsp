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
        <title>Route Management</title>
        <link rel="icon" href="images/airplane-4-48.png" type="image/png">

        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <link rel="stylesheet" href="css/stylesheet.css">
        <link rel="stylesheet" href="css/hover.css">
    </head>
    <body>
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
        <div class="container top-container">
            <jsp:include page="header.jsp"/>
        </div>

        <div class="modal fade" id="modalRoute" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" onclick="controller.cleanForm();" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="myModalTitle">Insert/Modify Route</h4>
                    </div>
                    <div class="modal-body" id="myModalMessage">
                        <form role="form"  onsubmit="return false;" id="formRoute">
                           
                            <div class="form-group" id="groupIdentifier">
                                <label for="id_trip">Id_trip:</label>
                                <input type="text" class="form-control" id="idTrip" placeholder="id trip" readonly="readonly">
                            </div>
                            <div class="form-group" id="groupDepartureCity">
                                <label for="departureCity">Departure City:</label>
                                <select class='form-control' id='departureCity'>
                                    <option value="0">Departure city</option>
                                </select>
                            </div>

                            <div class="form-group" id="groupArrivalCity">
                                <label for="arrivalCity">Arrival City:</label>
                                <select class='form-control' id='arrivalCity'>
                                    <option value="0">Arrival city</option>
                                </select>
                            </div>

                            <div class="form-group" id="groupDistance">
                                <label for="distance">Distance (miles):</label>
                                <input type="number" class="form-control" id="distance" placeholder="Distance" >
                            </div>

                            <div class="form-group" id="groupDuration">
                                <label for="duration">Duration:</label>
                                <div class="form-group row">
                                    <div class="col-xs-6">
                                        <input type="number" class="form-control" id="hours" placeholder="hours">
                                    </div>
                                    <div class="col-xs-6">
                                        <input type="number" class="form-control" id="minutes" placeholder="minutes">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group" id="groupDepartureTime">
                                <label for="departureTime">Departure Time (24h ex: 2330 is equivalent to 11:30 PM): </label>
                                <input type="text" class="form-control" id="departureTime" placeholder="1315">
                            </div>

                            <div class="form-group" id="groupDepartureDay">
                                <label for="departureDay">Departure day</label>
                                <select class='form-control' id='departureDay'>
                                    <option value="MONDAY" selected="selected">MONDAY</option>
                                    <option value="TUESDAY">TUESDAY</option>
                                    <option value="WEDNESDAY">WEDNESDAY</option>
                                    <option value="THURSDAY">THURSDAY</option>
                                    <option value="FRIDAY">FRIDAY</option>
                                    <option value="SATURDAY">SATURDAY</option>
                                    <option value="SUNDAY">SUNDAY</option>
                                </select>
                            </div>

                            <div class="form-group" id="groupPrice">
                                <label for="price">Price (USD):</label>
                                <input type="number" class="form-control" id="price" placeholder="Price">
                            </div>

                            <div class="form-group" id="groupDiscount">
                                <label for="discount">Discount (%):</label>
                                <input type="number" class="form-control" id="discount" placeholder="Discount" value="0">
                            </div>

                            <div class="form-group" id="groupDiscountDescription">
                                <label for="discountDescription">Discount description:</label>
                                <input type="text" class="form-control" id="discountDescription" placeholder="Discount description" value="None">
                            </div>

                            <div class="form-group" id="groupImage">
                                <label>Image <input type="file" id="image"> </label>
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
                        <button type="button" class="btn btn-primary centered" data-toggle="modal" data-target="#modalRoute" id="btMostarForm">Insert Route</button>
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
                                <div class="col-sm-2">
                                    <button type="button" class="btn btn-info centered"  id="btSearch">            
                                        Search <span class="glyphicon glyphicon-search"></span>
                                    </button>
                                </div>
                                <div class="col-sm-2">
                                    <button type="button" class="btn btn-info centered"  id="btSearchAll">            
                                        Show All <span class="glyphicon glyphicon-list-alt"></span>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div class="container-fluid table-responsive" id="routeReturn">
                            <table class="table table-responsive table-hover table-condensed" id="tableRoute"></table>                    </div>
                    </div>
                </div>
            </div>

            <!-- LIBRARIES -->
            <script type="text/javascript" src="js/jquery-3.2.1.js"></script>
            <script type="text/javascript" src="js/bootstrap.js"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

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
