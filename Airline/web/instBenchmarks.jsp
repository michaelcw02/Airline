<%-- 
    Document   : instBenchmarks
    Created on : May 10, 2017, 9:15:27 AM
    Author     : micha
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>StarAir</title>

    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/bootstrap-theme.css">
    <link rel="stylesheet" href="css/hover.css">
    <link rel="stylesheet" href="css/stylesheet.css">

</head>

<body>
    <div class="container top-container">
        <jsp:include page="footer.jsp"/>
    </div>

    <div class="container body-container text-justify">
        <div class="row">
            <div class="thumbnail">
                <img  src="images/airplane-banner.jpg" alt="Airplane">
                <div class="caption">
                    <p class="text-big">There are many ways Star Airlines gives back to the communities it serves, but one way you might not think
                        about is how we ensure our airline is around for the long haul no matter what challenges we might
                        face.
                    </p>
                </div>
            </div>
        </div>

        <hr>
        <div class="row">
            <div class="panel panel-primary col-sm-12 col-md-4">
                <div class="panel-heading">
                    <h3 class="panel-title text-center">MISSION</h3>
                </div>
                <div class="panel-body">
                    <ul>
                        <li>We fly and serve with passio​n to earn your loyalty.</li>
                        <li>Provite quality service to our costumers.</li>
                    </ul>
                </div>
            </div>
            <div class="panel panel-primary col-sm-12 col-md-4">
                <div class="panel-heading">
                    <h3 class="panel-title text-center">VISION</h3>
                </div>
                <div class="panel-body">
                    To be the leading Latin Ameri​can airline preferred around the world.
                    <ul>
                        <li>Best place to work.</li>
                        <li>Customers' favorite.</li>
                    </ul>
                </div>
            </div>
            <div class="panel panel-primary col-sm-12 col-md-4">
                <div class="panel-heading">
                    <h3 class="panel-title text-center">VALUES</h3>
                </div>
                <div class="panel-body">
                    <ul>
                        <li>​Safety</li>
                        <li>Honesty</li>
                        <li>Excellence</li>
                        <li>Passion and warmth</li>
                        <li>One team</li>
                    </ul>
                </div>
            </div>
        </div>

        <hr>
        <div class="row">
            <div class="container">
                <h1 class="strong">Beyond flying. Social responsibility </h1>
                <p class="text-big">We assume our Social Responsibility through an ongoing commitment of contribution to interest groups via
                    co​​ncrete and measurable actions, by emphasizing business sustainability and incorporating the three
                    performance variables: social, environmental and economic.
                </p>
                <h3 class="strong">Cornerstones of Corporate Social Responsibility:</h3>
                <div class="row text-center">
                    <div class="col-sm-12 col-md-4">
                        <p>Support the well-being and professional growth of our employees.</p>
                        <img class="img-small img-responsive center-block" src="images/employee.png" alt="Employee">
                    </div>
                    <div class= "col-sm-12 col-md-4">
                        <p>Conduct our business in ways that protect the environment</p>
                        <img class="img-small img-responsive center-block" src="images/environment.png" alt="Environment">
                    </div>
                    <div class= "col-sm-12 col-md-4">
                        <p>Support the comprehensive development of the communities we serve</p>
                        <img class="img-small img-responsive center-block" src="images/plane.png" alt="Plane">
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="container text-big">
                <h1 class="strong">Our awards and acknowledgements </h1>
                <p class="text-big strong">Featured acknowledgement</p>
                <div class="row container-fluid">
                    <div class= "col-md-4 col-sm-12">
                        <img class="img-small img-responsive center-block" src="images/tripadvisor.png" alt="Tripadvisor">
                    </div>
                    <div class= "col-md-8 col-sm-12">
                        <p>
                            We are proud to be the Best Airline in Latin America! We obtained this acknowledgment at the 2017 TripAdvisor Travelers’
                            Choice Awards. 500 airlines from around the globe participated in this event. The largest community
                            of travelers in the world, brought together by TripAdvisor, highlighted its flight experience
                            on our airline, the quality of our aircraft, our in-flight entertainment and the price – quality
                            relation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container footer-container">
        <jsp:include page="footer.jsp"/>
    </div>

    <script type="text/javascript" src="js/lib/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="js/lib/bootstrap.js"></script>
</body>

</html>