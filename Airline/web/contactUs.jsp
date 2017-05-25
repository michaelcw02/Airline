<%-- 
    Document   : contactUs
    Created on : May 10, 2017, 9:10:21 AM
    Author     : michaelcw02
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Contact Us</title>
    <link rel="icon" href="images/airplane-4-48.png" type="image/png">

    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/bootstrap-theme.css">
    <link rel="stylesheet" href="css/hover.css">
    <link rel="stylesheet" href="css/stylesheet.css">

</head>

<body class="contact-us-body">

    <div class="container top-container">
        <jsp:include page="header.jsp"/>
    </div>

    <div class="container body-container">
        <div class="">
            <article>
                <h1 class="text-center">CONTACT</h1>
                <hr>
                <h3>INFORMATION</h3>
                <div class="row text-center">
                    <div class="col-md-6 text-med">
                        <div>
                            <dl>
                                <dt>Phone:</dt>
                                <dd><a href="tel:+506-2244-6688">+(506) 2244-6688</a></dd>
                                <dt>Email:</dt>
                                <dd><a href="email:contact@starair.com">contact@starair.com</a></dd>
                            </dl>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="text-center">
                            <a class="hvr-grow" href="https://www.linkedin.com/"><img src="images/linkedin-3-48.png" alt="LinkedIn"></a>
                            <a class="hvr-grow" href="https://www.facebook.com/"><img src="images/facebook-3-48.png" alt="Facebook"></a>
                            <a class="hvr-grow" href="https://www.instagram.com"><img src="images/instagram-48.png" alt="Instagram"></a>
                            <a class="hvr-grow" href="https://www.twitter.com"><img src="images/twitter-48.png" alt="Instagram"></a>
                        </div>
                    </div>
                </div>
                <hr>
                <h3>CONTACT FORM</h3>
                <div>
                    <form>
                        <div class="form-group row ">
                            <div class="col-md-6">
                                <input type="text" id="Name" class="form-control bg-black text-white" placeholder="Name" required>
                            </div>
                            <div class="col-md-6">
                                <input type="text" id="LastName" class="form-control bg-black text-white" placeholder="LastName" required>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-6">
                                <input type="text" id="Country" class="form-control bg-black text-white" placeholder="Country" required>
                            </div>
                            <div class="col-md-6">
                                <input type="text" id="Email" class="form-control bg-black text-white" placeholder="Email Address" required>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-12">
                                <input type="text" id="Subject" class="form-control bg-black text-white" placeholder="Subject" required>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-12">
                                <textarea id="Question" class="form-control bg-black text-white" placeholder="Your Question" required></textarea>
                            </div>
                            <div class="form-group">
                                <div class="col-md-12 align">
                                    <button type="submit" id="btnSubmit" class="btn btn-primary button ">Send your message</button>
                                </div>
                            </div>
                    </form>
                    </div>
            </article>
            </div>
        </div>


        <div class="container footer-container">
            <jsp:include page="footer.jsp"/>
        </div>

        <script type="text/javascript" src="js/jquery-3.2.1.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>

</body>

</html>