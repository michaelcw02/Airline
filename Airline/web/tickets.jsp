<%-- 
    Document   : tickets
    Created on : May 30, 2017, 12:50:04 AM
    Author     : cfuen
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%
    session = request.getSession();
    if(session!=null){
        if (session.getAttribute("loginStatus")  != null) {
            if("Not logged.".equalsIgnoreCase((String) session.getAttribute("loginStatus"))) {
                response.sendRedirect("index.jsp");
            }
        }else{
            response.sendRedirect("index.jsp");
        }
    }else{
        response.sendRedirect("LoginJSP.jsp");
    }
%>

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
    <link rel="stylesheet" href="css/hover.css">
</head>

<body class="ticket-body">
    <div class="container top-container">
        <jsp:include page="header.jsp" />
    </div>

    <div class="container body-container">
        <article>
            <h1 class="text-center">TICKET RESERVATION DETAILS</h1>
            <hr>
            <div class="container-fluid text-center" id="outbound-flight-detail">

            </div>
            <hr>
            <div class="container-fluid text-center" id="return-flight-detail">

            </div>
            <hr>
            <div class="container-fluid text-center" id="price-detail">
                   
            </div>
            <hr>
            <div class="container-fluid text-center">
                <div class="row text-center" id="confirmation">
                    <button type="button" class="btn btn-success" id="addPassengers">Confirm Reservation</button>
                    <button type="button" class="btn btn-danger" id="cancelReservation">Cancel</button>
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
                    </div>
                </form>
            </div>
        </article>

        <div class="modal fade" id="passengersInfo" role="dialog">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="passengersInfoTitle">Passengers Information</h4>
                    </div>
                    <div class="modal-body" id="passengersInfoMessage">
                        <!--THIS PLACE WILL BE THE PASSENGERS DETAILS-->
                    </div>
                </div>
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
        <script src="js/Model/utils.js" type="text/javascript"></script>

        <script src="js/Model/Proxy.js" type="text/javascript"></script>

        <!-- CONTROLLER -->
        <script type="text/javascript" src="js/Controller/Storage.js"></script>
        <script type="text/javascript" src="js/Controller/AirlineController.js"></script>
        <script type="text/javascript" src="js/Controller/TicketsController.js"></script>

        <!-- VIEW -->
        <script type="text/javascript" src="js/View/TicketsView.js"></script>
</body>

</html>