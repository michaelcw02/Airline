<%-- 
    Document   : register
    Created on : May 10, 2017, 9:00:32 AM
    Author     : michaelcw02
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Register</title>
    <link rel="icon" href="images/airplane-4-48.png" type="image/png">

    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/bootstrap-theme.css">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <link rel="stylesheet" href="css/hover.css">
    <link rel="stylesheet" href="css/stylesheet.css">
</head>

<body class="register-body">
    <div class="container top-container">
        <jsp:include page="header.jsp"/>
    </div>

    <div class="container body-container">
        <article>
        <div class="registration">
            <div class="row text-center">
                <h1 class="text-white">Registration</h1>
            </div>
            <div class="row text-center">
                <label for="alerts" class="alert" id="alert"></label>
            </div>
            <form action='' method='POST' id='registrationForm'>
                <div class='row'>
                    <div class='form-group text-center'>
                        <div class='col-sm-offset-3 col-sm-2 text-center text-white label'>Name:</div>
                        <div class='col-sm-4'><input type='text' id='name' class='form-control bg-black text-white' placeholder="John" ></div>
                    </div>
                </div>
                <br>
                <div class='row'>
                    <div class='form-group text-center'>
                        <div class='col-sm-offset-3 col-sm-2 text-center text-white label'>First Lastname:</div>
                        <div class='col-sm-4'><input type='text' id='firstlastname' class='form-control bg-black text-white' placeholder="Doe" ></div>
                    </div>
                </div>
                <br>
                <div class='row'>
                    <div class='form-group text-center'>
                        <div class='col-sm-offset-3 col-sm-2 text-center text-white label'>Second Lastname:</div>
                        <div class='col-sm-4'><input type='text' id='secondlastname' class='form-control bg-black text-white' placeholder="Doe" ></div>
                    </div>
                </div>
                <br>
                <div class='row'>
                    <div class='form-group text-center'>
                        <div class='col-sm-offset-3 col-sm-2 label'>Sex:</div>
                        <div class='col-sm-4'>
                            <div class='btn-group radio' data-toggle='buttons' id="sex-radio-btn">
                                <label class='btn btn-default btn-radio' id='lblMasc'>
                                    <input type='radio' name='sex' id='sexMasc' value='M'>
                                    <img src='images/glyphicons-4-user.png' alt='Male'>
                                    Male
                                </label>
                                <label class='btn btn-default btn-radio' id='lblFem'>
                                    <input type='radio' name='sex' id='sexFem' value='F'>
                                    <img src='images/glyphicons-5-girl.png' alt='Female'>
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class='row'>
                    <div class='form-group text-center'>
                        <div class='col-sm-offset-3 col-sm-2 text-center text-white label'>Birthdate:</div>
                        <div class='col-sm-4'><input type='text' id='birthdate' class='form-control bg-black text-white' ></div>
                    </div>
                </div>
                <br>
                <div class='row'>
                    <div class='form-group text-center'>
                        <div class='col-sm-offset-3 col-sm-2 text-center text-white label'>Username:</div>
                        <div class='col-sm-4'><input type='text' id='user' class='form-control bg-black text-white' placeholder="johndoe123"></div>
                    </div>
                </div>
                <br>
                <div class='row'>
                    <div class='form-group text-center'>
                        <div class='col-sm-offset-3 col-sm-2 text-center text-white label'>Email:</div>
                        <div class='col-sm-4'><input type='email' id='email' class='form-control bg-black text-white' placeholder="johndoe@email.com"></div>
                    </div>
                </div>
                <br>
                <div class='row'>
                    <div class='form-group text-center'>
                        <div class='col-sm-offset-3 col-sm-2 text-center text-white label'>Password:</div>
                        <div class='col-sm-4'><input type='password' id='pass' class='form-control bg-black text-white'></div>
                    </div>
                </div>
                <br>
                <div class='row'>
                    <div class='form-group text-center'>
                        <div class='col-sm-offset-3 col-sm-2 text-center text-white label'>Repeat Password:</div>
                        <div class='col-sm-4'><input type='password' id='passwordRepeat' class='form-control bg-black text-white'></div>
                    </div>
                </div>
                <br>
                <div class='row'>
                    <div class='form-group text-center'>
                        <div class='col-sm-offset-3 col-sm-2 text-center text-white label'>Telephone:</div>
                        <div class='col-sm-4'><input type='text' id='telephone' class='form-control bg-black text-white' placeholder="8888-8888"></div>
                    </div>
                </div>
                <br>
                <div class='row'>
                    <div class='form-group text-center'>
                        <div class='col-sm-offset-3 col-sm-2 text-center text-white label'>Celular:</div>
                        <div class='col-sm-4'><input type='text' id='cellphone' class='form-control bg-black text-white' placeholder="8888-8888"></div>
                    </div>
                </div>
                <br>
                <div class='row'>
                    <div class='form-group text-center'>
                        <div class='col-sm-offset-3 col-sm-2 text-center text-white label'>Direction:</div>
                        <div class='col-sm-3'><input type='text' id='direction' class='form-control controls bg-black text-white' placeholder="Alajuela, Costa Rica"></div>
                        <div class="col-sm-1"><button type="button" class="btn btn-success" id="getDirection">Get Direction</button></div>
                    </div>
                </div>
                <div class="row">
                    <div class="container map-container">
                        <div id="map">
                            <!-- THE MAP WILL GO HERE -->
                        </div>
                    </div>
                </div>

                <br>
                <div class='row'>
                    <div class='form-group text-center'>
                        <label class="checkbox-inline">
                            <input type="checkbox" name="checkbox" id="agree">
                            I have read and agree to the Terms and Conditions and Privacy Policy
                        </label>
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

    <div class="container footer-container">
        <jsp:include page="footer.jsp"/>
    </div>

    <!-- LIBRARIES -->
    <script type="text/javascript" src="js/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDTA1btQZJ0v_4ry2yFCX7u70GcpePQcts"></script>
    <!-- MODEL -->
    <script src="js/Model/GoogleMap/GoogleMap.js" type="text/javascript"></script>
    <script src="js/Model/AirlineModel.js" type="text/javascript"></script>
    <script src="js/Model/RegisterModel.js" type="text/javascript"></script>
    <!-- CONTROLLER -->
    <script src="js/Controller/AirlineController.js" type="text/javascript"></script>
    <script src="js/Controller/RegisterController.js" type="text/javascript"></script>
    <!-- VIEW -->
    <script src="js/View/RegisterView.js" type="text/javascript"></script>

</body>

</html>