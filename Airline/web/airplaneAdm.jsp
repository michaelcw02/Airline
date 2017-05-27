<%-- 
    Document   : AirplaneAdm
    Created on : May 20, 2017, 12:04:43 AM
    Author     : cfuen
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Airplane Management</title>
    <link rel="icon" href="images/airplane-4-48.png" type="image/png">

    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/stylesheet.css">
    <link rel="stylesheet" href="css/hover.css">
</head>

<body>
    <div class="container top-container">
        <jsp:include page="header.jsp" />
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
    <div class="modal fade" id="modalAirplane" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title" id="myModalTitle">Insert/Modify Airplane
                </div>
                <div class="modal-body" id="myModalMessage">
                    <form role="form" onsubmit="return false;" id="formAirplanes">
                        <div class="form-group" id="groupIdentifier">
                            <label for="identifier">Identifier:</label>
                            <input type="text" class="form-control" id="identifier" autofocus="true" placeholder="Identifier">
                        </div>

                        <div class="form-group" id="groupTypeAirplane">
                            <label for="typeAirplane">Type of Airplane</label>
                            <select class='form-control' id='typeAirplane'>
                                <option value="0">Type of Airplane</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <input type="hidden" value="addAirplane" id="airplaneAction" />
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
            <h1>Management <small>System for the administration of airplanes</small></h1>
        </div>
    </div>

    <div class="container">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3>Airplane Management</h3>
            </div>
            <div class="panel-body">
                <center>
                    <button type="button" class="btn btn-primary centered" data-toggle="modal" data-target="#modalAirplane" id="btShowForm">Insert information</button>
                </center><br>
                <div class="col-sm-12">
                    <form role="form" onsubmit="return false;" id="formAiplanes" class="form-horizontal centered">
                        <div class="form-group" id="groupIdentificador">
                            <div class="col-sm-4" style="text-align: center; vertical-align: middle;">
                                <p><b>Search airplane per indentifier:</b></p>
                            </div>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" id="search" placeholder="Enter the identifier">
                            </div>
                            <div class="col-sm-2">
                                <button type="button" class="btn btn-info centered" id="btSearch">
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

                <div class="container-fluid table-responsive" id="airplaneReturn">
                    <table class="table table-hover table-condensed" id="tableAirplane"></table>
                </div>

            </div>
        </div>
    </div>


    <!-- LIBRARIES -->
    <script type="text/javascript" src="js/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <!-- CONTROLLER -->
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="js/Model/Proxy.js" type="text/javascript"></script>
    <script src="js/Model/utils.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/Model/TypeAirplane/TypeAirplane.js"></script>
    <script type="text/javascript" src="js/Model/Airplane/Airplane.js"></script>
    <script type="text/javascript" src="js/Controller/Storage.js"></script>
    <script type="text/javascript" src="js/Controller/AirlineController.js"></script>
    <script type="text/javascript" src="js/Controller/AirplaneController.js"></script>
    <!-- VIEW -->
    <script type="text/javascript" src="js/View/AirplaneView.js"></script>
</body>

</html>