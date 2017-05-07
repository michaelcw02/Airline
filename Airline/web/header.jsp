<%-- 
    Document   : header
    Created on : May 7, 2017, 5:04:34 PM
    Author     : michaelcw02
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
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
    </body>
</html>
