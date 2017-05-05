<%-- 
    Document   : index
    Created on : May 1, 2017, 10:23:04 PM
    Author     : michaelcw02
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>StarAir</title>
        <link rel="icon" href="images/airplane-4-48.png" type="image/png">
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/bootstrap-theme.css">
        <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
        <link rel="stylesheet" href="css/hover.css">
        <link rel="stylesheet" href="css/stylesheet.css">
    </head>
    <body>
    <div class="container top-container">

        <header>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">

                    <div class="navbar-header">
                        <a class="navbar-brand" href="index.html">Star Airlines<strong>✵</strong></a>
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div class="navbar-collapse collapse">

                        <ul class="nav navbar-nav">
                            <li><a href="#">Check In</a></li>
                            <li class="dropdown">
                                <a class="dropdown-toggle hvr-grow" data-toggle="dropdown" href="#">Our Company</a>
                                <ul class="dropdown-menu dropdown-profile">
                                    <li>
                                        <h3 class="text-center text-white">Corporate Profile ✵</h3>
                                    </li>
                                    <ul>
                                        <li class="text-white"> <h5> <a href="companyInfo.html">History of us</a> </h5> </li>
                                        <li class="text-white"> <h5> <a href="contactUs.html">Contact us</a></h5> </li>
                                        <li class="text-white"> <h5> <a href="instBenchmarks.html">Institutional Benchmarks</a></h5> </li>
                                        <li class="text-white"> <h5> <a href="aboutUs.html">About us</a></h5> </li>
                                    </ul>
                                </ul>
                            </li>
                        </ul>

                        <ul class="nav navbar-nav navbar-right">
                            <li class="dropdown">
                                <a class="dropdown-toggle hvr-grow" data-toggle="dropdown" href="#">
                                    <img class="icon" src="images/user-48.png" alt="Sign In"><span class="text-SignIn"></span>
                                    Sign In
                                </a>
                                <ul class="dropdown-menu sign-in">
                                    <li>
                                        <div class="container-fluid text-center">
                                            <form action="javascript:signIn();" class="form-horizontal">

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
                                                        <button type="submit" id="btnSubmit" class="btn btn-success">Sign In</button>
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
                                                    <a class="hvr-grow" href="./register.html" target="_blank">
                                                        <img class="icon-register" src="images/edit-8-48.png" alt="Register">Register
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>


        <div class="carousel-container">
            <div id="advertisement-carousel" class="carousel slide" data-ride="carousel" data-interval="4000">
                <!-- Indicators -->
                <ol class="carousel-indicators"> </ol>
                <!-- Wrapper for slides -->
                <div class="carousel-inner"> </div>
                <!-- Controls -->
                <a class="left carousel-control" href="#advertisement-carousel" role="button" data-slide="prev">
                    <img class="left" src="images/arrow-left-88-48.png" alt="left">
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#advertisement-carousel" role="button" data-slide="next">
                    <img class="right" src="images/arrow-right-24-48.png" alt="right">
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>

    <div class="container body-container">
        <div class="tab navbar-inverse text-center">
            <a class="hvr-grow" href="#flightsContent"><img src="images/airplane-4-48.png" alt="Flights"> Flights</a>        
        </div>
        <div class="tabcontent text-center" id="flightsContent">
            <form action="javascript:searchFlights();" class="form-horizontal">
                <div class="row">
                    <div class="btn-group-md col-md-12"><br>
                        <button type="button" class="btn btn-primary" id="btnRoundTrip">Round-trip</button>
                        <button type="button" class="btn btn-primary" id="btnOneWay">One-way</button>
                    </div>
                </div>
                <hr>
                <div class="form-group row">
                    <div class="col-md-6">
                        <div class="input-group back">
                            <span class="input-group-addon"><b>From</b></span>
                            <select class='form-control' name="cityFrom" id='cityFrom'>
                                <option value="0">All cities</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="input-group back">
                            <span class="input-group-addon"><b>To</b></span>
                            <select class='form-control' name="cityTo" id='cityTo'>
                                <option value="0">All cities</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Departing" id="departing">    
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Returning" id="returning">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-4 col-md-offset-4">
                        <div class="input-group lh-dropdown-spinner back">
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-primary" id="btnDecrease">-</button>
                            </span>
                            <select class="form-control" id="flightsFormAdults">
                                <option selected="selected" value="1">1 Adult</option>
                                <option value="2">2 Adults</option>
                                <option value="3">3 Adults</option>
                                <option value="4">4 Adults</option>
                                <option value="5">5 Adults</option>
                                <option value="6">6 Adults</option>
                            </select>
                            <span class="input-group-btn">
                                <button type="button" class="btn btn-primary" id="btnIncrease">+</button>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-md-12">
                        <button type="submit" id="btnSearchFlights" class="btn btn-success" data-toggle="collapse" data-target="#flights,#pagination">Search Flights</button>
                    </div>
                </div>                
            </form>
            <div class="container-fluid" id="search-container">
                <div class="container-fluid collapse flights-container" id="flights">
                    <!-- Table with flights -->    
                </div>
            </div>
             <div class="container-fluid" id="pagination-container">
                <div class="container-fluid collapse pagination-container"  id="pagination">
                    <!-- Pagination -->
                </div>
            </div>
            <!--
            <div class="container-fluid" id="outbound-flights">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h1>Outbound Flights</h1>
                    </div>
                    <div class="panel-body">
                        <div class="results" id="results">
                            !-- Table with flights --  
                        </div>
                        <div class="" id="">
                            <div class=""  id="">
                                !-- Pagination --
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid" id="return-flights">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h1>Return Flights</h1>
                    </div>
                    <div class="panel-body">
                        <div class="results" id="results">
                            !-- Table with flights -- 
                        </div>
                        <div class="" id="">
                            <div class=""  id="">
                                !-- Pagination --
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            -->
        </div>
    </div>

    <div class="container footer-container">
        <footer>
            <div class="navbar-inverse">
                <div class="row footer-text">
                    <div class="col-md-4">
                        <h4 class="text-center">CONTACT US</h4>
                        <div>
                            <dl class="dl-horizontal text-center">
                                <dt>Phone:</dt>
                                <dd><a href="tel:+506-2244-6688">(506) 2244-6688</a></dd>
                                <dt>Email:</dt>
                                <dd><a href="mailto:contact@starair.com">contact@starair.com</a></dd>
                            </dl>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <h4 class="text-center">HEADQUARTERS</h4>
                        <div>
                            <h5 class="text-center">Universidad Nacional, Lagunilla, Heredia, Costa Rica</h5>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h4 class="text-center">FOLLOW US ON</h4>
                        <div class="text-center">
                            <a class="hvr-grow" href="https://www.linkedin.com/" target="_blank"><img src="images/linkedin-3-48.png" alt="LinkedIn"></a>
                            <a class="hvr-grow" href="https://www.facebook.com/" target="_blank"><img src="images/facebook-3-48.png" alt="Facebook"></a>
                            <a class="hvr-grow" href="https://www.instagram.com" target="_blank"><img src="images/instagram-48.png" alt="Instagram"></a>
                            <a class="hvr-grow" href="https://www.twitter.com" target="_blank"><img src="images/twitter-48.png" alt="Instagram"></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    <!-- LIBRARIES -->
    <script type="text/javascript" src="js/lib/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="js/lib/bootstrap.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <!-- MODEL -->
    <script type="text/javascript" src="js/Model/City/City.js"></script>
    <script type="text/javascript" src="js/Model/Trip/Trip.js"></script>
    <script type="text/javascript" src="js/Model/Flight/Flight.js"></script>
    <script type="text/javascript" src="js/Model/Discount/Discount.js"></script>
    <!-- NEW -->
    <script src="js/Model/Proxy.js" type="text/javascript"></script>
    
    <!-- CONTROLLER -->
    <script type="text/javascript" src="js/Controller/Storage.js"></script>
    <script type="text/javascript" src="js/Controller/AirlineController.js"></script>
    <script type="text/javascript" src="js/Controller/IndexController.js"></script>
    
    <!-- VIEW -->
    <script type="text/javascript" src="js/View/IndexView.js"></script>
    </body>
</html>
