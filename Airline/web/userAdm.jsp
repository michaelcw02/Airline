<%-- 
    Document   : UserAdm
    Created on : May 20, 2017, 12:04:43 AM
    Author     : cfuen
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>User Management</title>
        <link rel="icon" href="images/airplane-4-48.png" type="image/png">

        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
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
        <div class="modal fade" id="myModalUser" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="myModalTitle">Insert/Modify User</h4>
                    </div>
                    <div class="modal-body" id="myModalMessage">
                        <form role="form" onsubmit="return false;" id="formUser">
                            <div class="form-group" id="groupName">
                                <label for="name">Name</label>
                                <input type="text" class="form-control"  autofocus="true" id="name" placeholder="Name" required="true">
                            </div>
                            
                            <div class="form-group" id="groupFirstLasname">
                                <label for="firstlastname">First Lastname</label>
                                <input type="text" class="form-control" id="firstlastname" placeholder="Lastname" required="true">
                            </div>
                            
                            <div class="form-group" id="groupSecondLasname">
                                <label for="secondlastname">Second Lastname</label>
                                <input type="text" class="form-control" id="secondlastname" placeholder="Lastname" required="true">
                            </div>
                            
                            <div class="form-group" id="groupBirthdate">
                                <label for="birthdate">Birthdate</label>
                                <input type="text" class="form-control" id="birthdate" placeholder="Birthdate" required="true">
                            </div>
                            
                            <div class="form-group" id="groupEmail">
                                <label for="email">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="Email" required="true" >
                            </div>
                            
                            <div class="form-group" id="groupUsername">
                                <label for="user">Username</label>
                                <input type="text" class="form-control" id="user" placeholder="Username" required="true">
                            </div>

                            <div class="form-group" id="groupPassword">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="pass" required="true" >
                            </div>
                            
                            <div class="form-group" id="groupRepeatPassword">
                                <label for="password">Repeat Password</label>
                                <input type="password" class="form-control" id="passwordRepeat" required="true" >
                            </div>
                            
                            <div class="form-group" id="groupTelephone">
                                <label for="telephone">Telephone</label>
                                <input type="text" class="form-control" id="telephone" placeholder="8888-8888" required="true">
                            </div>
                            
                            <div class="form-group" id="groupCellphone">
                                <label for="cellphone">Cellphone</label>
                                <input type="text" class="form-control" id="cellphone" placeholder="8888-8888" required="true">
                            </div>
                            
                            <div class="form-group" id="groupDirection">
                                <label for="direction">Direction</label>
                                <textarea class="form-control" id="direction" required="true"></textarea>
                            </div>

                            <div class="form-group">
                                <input type="hidden" value="addUser" id="userAction"/>
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
                <h1>Management <small>System for the administration of users</small></h1>
            </div>
        </div>
        <div class="container">
            <div class="panel panel-primary">
                <div class="panel-heading"><h3>User Management</h3></div>
                <div class="panel-body">
                    <center>
                        <button type="button" class="btn btn-primary centered" data-toggle="modal" data-target="#myModalUser" id="btShowForm">Insert User</button>
                    </center><br>
                    <div class="col-sm-12">
                        <form role="form" onsubmit="return false;" id="form" class="form-horizontal centered">
                            <div class="form-group" id="groupUsername">
                                <div class="col-sm-4" style="text-align: right; vertical-align: middle;">
                                    <h4 class="bold">Search user per username:</h4>
                                </div>
                                <div class="col-sm-4">
                                    <input type="text" class="form-control" id="search" placeholder="Enter the username">
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
                    <div class="container-fluid table-responsive" id="userReturn">
                        <table class="table table-hover table-condensed" id="tableUser"></table>                   
                    </div>
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
        <script type="text/javascript" src="js/Controller/UserController.js"></script>
        <!-- VIEW -->
        <script type="text/javascript" src="js/View/UserView.js"></script>
    </body>
</html>
