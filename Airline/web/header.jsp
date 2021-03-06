<%-- 
    Document   : header
    Created on : May 7, 2017, 5:04:34 PM
    Author     : michaelcw02
--%>

<%@page import="java.util.Date"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<%
    session = request.getSession(true);
    if (session == null) {
        session = request.getSession(true);
        session.setAttribute("loginStatus", "Not a User");
        session.removeAttribute("OutboundReservation");
        session.removeAttribute("ReturnReservation");
    }
%>

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>header</title>
    </head>
    <body>
        <header>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">

                    <div class="navbar-header">
                        <a class="navbar-brand hvr-grow" href="index.jsp">Star Airlines<strong>✵</strong></a>
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>

                    <div class="navbar-collapse collapse">
                        <ul class="nav navbar-nav">
                            <li class="dropdown">
                                <a class="dropdown-toggle hvr-grow" data-toggle="dropdown" href="#">Our Company</a>
                                <ul class="dropdown-menu dropdown-profile">
                                    <li>
                                        <h3 class="text-center text-white">Corporate Profile ✵</h3>
                                    </li>
                                    <ul>
                                        <li class="text-white"> <h5> <a href="companyInfo.jsp">History of us</a> </h5> </li>
                                        <li class="text-white"> <h5> <a href="contactUs.jsp">Contact us</a></h5> </li>
                                        <li class="text-white"> <h5> <a href="instBenchmarks.jsp">Institutional Benchmarks</a></h5> </li>
                                        <li class="text-white"> <h5> <a href="aboutUs.jsp">About us</a></h5> </li>
                                    </ul>
                                </ul>
                            </li>
                            <!--only for test-->
                            <li class="dropdown" style="display:none;" id="administration">
                                <a class="dropdown-toggle hvr-grow" data-toggle="dropdown" href="#">Administration</a>
                                <ul class="dropdown-menu dropdown-profile">
                                    <li>
                                        <h3 class="text-center text-white">Management ✵</h3>
                                    </li>
                                    <ul>
                                        <li class="text-white"> <h5> <a href="typeAirplaneAdm.jsp">Type Airplanes</a> </h5> </li>
                                        <li class="text-white"> <h5> <a href="airplaneAdm.jsp">Airplanes</a></h5> </li>
                                        <li class="text-white"> <h5> <a href="userAdm.jsp">Users</a></h5> </li>
                                        <li class="text-white"> <h5> <a href="routeAdm.jsp">Routes</a></h5> </li>
                                        <li class="text-white"> <h5> <a href="flightAdm.jsp">Flights</a></h5> </li>
                                        <li class="text-white"> <h5> <a href="citiesAdm.jsp">Cities</a></h5> </li>
                                        <li class="text-white"> <h5> <a href="ticketAdm.jsp">Tickets</a></h5> </li>
                                    </ul>
                                </ul>
                            </li>
                        </ul>

                        <ul class="nav navbar-nav navbar-right">
                            <% String user = (String) request.getSession().getAttribute("user"); %>
                            <% if (user == null) {%> 
                            <!------------- SUPER IMPORTANT --------------->
                            <!-- This place is supposed to have 2 different kinds,one for log in and 1 for user logged -->
                            <li class="dropdown">
                                <a class="dropdown-toggle hvr-grow" data-toggle="dropdown" href="#">
                                    <img class="icon" src="images/user-48.png" alt="Sign In"><span class="text-SignIn"></span>
                                    Sign In
                                </a>
                                <ul class="dropdown-menu sign-in">
                                    <li>
                                        <div class="container-fluid text-center">
                                            <form action="javascript: new AirlineController().loginUser();" class="form-horizontal">
                                                <div class="row text-center">
                                                    <h2 class="text-white">Sign in at Star Airlines</h2>
                                                </div>

                                                <div class="form-group">
                                                    <div class="col-md-offset-2 col-md-1 text-center">
                                                        <img class="icon" src="images/user-48.png" alt="User">
                                                    </div>
                                                    <div class="col-md-7">
                                                        <input type="text" id="username" class="form-control" placeholder="email/username" required>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <div class="col-md-offset-2 col-md-1 text-center">
                                                        <img class="icon" src="images/lock-4-48.png" alt="password">
                                                    </div>
                                                    <div class="col-md-7">
                                                        <input type="password" id="password" class="form-control" placeholder="Password" required>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <div class="col-md-offset-3 col-md-1">
                                                        <button type="submit" onclick="" id="btnSubmit" class="btn btn-success">Sign In</button>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <a href="#">Forgot your password?</a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="register">
                                            <div class="row">
                                                <div class="col-md-offset-3 col-md-6 text-center text-white">
                                                    Not registered yet?
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-offset-3  col-md-6 text-center register">
                                                    <a class="hvr-grow" href="./register.jsp" target="_blank">
                                                        <img class="icon-register" src="images/edit-8-48.png" alt="Register">Register
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <%}%> 

                            <%  if (user != null) {%>
                            <% if (request.getSession().getAttribute("type").equals("Administrator")) {%> 
                            <script>
                                document.getElementById("administration").style.display = 'block';
                            </script>
                            <%}%> 
                            <li class="dropdown">
                                <a class="dropdown-toggle hvr-grow" data-toggle="dropdown" href="#">
                                    <img class="icon" src="images/user-48.png" alt="Sign In"><span class="text-SignIn"></span>
                                    <%=user%>
                                </a>
                                <ul class="dropdown-menu profile">
                                    <div>
                                        <a class="hvr-grow btn btn-info" role="button" href="./profile.jsp">
                                            <span class="glyphicon glyphicon-wrench" aria-hidden="true"></span>
                                            Profile   
                                        </a>
                                    </div>
                                    <br>
                                    <div>
                                        <a class="hvr-grow btn btn-warning" href="Logout" role="button" onclick="javascript: new AirlineController().logout();return false;">
                                            <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span>
                                            Log Out
                                        </a>
                                    </div>
                                </ul>
                            </li>
                            <%}%> 
                        </ul>
                    </div>
                </div>
            </nav>
        </header>  
    </body>
</html>
