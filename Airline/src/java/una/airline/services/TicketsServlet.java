/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.services;

import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.LinkedList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import una.airline.bl.FlightsBL;
import una.airline.bl.PassengerBL;
import una.airline.bl.TicketsBL;
import una.airline.bl.UserBL;
import una.airline.dao.TicketDAO;
import una.airline.domain.Flight;
import una.airline.domain.Passenger;
import una.airline.domain.RoundTripInfo;
import una.airline.domain.Ticket;
import una.airline.domain.User;

/**
 *
 * @author michaelcw02
 */
public class TicketsServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            //String para guardar el JSON generaro por al libreria GSON
            String json;

            TicketsBL ticketsBL = new TicketsBL();

            HttpSession session = request.getSession();

            String action = request.getParameter("action");
            switch (action) {
                case "confirmReservation":
                    FlightsBL flightsBL = new FlightsBL();

                    String username = (String) session.getAttribute("username");
                    String status = (String) session.getAttribute("loginStatus");
                    String outboundReservation = (String) session.getAttribute("OutboundReservation");
                    String returnReservation = null;    //will be gotten later.

                    String mode = (String) request.getParameter("mode");
                    int numPassengers = Integer.parseInt(request.getParameter("numPassengers"));

                    User user = null;
                    List<Ticket> outList = new LinkedList<>();
                    List<Ticket> inList = new LinkedList<>();
                    Ticket outboundTicket = null;
                    Ticket returnTicket = null;

                    json = "";

                    if (username != null && status.equalsIgnoreCase("logged.")) {
                        user = new UserBL().getUserByUsername(username);
                        if (outboundReservation == null) {
                            json = "{\"response\":\"E~1~Perhaps you forgot to select an outbound flight!\"}";
                            out.print(json);
                            break;
                        }
                        //SUCCESS FOR ONE WAY
                        outboundTicket = new Ticket(new FlightsBL().searchFlightByNum(outboundReservation), user, numPassengers);
                        outList.add(outboundTicket);

                        if (mode.equalsIgnoreCase("RoundTrip")) {
                            returnReservation = (String) session.getAttribute("ReturnReservation");
                            if (returnReservation == null) {
                                json = "{\"response\":\"E~1~Perhaps you forgot to select a return flight!\"}";
                                out.print(json);
                                break;
                            }
                            //SUCCESS FOR ROUND TRIPS
                            returnTicket = new Ticket(new FlightsBL().searchFlightByNum(returnReservation), user, numPassengers);
                            inList.add(returnTicket);
                        }
                        RoundTripInfo<Ticket> roundTickets = new RoundTripInfo<>(outList, inList);

                        //ATTENTION! THIS ATTRIBUTE MUST BE DELETED AFTER LOGOUT!
                        session.setAttribute("TicketsInfo", roundTickets);

                        json = "{\"response\":\"S~Tickets created successfully!\"}";
                        out.print(json);
                        break;
                    } else {
                        json = "{\"response\":\"E~2~Hey! you are not logged in, do it first before buying!\"}";
                        out.print(json);
                        session.removeAttribute("OutboundReservation");
                        session.removeAttribute("ReturnReservation");
                        break;
                    }

                case "getConfirmedReservation":
                    if (session.getAttribute("OutboundReservation") != null) {
                        json = new Gson().toJson((RoundTripInfo<Ticket>) session.getAttribute("TicketsInfo"));
                        out.print(json);
                    } else {
                        response.sendRedirect("index.jsp");
                    }
                    break;
                case "addPassenger":
                    String passport = request.getParameter("passport");
                    String name = request.getParameter("name");
                    String lastname = request.getParameter("lastname");
                    RoundTripInfo<Ticket> roundTickets = (RoundTripInfo<Ticket>) session.getAttribute("TicketsInfo");
                    Passenger passenger = null;

                    if (session.getAttribute("OutboundReservation") != null) {
                        LinkedList<Passenger> outPassengerList = (LinkedList<Passenger>) session.getAttribute("outPassengerList");
                        if (outPassengerList == null) {
                            outPassengerList = new LinkedList<>();
                        }
                        outboundTicket = roundTickets.getOutboundTripInfo().get(0);
                        passenger = new PassengerBL().createPassenger(passport, name, lastname, outboundTicket);
                        boolean isRepeated = checkIsRepeated(outPassengerList, passenger);
                        if (isRepeated) {
                            json = "{\"response\":\"E~Repeated Passenger!\"}";
                            out.print(json);
                            break;
                        }
                        outPassengerList.add(passenger);
                        session.setAttribute("outPassengerList", outPassengerList);
                        if (session.getAttribute("ReturnReservation") != null) {
                            LinkedList<Passenger> inPassengerList = (LinkedList<Passenger>) session.getAttribute("inPassengerList");
                            if (inPassengerList == null) {
                                inPassengerList = new LinkedList<>();
                            }
                            returnTicket = roundTickets.getReturnTripInfo().get(0);
                            passenger = new PassengerBL().createPassenger(passport, name, lastname, returnTicket);
                            isRepeated = checkIsRepeated(inPassengerList, passenger);
                            if (isRepeated) {
                                json = "{\"response\":\"E~Repeated Passenger!\"}";
                                out.print(json);
                                break;
                            }
                            outPassengerList.add(passenger);
                            session.setAttribute("inPassengerList", outPassengerList);
                        }
                        json = "{\"response\":\"E~Passenger Added!\"}";
                        out.print(json);
                        break;
                    } else {
                        response.sendRedirect("index.jsp");
                    }

                default:
                    out.print("E~No se indico la acción que se desea realizare");
                    break;
            }

        } catch (NumberFormatException e) {
            out.print("E~" + e.getMessage());
        } catch (Exception e) {
            out.print("E~" + e.getMessage());
        }
    }

    private boolean checkIsRepeated(List<Passenger> list, Passenger pass) {
        return list.stream().anyMatch(p -> p.getID().equals(pass.getID()));
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
