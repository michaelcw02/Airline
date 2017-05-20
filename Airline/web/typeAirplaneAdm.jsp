<%-- 
    Document   : typeAirplaneAdm
    Created on : 19/05/2017, 10:18:50 PM
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
                        <h4 class="modal-title" id="myModalTitle">Insert Type Airplane</h4>
                    </div>
                    <div class="modal-body" id="myModalMessage">
                        <form role="form" onsubmit="return false;" id="formTypeAirplane">
                            <div class="form-group" id="groupIdentifier">
                                <label for="identifier">Identifier:</label>
                                <input type="text" class="form-control" id="identifier" autofocus="true" placeholder="Identifier">
                            </div>

                            <div class="form-group" id="groupYear">
                                <label for="year">Year:</label>
                                <input type="text" class="form-control" id="year" placeholder="Year" >
                            </div>

                            <div class="form-group" id="brand">
                                <label for="brand">Brand:</label>
                                <input type="text" class="form-control" id="brand" placeholder="Brand">
                            </div>

                            <div class="form-group" id="passengerQuantity">
                                <label for="passengerQuantity">Passenger quantity:</label>
                                <input type="text" class="form-control" id="passengerQuantity" placeholder="Passenger quantity">
                            </div>

                            <div class="form-group" id="rows">
                                <label for="rows">Rows quantity:</label>
                                <select class="form-control" id="rows">
                                    <option value="1" selected="selected">6</option>
                                    <option value="2">7</option>
                                    <option value="3">8</option>
                                    <option value="4">9</option>
                                </select>
                            </div>

                            <div class="form-group" id="seatsRow">
                                <label for="seatsRow">Seats per row:</label>
                                <input type="text" class="form-control" id="seatsRow" placeholder="SeatsPerRow">
                            </div>

                            <div class="form-group">
                                <input type="hidden" value="addTypeAirplane" id="typeAirplaneAction"/>
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
                <h1>Management <small>System for the administration of type of airplanes</small></h1>
            </div>
        </div>

        <div class="panel panel-primary">
            <div class="panel-heading"></div>
            <div class="panel-body">
                <center>
                    <button type="button" class="btn btn-primary centered" data-toggle="modal" data-target="#myModalFormulario" id="btShowForm">Insert</button>
                </center><br>
                <div class="col-sm-12">
                    <form role="form" onsubmit="return false;" id="form" class="form-horizontal centered">
                        <div class="form-group" id="groupIdentifier">
                            <div class="col-sm-4" style="text-align: right; vertical-align: middle;">
                                <h4 class="bold">Search type of airplane per indentifier:</h4>
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
                <div class="container-fluid" id="typeAirlineReturn">
                    <table class="table table-hover table-condensed" id="tableTypeAirplane"></table>
                </div>
            </div>
        </div>



        <!-- MODEL -->
        <script type="text/javascript" src="js/Model/TypeAirplane/TypeAirplane.js"></script>
        <!-- NEW -->
        <script src="js/Model/Proxy.js" type="text/javascript"></script>
        <script src="js/Model/utils.js" type="text/javascript"></script>
        <!-- CONTROLLER -->
        <script type="text/javascript" src="js/Controller/Storage.js"></script>
        <script type="text/javascript" src="js/Controller/AirlineController.js"></script>
        <script type="text/javascript" src="js/Controller/AdministrationController.js"></script>
        <!-- VIEW -->
        <script type="text/javascript" src="js/View/AdministrationView.js"></script>
    </body>
</html>
