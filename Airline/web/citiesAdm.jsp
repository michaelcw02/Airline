<%-- 
    Document   : citiesAdm
    Created on : 26/05/2017, 03:55:04 PM
    Author     : Fabiana
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>CitiesAdm</title>
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
        <div class="modal fade" id="myModalCity" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="myModalTitle">Insert/Modify City</h4>
                    </div>
                    <div class="modal-body" id="myModalMessage">
                        <form role="form" onsubmit="return false;" id="formCity">
                            <div class="form-group" id="groupCode">
                                <label for="code">Code:</label>
                                <input type="text" class="form-control" id="code" autofocus="true" placeholder="Code" required="true">
                            </div>

                            <div class="form-group" id="groupName">
                                <label for="name">City name:</label>
                                <input type="text" class="form-control" id="name" placeholder="City name" required="true" >
                            </div>

                            <div class="form-group" id="groupCountry">
                                <label for="country">Country:</label>
                                <input type="text" class="form-control" id="country" placeholder="country" required="true">
                            </div>

                            <div class="form-group">
                                <input type="hidden" value="addCity" id="cityAction"/>
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
                <h1>Management <small>System for the administration of cities</small></h1>
            </div>
        </div>
        <div class="container">
            <div class="panel panel-primary">
                <div class="panel-heading"><h3>City Management</h3></div>
                <div class="panel-body">
                    <center>
                        <button type="button" class="btn btn-primary centered" data-toggle="modal" data-target="#myModalCity" id="btShowForm">Insert City</button>
                    </center><br>
                    <div class="col-sm-12">
                        <form role="form" onsubmit="return false;" id="form" class="form-horizontal centered">
                            <div class="form-group" id="groupIdentifier">
                                <div class="col-sm-4" style="text-align: right; vertical-align: middle;">
                                    <h4 class="bold">Search city per code:</h4>
                                </div>
                                <div class="col-sm-4">
                                    <input type="text" class="form-control" id="search" placeholder="Enter the code">
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
                    <div class="container-fluid table-responsive" id="cityReturn">
                        <table class="table table-hover table-condensed" id="tableCity"></table>                   
                    </div>
                </div>
            </div>
        </div>



        <!-- LIBRARIES -->
        <script type="text/javascript" src="js/jquery-3.2.1.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
        <!-- MODEL -->
        <script type="text/javascript" src="js/Model/City/City.js"></script>
        <!-- NEW -->
        <script src="js/Model/Proxy.js" type="text/javascript"></script>
        <script src="js/Model/utils.js" type="text/javascript"></script>
        <!-- CONTROLLER -->
        <script type="text/javascript" src="js/Controller/Storage.js"></script>
        <script type="text/javascript" src="js/Controller/AirlineController.js"></script>
        <script type="text/javascript" src="js/Controller/CityController.js"></script>
        <!-- VIEW -->
        <script type="text/javascript" src="js/View/CityView.js"></script>
    </body>
</html>
