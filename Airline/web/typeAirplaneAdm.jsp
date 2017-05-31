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
        <link rel="icon" href="images/airplane-4-48.png" type="image/png">

        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
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
        <div class="modal fade" id="myModalTypeAirplane" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="myModalTitle">Insert/Modify Type Airplane</h4>
                    </div>
                    <div class="modal-body" id="myModalMessage">
                        <form role="form" onsubmit="return false;" id="formTypeAirplane">
                            <div class="form-group" id="groupIdentifier">
                                <label for="identifier">Identifier:</label>
                                <input type="text" class="form-control" id="identifier" autofocus="true" placeholder="Identifier" required="true">
                            </div>

                            <div class="form-group" id="groupYear">
                                <label for="year">Year:</label>
                                <input type="text" class="form-control" id="year" placeholder="Year" required="true" >
                            </div>

                            <div class="form-group" id="groupBrand">
                                <label for="brand">Brand:</label>
                                <input type="text" class="form-control" id="brand" placeholder="Brand" required="true">
                            </div>

                            <div class="form-group" id="groupRows">
                                <label for="row">Quantity of Rows:</label>
                                <input type="number" class="form-control" id="rows" placeholder="Row" required="true">
                            </div>

                            <div class="form-group" id="groupSeatsRow">
                                <label for="seatsRow">Seats per row:</label>
                                <select class="form-control" id="seatsRow">
                                    <option value="6" selected="selected">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
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
        <div class="container">
            <div class="panel panel-primary">
                <div class="panel-heading"><h3>Type Airplane Management</h3></div>
                <div class="panel-body">
                    <center>
                        <button type="button" class="btn btn-primary centered" data-toggle="modal" data-target="#myModalTypeAirplane" id="btShowForm">Insert Type Airplane</button>
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
                    </div>
                    <div class="container-fluid table-responsive" id="typeAirlineReturn">
                        <table class="table table-hover table-condensed" id="tableTypeAirplane"></table>                   
                    </div>
                </div>
            </div>
        </div>



        <!-- LIBRARIES -->
        <script type="text/javascript" src="js/jquery-3.2.1.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
        <!-- NEW -->
        <script src="js/Model/Proxy.js" type="text/javascript"></script>
        <script src="js/Model/utils.js" type="text/javascript"></script>
        <!-- CONTROLLER -->
        <script type="text/javascript" src="js/Controller/Storage.js"></script>
        <script type="text/javascript" src="js/Controller/AirlineController.js"></script>
        <script type="text/javascript" src="js/Controller/TypeAirplaneController.js"></script>
        <!-- VIEW -->
        <script type="text/javascript" src="js/View/TypeAirplaneView.js"></script>
    </body>
</html>
