<%-- 
    Document   : tickets
    Created on : May 30, 2017, 12:50:04 AM
    Author     : cfuen
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tickets</title>
    <link rel="icon" href="images/airplane-4-48.png" type="image/png">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/bootstrap-theme.css">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <link rel="stylesheet" href="css/stylesheet.css" type="text/css">
    <link rel="stylesheet" href="css/dataTables.bootstrap.css" type="text/css" />
    <link rel="stylesheet" href="css/hover.css">
</head>

<body>
    <div class="container top-container">
        <jsp:include page="header.jsp" />
    </div>

    <div class="container body-container">
        <div class="tab navbar-inverse text-center">
            <a class="hvr-grow" href="#flightsContent"><img src="images/airplane-4-48.png" alt="Flights">Tickets</a>
        </div>
        
        <div class="container-fluid outbound-flights-div">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h1>Outbound Flights</h1>
                </div>
                <div class="panel-body">
                    <table class="table-responsive table-hover outbound-flights-table col-md-offset-2 col-md-8">
                        <thead>
                            <tr>
                                <th>Information</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody id="outbound-flights">

                        </tbody>
                    </table>
                    <input type="hidden" value="none" id="OutboundSelection"/>
                </div>
            </div>
        </div>
        <div class="container-fluid return-flights-div">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <h1>Return Flights</h1>
                </div>
                <div class="panel-body">
                    <table class="table-responsive table-hover return-flights-table col-md-offset-2 col-md-8">
                        <thead>
                            <tr>
                                <th>Information</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody id="return-flights">

                        </tbody>
                    </table>
                    <input type="hidden" value="none" id="ReturnSelection"/>
                </div>
            </div>
        </div>

        <div class="container-fluid confirmation-div">
            <div class="row text-center" id="confirmation">
                <button type="button" class="btn btn-success" id="confirmReservation">Confirm Reservation</button>
                <button type="button" class="btn btn-danger" id="cancelReservation">Cancel</button>
            </div>
        </div>
    </div>

    <div class="container footer-container">
        <jsp:include page="footer.jsp" />
    </div>

    <!-- LIBRARIES -->
    <script type="text/javascript" src="js/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="js/jquery.dataTables.js" type="text/javascript"></script>
    <script src="js/dataTables.bootstrap.js" type="text/javascript"></script>
    <script src="js/Model/utils.js" type="text/javascript"></script>
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