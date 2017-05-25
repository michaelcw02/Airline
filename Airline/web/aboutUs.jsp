<%-- 
    Document   : aboutUs
    Created on : May 10, 2017, 9:14:09 AM
    Author     : michael
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About us</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="icon" href="images/airplane-4-48.png" type="image/png">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/bootstrap-theme.css">
    <link rel="stylesheet" href="css/hover.css">
    <link rel="stylesheet" href="css/stylesheet.css">
</head>

<body class="about-us-body">
    <div class="container top-container">
        <jsp:include page="header.jsp"/>
    </div>

    <div class="container body-container text-justify">
        <article class="about-us-article">
            <div class="row">
                <h1 class="text-center text-white">This Web Page Was Developed By</h1>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-12 text-white text-center">
                    <img class="img-circle face-picture" src="images/michael.jpg" alt="Michael's pic'">
                    <h3> Michael Chen W.</h3>
                </div>
                <div class="col-md-4 col-sm-12 text-white text-center">
                    <img class="img-circle face-picture" src="images/christian.jpg" alt="Christian's pic'">
                    <h3> Christian Fuentes C.</h3>
                </div>
                <div class="col-md-4 col-sm-12 text-white text-center">
                    <img class="img-circle face-picture" src="images/fabiana.jpg" alt="Fabiana's pic'">
                    <h3> Fabiana Salas V. </h3>
                </div>
            </div>
        </article>
    </div>

    <div class="container footer-container">
        <jsp:include page="footer.jsp"/>
    </div>
    <script type="text/javascript" src="js/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>

</body>

</html>