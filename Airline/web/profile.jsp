<%-- 
    Document   : profile
    Created on : Jun 5, 2017, 8:24:14 PM
    Author     : cfuen
--%>

<%@page import="una.airline.domain.User"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Profile</title>
    <link rel="icon" href="images/airplane-4-48.png" type="image/png">

    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/bootstrap-theme.css">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <link rel="stylesheet" href="css/hover.css">
    <link rel="stylesheet" href="css/stylesheet.css">
</head>

<body class="profile-body">
    <% String user =(String) request.getSession().getAttribute("user"); %>
    <% String lastname1 =(String) request.getSession().getAttribute("lastname1"); %>
    <% String lastname2 =(String) request.getSession().getAttribute("lastname2"); %>
    <% String username =(String) request.getSession().getAttribute("username"); %>
    <% String phone =(String) request.getSession().getAttribute("phone"); %>
    <% String cellphone =(String) request.getSession().getAttribute("cellphone"); %>
    <% String email =(String) request.getSession().getAttribute("email"); %>
    <% String location =(String) request.getSession().getAttribute("location"); %>
    <% String birth = (String) request.getSession().getAttribute("birth"); %>
    <% String[] separated = birth.split("-"); %>
    <% String year = separated[0]; %>
    <% String month = separated[1]; %>
    <% String day = separated[2]; %>
    <% birth = month + "/" + day + "/" + year; %>
    
    <div class="container top-container">
        <jsp:include page="header.jsp" />
    </div>
    
    <div class="container body-container">
        <div class="col-md-6">
            <article>
                <div class="row">
                    <div class="col-xs-12 col-sm-8">
                      <h2> <%=user%> <%=lastname1%> <%=lastname2%></h2>
                      <p><span class="glyphicon glyphicon-user"></span><strong> <%=username%></strong></p>
                      <p><span class="glyphicon glyphicon-gift"></span><strong> <%=birth%></strong></p>
                      <p><span class="glyphicon glyphicon-phone-alt"></span><strong> <%=phone%></strong></p>
                      <p><span class="glyphicon glyphicon-phone"></span><strong> <%=cellphone%></strong></p>
                      <p><span class="glyphicon glyphicon-envelope"></span><strong> <%=email%></strong></p>
                      <p><span class="glyphicon glyphicon-map-marker"></span><strong> <%=location%></strong></p>
                    </div>          
                    <div class="col-xs-12 col-sm-4 text-center">
                        <p> <img src="images/user.png" alt="" class="center-block img-circle img-responsive face-picture"> </p>
                    </div>
                    <div class="col-xs-12 col-sm-4">                  
                      <p> <button type="button" class="btn btn-primary btn-block" id="btnUpdate"><span class="glyphicon glyphicon-wrench"></span> Update Profile </button>  </p>
                    </div>
                </div>            
            </article>
        </div>
          
        <div class="hide" id="update">
            <div class="col-md-6">
                <article>
                    <div class="registration">
                        <div class="row text-center">
                            <h1 class="text-white">Update</h1>
                        </div>
                        <div class="row text-center">
                            <label for="alerts" class="alert" id="alert"></label>
                        </div>
                        <form action='javascript:updateUser();' method='POST' id='profileForm'>
                            <div class='row'>
                                <div class='form-group text-center'>
                                    <div class='col-sm-offset-2 col-sm-3 text-center text-white label'>Name:</div>
                                    <div class='col-sm-6'><input type='text' id='name' class='form-control bg-black text-white' placeholder="John" value=<%=user%>></div>
                                </div>
                            </div>
                            <br>
                            <div class='row'>
                                <div class='form-group text-center'>
                                    <div class='col-sm-offset-2 col-sm-3  text-center text-white label'>First Lastname:</div>
                                    <div class='col-sm-6'><input type='text' id='firstlastname' class='form-control bg-black text-white' placeholder="Doe" value=<%=lastname1%>></div>
                                </div>
                            </div>
                            <br>
                            <div class='row'>
                                <div class='form-group text-center'>
                                    <div class='col-sm-offset-2 col-sm-3 text-center text-white label'>Second Lastname:</div>
                                    <div class='col-sm-6'><input type='text' id='secondlastname' class='form-control bg-black text-white' placeholder="Doe" value=<%=lastname2%>></div>
                                </div>
                            </div>
                            <br>
                            <div class='row'>
                                <div class='form-group text-center'>
                                    <div class='col-sm-offset-2 col-sm-3 text-center text-white label'>Birthdate:</div>
                                    <div class='col-sm-6'><input type='text' id='birthdate' class='form-control bg-black text-white' value=<%=birth%>></div>
                                </div>
                            </div>
                            <br>
                            <div class='row'>
                                <div class='form-group text-center'>
                                    <div class='col-sm-offset-2 col-sm-3 text-center text-white label'>Username:</div>
                                    <div class='col-sm-6'><input onfocus = "this.blur()" type='text' id='user' class='form-control bg-black text-white' placeholder="johndoe123" value=<%=username%>></div>
                                </div>
                            </div>
                            <br>
                            <div class='row'>
                                <div class='form-group text-center'>
                                    <div class='col-sm-offset-2 col-sm-3 text-center text-white label'>Email:</div>
                                    <div class='col-sm-6'><input type='email' id='email' class='form-control bg-black text-white' placeholder="johndoe@email.com" value=<%=email%>></div>
                                </div>
                            </div>
                            <br>
                            <div class='row'>
                                <div class='form-group text-center'>
                                    <div class='col-sm-offset-2 col-sm-3 text-center text-white label'>Password:</div>
                                    <div class='col-sm-6'><input type='password' id='pass' class='form-control bg-black text-white'></div>
                                </div>
                            </div>
                            <br>
                            <div class='row'>
                                <div class='form-group text-center'>
                                    <div class='col-sm-offset-2 col-sm-3 text-center text-white label'>Repeat Password:</div>
                                    <div class='col-sm-6'><input type='password' id='passwordRepeat' class='form-control bg-black text-white'></div>
                                </div>
                            </div>
                            <br>
                            <div class='row'>
                                <div class='form-group text-center'>
                                    <div class='col-sm-offset-2 col-sm-3 text-center text-white label'>Telephone:</div>
                                    <div class='col-sm-6'><input type='text' id='telephone' class='form-control bg-black text-white' placeholder="8888-8888" value=<%=phone%>></div>
                                </div>
                            </div>
                            <br>
                            <div class='row'>
                                <div class='form-group text-center'>
                                    <div class='col-sm-offset-2 col-sm-3 text-center text-white label'>Cellphone:</div>
                                    <div class='col-sm-6'><input type='text' id='cellphone' class='form-control bg-black text-white' placeholder="8888-8888" value=<%=cellphone%>></div>
                                </div>
                            </div>
                            <br>
                            <div class='row'>
                                <div class='form-group text-center'>
                                    <div class='col-sm-offset-3 col-sm-2 text-center text-white label'>Direction:</div>
                                    <div class='col-sm-6'><textarea class="form-control controls bg-black text-white" id="direction" required="true" placeholder="Alajuela, Costa Rica"><%=location%></textarea></div>
                                </div>
                            </div>
                            <br>
                            <div class='row'>
                                <div class='col-md-12 text-center'>
                                    <input type='submit' class='btn btn-success' id='send'>
                                </div>
                            </div>
                        </form>
                    </div>
                </article>
            </div>
        </div>
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
    <br><br>
    
    <div class="container footer-container">
        <jsp:include page="footer.jsp" />
    </div>

    <!-- LIBRARIES -->
    <script type="text/javascript" src="js/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="js/Model/utils.js" type="text/javascript"></script>
    <!-- MODEL -->
    <script type="text/javascript" src="js/Model/Proxy.js"></script>
    <!-- CONTROLLER -->
    <script src="js/Controller/AirlineController.js" type="text/javascript"></script>
    <script src="js/Controller/ProfileController.js" type="text/javascript"></script>
    <!-- VIEW -->
    <script src="js/View/ProfileView.js" type="text/javascript"></script>

</body>

</html>