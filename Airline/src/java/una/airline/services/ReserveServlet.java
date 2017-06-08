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
import una.airline.bl.ReserveBL;
import una.airline.bl.SeatsBL;
import una.airline.bl.TicketsBL;
import una.airline.bl.UserBL;
import una.airline.domain.Passenger;
import una.airline.domain.Reserve;
import una.airline.domain.RoundTripInfo;
import una.airline.domain.Seat;
import una.airline.domain.SeatID;
import una.airline.domain.Ticket;
import una.airline.domain.User;

/**
 *
 * @author michaelcw02
 */
public class ReserveServlet extends HttpServlet {

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

            ReserveBL reserveBL = new ReserveBL();

            HttpSession session = request.getSession();

            String action = request.getParameter("action");
            switch (action) {
                case "addPassenger":
                    String passport = request.getParameter("passport");
                    String name = request.getParameter("name");
                    String lastname = request.getParameter("lastname");
                    Reserve reserve = (Reserve) session.getAttribute("Reservation");
                    Passenger passenger = null;

                    if (session.getAttribute("OutboundReservation") != null) {
                        LinkedList<Passenger> outPassengerList = (LinkedList<Passenger>) session.getAttribute("outPassengerList");
                        if (outPassengerList == null) {
                            outPassengerList = new LinkedList<>();
                        }
                        Ticket outboundTicket = reserve.getOutboundTicket();
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
                            Ticket returnTicket = reserve.getReturnTicket();
                            passenger = new PassengerBL().createPassenger(passport, name, lastname, returnTicket);
                            isRepeated = checkIsRepeated(inPassengerList, passenger);
                            if (isRepeated) {
                                json = "{\"response\":\"E~Repeated Passenger!\"}";
                                out.print(json);
                                break;
                            }
                            inPassengerList.add(passenger);
                            session.setAttribute("inPassengerList", inPassengerList);
                        }
                        json = "{\"response\":\"S~Passenger Added!\"}";
                        out.print(json);
                        break;
                    } else {
                        response.sendRedirect("index.jsp");
                        break;
                    }
                case "getPassengerList":
                    if(session.getAttribute("OutboundReservation") != null) {
                        LinkedList<Passenger> outPassengerList = (LinkedList<Passenger>) session.getAttribute("outPassengerList");
                        if(outPassengerList != null) {
                            json = new Gson().toJson(outPassengerList);
                        } else {
                            json = "{\"response\":\"E~No passenger found!\"}";
                        }
                        out.print(json);
                        break;
                    } else {
                        response.sendRedirect("index.jsp");
                        break;
                    }
                case "getSeatsOfFlight":
                    String flightNum = request.getParameter("flightNum");
                    if(session.getAttribute("OutboundReservation") != null) {
                        json = new Gson().toJson( new SeatsBL().getAllOccupiedSeatsOfFlight(flightNum) );
                        out.print(json);
                        break;
                    } else {
                        response.sendRedirect("index.jsp");
                        break;
                    }                    
                case "addPassengerSeat":
                    if(session.getAttribute("OutboundReservation") != null) {
                        String mode = request.getParameter("mode");
                        flightNum = request.getParameter("flightNum");
                        String seatNum = request.getParameter("seatID");
                        int index = Integer.parseInt(request.getParameter("index"));
                        reserve = (Reserve) session.getAttribute("Reservation");
                        json = "";
                        if(mode.equals("OUTBOUND")) {
                            Ticket outboundTicket = reserve.getOutboundTicket();
                            if(outboundTicket.getFlight().getFlightNum().equalsIgnoreCase(flightNum)) {
                                LinkedList<Passenger> outPassengerList = (LinkedList<Passenger>) session.getAttribute("outPassengerList");
                                if(outPassengerList != null) {
                                    Passenger p = outPassengerList.get(index);
                                    SeatID seatID = new SeatID(seatNum, flightNum);
                                    Seat seat = new SeatsBL().getSeatByID(seatID);
                                    p.setSeat(seat.getId().getSeatNumber());
                                    seat.setPassenger(p);
                                    outPassengerList.set(index, p);
                                    json = "{\"response\":\"S~Seat assigned successfully!\"}";
                                } else {
                                    json = "{\"response\":\"E~You have to add the passengers first!\"}";
                                }
                            } else {
                                json = "{\"response\":\"CE~Internal Error!\"}";
                            }
                        }
                        if(mode.equals("RETURN")) {
                            Ticket returnTicket = reserve.getReturnTicket();
                            if(returnTicket.getFlight().getFlightNum().equalsIgnoreCase(flightNum)) {
                                LinkedList<Passenger> inPassengerList = (LinkedList<Passenger>) session.getAttribute("inPassengerList");
                                if(inPassengerList != null) {
                                    Passenger p = inPassengerList.get(index);
                                    SeatID seatID = new SeatID(seatNum, flightNum);
                                    Seat seat = new SeatsBL().getSeatByID(seatID);
                                    p.setSeat(seat.getId().getSeatNumber());
                                    inPassengerList.set(index, p);
                                    json = "{\"response\":\"S~Seat assigned successfully!\"}";
                                } else {
                                    json = "{\"response\":\"E~You have to add the passengers first!\"}";
                                }
                            } else {
                                json = "{\"response\":\"CE~Internal Error!\"}";
                            }
                        }
                        out.print(json);
                        break;
                    } else {
                        response.sendRedirect("index.jsp");
                        break;
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
