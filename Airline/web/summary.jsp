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
    <title>Summary</title>
    <link rel="icon" href="images/airplane-4-48.png" type="image/png">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/bootstrap-theme.css">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <link rel="stylesheet" href="css/stylesheet.css" type="text/css">
    <link rel="stylesheet" href="css/dataTables.bootstrap.css" type="text/css" />
    <link rel="stylesheet" href="css/hover.css">
</head>

<body class="ticket-body">

    <div class="container top-container">
        <jsp:include page="header.jsp" />
    </div>

    <div class="container body-container">
        <article>
            <h1 class="text-center">SUMMARY</h1>
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
                <div class="row" id="confirmation">
                    <button type="button" class="btn btn-success" id="confirmPayment">Payment</button>
                    <button type="button" class="btn btn-info" id="generatePDF" href="/Airline/PDFServlet">PDF</button>
                    <button type="button" class="btn btn-danger" id="cancelPayment">Cancel</button>
                </div>
            </div>
        </article>


        <div class="modal" id="myModal" role="dialog">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="myModalTitle">Choose your seat</h4>
                    </div>
                    <div class="modal-body" id="myModalMessage">
                        <!-- THIS PLACE WILL BE THE SEAT OPTIONS -->
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="paymentModal" role="dialog">
            <div class="modal-dialog modal-md">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="paymentModalTitle">PAYMENT</h4>
                    </div>
                    <div class="modal-body text-center" id="paymentModalMessage">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-md-4">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h3 class="panel-title">
                                                Payment Details
                                            </h3>
                                            <div class="checkbox pull-right">
                                                <label><input type="checkbox" />Remember</label>
                                            </div>
                                        </div>
                                        <div class="panel-body">
                                            <form role="form">
                                                <div class="form-group">
                                                    <label for="cardNumber">CARD NUMBER</label>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" id="cardNumber" placeholder="Valid Card Number" required autofocus />
                                                        <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-xs-7 col-md-7">
                                                        <div class="form-group">
                                                            <label for="expityMonth">EXPIRY DATE</label>
                                                            <div class="col-xs-6 col-lg-6 pl-ziro">
                                                                <input type="text" class="form-control" id="expityMonth" placeholder="MM" required />
                                                            </div>
                                                            <div class="col-xs-6 col-lg-6 pl-ziro">
                                                                <input type="text" class="form-control" id="expityYear" placeholder="YY" required /></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-5 col-md-5 pull-right">
                                                        <div class="form-group">
                                                            <label for="cvCode">CV CODE</label>
                                                            <input type="password" class="form-control" id="cvCode" placeholder="CV" required />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <ul class="nav nav-pills nav-stacked">
                                        <li class="active"><a href="#"><span class="badge pull-right"><span class="glyphicon glyphicon-usd"></span>4200</span> Final Payment</a>
                                        </li>
                                    </ul>
                                    <br/>
                                    <a href="#" class="btn btn-success btn-lg btn-block" role="button">Pay</a>
                                </div>
                            </div>
                        </div>

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
    <script type="text/javascript" src="js/Controller/SummaryController.js"></script>

    <!-- VIEW -->
    <script type="text/javascript" src="js/View/SummaryView.js"></script>

</body>

</html>