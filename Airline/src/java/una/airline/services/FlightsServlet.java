/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.services;

import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import una.airline.bl.FlightsBL;
import una.airline.domain.Flight;

/**
 *
 * @author michaelcw02
 */
public class FlightsServlet extends HttpServlet {

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

            FlightsBL flightsBL = new FlightsBL();

            HttpSession session = request.getSession();

            String action = request.getParameter("action");
            switch (action) {
                case "getAllFlights":
                    json = new Gson().toJson(flightsBL.getAllFlights());
                    out.print(json);
                    break;
                case "searchFlights":
                    cityFrom = request.getParameter("cityFrom");
                    cityTo = request.getParameter("cityTo");
                    departDate = request.getParameter("departDate");
                    returnDate = request.getParameter("returnDate");
                    String mode = "OneWayReservation";
                    if(returnDate != null) {
                        mode = "RoundTripReservation";
                    }
                    session.setAttribute("ReservationMode", mode);
                    
                    json = new Gson().toJson(flightsBL.searchFlights(cityFrom, cityTo, departDate, returnDate));
                    out.print(json);

                    break;
                case "searchFlightByNum":
                    flightNum = request.getParameter("flightNum");
                    json = new Gson().toJson(flightsBL.searchFlightByNum(flightNum));
                    out.print(json);
                    resetVariables();
                    break;
                case "reserveFlight":
                    flightNum = request.getParameter("flightNum");
                    mode = request.getParameter("mode");    // Outbound || Return
                    session.setAttribute(mode + "Reservation", flightNum);
                    
                    json = "{\"response\":\"S~" + mode + " Selected!\"}";
                    out.print(json);

                    resetVariables();
                    break;
                default:
                    out.print("{'response':'E~Did not receive any action'");
                    break;
            }

        } catch (NumberFormatException e) {
            out.print("E~" + e.getMessage());
        } catch (Exception e) {
            out.print("E~" + e.getMessage());
        }

    }

    private void resetVariables() {
        cityFrom = null;
        cityTo = null;
        departDate = null;
        returnDate = null;
        flightNum = null;
        mode = null;
    }
    String cityFrom;
    String cityTo;
    String departDate;
    String returnDate;
    String flightNum;
    String mode;

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
