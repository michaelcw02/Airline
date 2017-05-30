/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.services;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import una.airline.bl.FlightsBL;
import una.airline.bl.TicketsBL;
import una.airline.dao.TicketDAO;
import una.airline.domain.Flight;

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
                    String username = (String) session.getAttribute("username");
                    String status = (String) session.getAttribute("loginStatus");
                    
                    String mode = (String) session.getAttribute("mode");
                    
                    String outboundReservation = (String) session.getAttribute("OurboundReservation");
                    String returnReservation = null;
                    
                    int numPassengers = (int) session.getAttribute("numPassengers");
                    
                    json = "";
                    
                    FlightsBL flightsBL = new FlightsBL();
                    
                    if(username != null && status.equalsIgnoreCase("logged.")) {
                        if(outboundReservation == null) {
                            json = "{\"response\":\"E~You did not select a flight!\"}";
                            out.print(json);
                            break;
                        }
                        //SUCCESS FOR ONE WAY
                        if(mode.equalsIgnoreCase("RoundTrip")) {
                            returnReservation = (String) session.getAttribute("ReturnReservation");
                            if(returnReservation == null) {
                                json = "{\"response\":\"E~You did not select a flight!\"}";
                                out.print(json);
                                break;
                            }
                            //SUCCESS FOR ROUND TRIPS
                            ticketsBL.reserveTickets(username, outboundReservation, returnReservation, numPassengers);
                            
                            
                        }
                        
                        
                    } else {
                        json = "{\"response\":\"E~You are not logged!\"}";
                        out.print(json);
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
