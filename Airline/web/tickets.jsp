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
    <link rel="stylesheet" href="css/seat-booking.css" type="text/css">
    <link rel="stylesheet" href="css/dataTables.bootstrap.css" type="text/css"/>
    <link rel="stylesheet" href="css/hover.css">
</head>

<body class="ticket-body">

        <div class="modal" id="seatBooking" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title" id="seatBookingTitle">Choose your seat</h4>
                    </div>
                    <div class="modal-body" id="seatBookingMessage">
                        <div class="plane">
                            <div class="cockpit">
                                <h1>Please select a seat</h1>
                            </div>
                            <div class="exit exit--front fuselage">

                            </div>
                            <ol class="cabin fuselage">
                                <li class="row row--1">
                                    <ol class="seats" type="A">
                                        <li class="seat">
                                            <input type="checkbox" id="1A" />
                                            <label for="1A">1A</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="1B" />
                                            <label for="1B">1B</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="1C" />
                                            <label for="1C">1C</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" disabled id="1D" />
                                            <label for="1D">Occupied</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="1E" />
                                            <label for="1E">1E</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="1F" />
                                            <label for="1F">1F</label>
                                        </li>
                                    </ol>
                                </li>
                                <li class="row row--2">
                                    <ol class="seats" type="A">
                                        <li class="seat">
                                            <input type="checkbox" id="2A" />
                                            <label for="2A">2A</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="2B" />
                                            <label for="2B">2B</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="2C" />
                                            <label for="2C">2C</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="2D" />
                                            <label for="2D">2D</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="2E" />
                                            <label for="2E">2E</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="2F" />
                                            <label for="2F">2F</label>
                                        </li>
                                    </ol>
                                </li>
                                <li class="row row--3">
                                    <ol class="seats" type="A">
                                        <li class="seat">
                                            <input type="checkbox" id="3A" />
                                            <label for="3A">3A</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="3B" />
                                            <label for="3B">3B</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="3C" />
                                            <label for="3C">3C</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="3D" />
                                            <label for="3D">3D</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="3E" />
                                            <label for="3E">3E</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="3F" />
                                            <label for="3F">3F</label>
                                        </li>
                                    </ol>
                                </li>
                                <li class="row row--4">
                                    <ol class="seats" type="A">
                                        <li class="seat">
                                            <input type="checkbox" id="4A" />
                                            <label for="4A">4A</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="4B" />
                                            <label for="4B">4B</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="4C" />
                                            <label for="4C">4C</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="4D" />
                                            <label for="4D">4D</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="4E" />
                                            <label for="4E">4E</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="4F" />
                                            <label for="4F">4F</label>
                                        </li>
                                    </ol>
                                </li>
                                <li class="row row--5">
                                    <ol class="seats" type="A">
                                        <li class="seat">
                                            <input type="checkbox" id="5A" />
                                            <label for="5A">5A</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="5B" />
                                            <label for="5B">5B</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="5C" />
                                            <label for="5C">5C</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="5D" />
                                            <label for="5D">5D</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="5E" />
                                            <label for="5E">5E</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="5F" />
                                            <label for="5F">5F</label>
                                        </li>
                                    </ol>
                                </li>
                                <li class="row row--6">
                                    <ol class="seats" type="A">
                                        <li class="seat">
                                            <input type="checkbox" id="6A" />
                                            <label for="6A">6A</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="6B" />
                                            <label for="6B">6B</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="6C" />
                                            <label for="6C">6C</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="6D" />
                                            <label for="6D">6D</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="6E" />
                                            <label for="6E">6E</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="6F" />
                                            <label for="6F">6F</label>
                                        </li>
                                    </ol>
                                </li>
                                <li class="row row--7">
                                    <ol class="seats" type="A">
                                        <li class="seat">
                                            <input type="checkbox" id="7A" />
                                            <label for="7A">7A</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="7B" />
                                            <label for="7B">7B</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="7C" />
                                            <label for="7C">7C</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="7D" />
                                            <label for="7D">7D</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="7E" />
                                            <label for="7E">7E</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="7F" />
                                            <label for="7F">7F</label>
                                        </li>
                                    </ol>
                                </li>
                                <li class="row row--8">
                                    <ol class="seats" type="A">
                                        <li class="seat">
                                            <input type="checkbox" id="8A" />
                                            <label for="8A">8A</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="8B" />
                                            <label for="8B">8B</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="8C" />
                                            <label for="8C">8C</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="8D" />
                                            <label for="8D">8D</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="8E" />
                                            <label for="8E">8E</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="8F" />
                                            <label for="8F">8F</label>
                                        </li>
                                    </ol>
                                </li>
                                <li class="row row--9">
                                    <ol class="seats" type="A">
                                        <li class="seat">
                                            <input type="checkbox" id="9A" />
                                            <label for="9A">9A</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="9B" />
                                            <label for="9B">9B</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="9C" />
                                            <label for="9C">9C</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="9D" />
                                            <label for="9D">9D</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="9E" />
                                            <label for="9E">9E</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="9F" />
                                            <label for="9F">9F</label>
                                        </li>
                                    </ol>
                                </li>
                                <li class="row row--10">
                                    <ol class="seats" type="A">
                                        <li class="seat">
                                            <input type="checkbox" id="10A" />
                                            <label for="10A">10A</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="10B" />
                                            <label for="10B">10B</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="10C" />
                                            <label for="10C">10C</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="10D" />
                                            <label for="10D">10D</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="10E" />
                                            <label for="10E">10E</label>
                                        </li>
                                        <li class="seat">
                                            <input type="checkbox" id="10F" />
                                            <label for="10F">10F</label>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                            <div class="exit exit--back fuselage">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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