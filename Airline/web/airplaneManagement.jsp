<%-- 
    Document   : AirplaneManagement
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
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/bootstrap-theme.css">
        <link rel="stylesheet" href="css/hover.css">
        <link rel="stylesheet" href="css/stylesheetAdm.css">
    </head>
    <body>
        <div class="container top-container">
            <jsp:include page="header.jsp"/>
        </div>
        
        <div class="modal fade" id="myModalFormulario" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="myModalTitle">Insert Information
                    </div>
                    <div class="modal-body" id="myModalMessage">
                        <form role="form" onsubmit="return false;" id="formAirplanes">
                            <div class="form-group" id="groupSchedule">
                                <label for="Schedule">Day:</label>
                                <div id="dpFechaNacimiento" class="input-group date form_date" data-date="" data-date-format="dd/mm/yyyy" data-link-field="dtp_input2" data-link-format="dd/mm/yyyy">  
                                    <input type="text" class="form-control" id="day" autofocus="true" placeholder="Day">
                                    <span class="input-group-addon">
                                        <span class="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group" id="groupHour">
                                <label for="hour">Hour</label>
                                <input type="text" class="form-control" id="hour" placeholder="Hour" >
                            </div>

                            <div class="form-group" id="groupMinutes">
                                <label for="minutes">Minutes</label>
                                <input type="text" class="form-control" id="minutes" placeholder="Minutes">
                            </div>

                            <div class="form-group" id="groupArrival">
                                <label for="arrival">Arrival time</label>
                                <input type="text" class="form-control" id="arrival" placeholder="Arrival time">
                            </div>
                            
                            <div class="form-group" id="groupPrice">
                                <label for="price">Price</label>
                                <input type="text" class="form-control" id="price" placeholder="Price">
                            </div>
 
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary" id="enviar">Save</button>
                                <button type="reset" class="btn btn-danger" id="cancelar">Cancel</button>
                            </div>

                            <div class="form-group height25" >
                                <div class="alert alert-success hiddenDiv" id="mesajeResult">
                                    <strong id="mesajeResultNeg">Info!</strong> 
                                    <span id="mesajeResultText">This alert box could indicate a neutral informative change or action.</span>
                                </div>
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
                <div class="panel-heading"><h3>Airplane Management</h3></div>
                    <div class="panel-body">
                        <center>
                            <button type="button" class="btn btn-primary centered" data-toggle="modal" data-target="#myModalFormulario"  id="btMostarForm">Insert information</button>
                        </center><br>
                        <div class="col-sm-12">
                            <form role="form" onsubmit="return false;" id="formPersonas" class="form-horizontal centered">
                                <div class="form-group" id="groupIdentificador">
                                    <div class="col-sm-4" style="text-align: center; vertical-align: middle;">
                                        <p><b>Search route per indentifier:</b></p>
                                    </div>
                                    <div class="col-sm-4">
                                        <input type="text" class="form-control" id="text" placeholder="Enter the identifier">
                                    </div>
                                    <div class="col-sm-4">
                                        <button type="button" class="btn btn-info centered" id="btMostarForm">
                                            Search <span class="glyphicon glyphicon-search"></span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <table class="table table-hover table-condensed" id="tablaRutas"></table>

                    </div>
                    <div class="panel-footer">Nota: Acciones validas dependeran del rol del usuario</div>
            </div>
        </div>
            
            
    <!-- LIBRARIES -->
    <script type="text/javascript" src="js/lib/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="js/lib/bootstrap.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
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
