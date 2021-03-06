/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.services;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import una.airline.bl.CityBL;
import una.airline.bl.TripsBL;
import una.airline.domain.City;
import una.airline.domain.Trip;

/**
 *
 * @author michaelcw02
 */
public class TripsServlet extends HttpServlet {

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
            Trip trip = new Trip();
            TripsBL tripsBL = new TripsBL();

            //Se hace una pausa para ver el modal
            //Thread.sleep(1000);
            //**********************************************************************
            //se toman los datos de la session
            //**********************************************************************
            //HttpSession session = request.getSession();
            //**********************************************************************
            //se consulta cual accion se desea realizar
            //**********************************************************************
            String action = request.getParameter("action");
            switch (action) {
                case "getAllTrips":
                    json = new Gson().toJson(tripsBL.getAllTrips());
                    out.print(json);
                    break;
                case "getTripByCode":
                    int idTrip = Integer.parseInt(request.getParameter("idTrip"));
                    json = new Gson().toJson(tripsBL.getTripByCode(idTrip));
                    out.print(json);
                    break;
                case "getAllDiscounts":
                    json = new Gson().toJson(tripsBL.findDiscounts());
                    out.print(json);
                    break;
                case "deleteTrip":
                    trip.setIdTrip(Integer.parseInt(request.getParameter("id_trip")));
                    tripsBL.deleteTrip(trip);
                    out.print("{\"data\": \"C~La ruta fue eliminada correctamente\"}");
                    break;
                case "getLastID":
                    json = new Gson().toJson(tripsBL.getLastID());
                    out.print(json);
                    break;
                case "addTrip":
                    int distance = Integer.parseInt(request.getParameter("distance"));
                    int duration = Integer.parseInt(request.getParameter("duration"));
                    String cityFrom = request.getParameter("departureCity");
                    String cityTo = request.getParameter("arrivalCity");
                    int departureTime = Integer.parseInt(request.getParameter("departureTime"));
                    String departureDay = request.getParameter("departureDay");
                    int cost = Integer.parseInt(request.getParameter("cost"));
                    int discount = Integer.parseInt(request.getParameter("discount"));
                    String discountDes = request.getParameter("discountDes");
                    String discountPath = request.getParameter("discountPath");
                    City origin = null;
                    City destination = null;
                    try {
                        CityBL cityBL = new CityBL();
                        origin = cityBL.getCityByCode(cityFrom);
                        destination = cityBL.getCityByCode(cityTo);
                    } catch (Exception e) {
                        out.print("{\"data\":\"E~The cities are not valid!\"}");
                    }
                    trip = new Trip(origin, destination, distance, duration, departureTime, departureDay, cost, discount, discountDes, discountPath);
                    tripsBL.addTrip(trip);
                    out.print("{\"data\":\"C~La ruta fue ingresada correctamente\"}");
                    break;
                case "getTripsFromCity":
                    cityFrom = "";
                    cityFrom = request.getParameter("cityFrom");
                    json = new Gson().toJson(tripsBL.getTripsByCityFrom(cityFrom));
                    out.print(json);
                    break;
                case "updateTrip":
                    int id_trip = Integer.parseInt(request.getParameter("id_trip"));
                    int distance1 = Integer.parseInt(request.getParameter("distance"));
                    int duration1 = Integer.parseInt(request.getParameter("duration"));
                    String cityFrom1 = request.getParameter("departureCity");
                    String cityTo1 = request.getParameter("arrivalCity");
                    int departureTime1 = Integer.parseInt(request.getParameter("departureTime"));
                    String departureDay1 = request.getParameter("departureDay");
                    int cost1 = Integer.parseInt(request.getParameter("cost"));
                    int discount1 = Integer.parseInt(request.getParameter("discount"));
                    String discountDes1 = request.getParameter("discountDes");
                    String discountPath1 = request.getParameter("discountPath");
                    City origin1 = null;
                    City destination1 = null;
                    try {
                        CityBL cityBL = new CityBL();
                        origin1 = cityBL.getCityByCode(cityFrom1);
                        destination1 = cityBL.getCityByCode(cityTo1);
                    } catch (Exception e) {
                        out.print("{\"data\":\"E~The cities are not valid!\"}");
                    }
                    trip = new Trip(id_trip, origin1, destination1, distance1, duration1, departureTime1, departureDay1, cost1, discount1, discountDes1, discountPath1);
                    tripsBL.updateTrip(trip);
                    out.print("{\"data\":\"C~La ruta fue modificada correctamente\"}");
                    break;
                default:
                    out.print("E~No se indico la acción que se desea realizar");
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
