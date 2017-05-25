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
import una.airline.bl.TypeAirplaneBL;
import una.airline.domain.TypeAirplane;

/**
 *
 * @author Fabiana
 */
public class TypeAirplaneServlet extends HttpServlet {

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
            TypeAirplane ta = new TypeAirplane();
            TypeAirplaneBL typeAirBL = new TypeAirplaneBL();

            String action = request.getParameter("action");
            switch (action) {
                case "findTypeAirplane":
                    String type_airline = request.getParameter("type_airline");
                    json = new Gson().toJson(typeAirBL.findTypeAirplaneByType(type_airline));
                    out.print(json);
                    break;
                case "getAllTypeAirplane":
                    json = new Gson().toJson(typeAirBL.getAllTypeAirplane());
                    out.print(json);
                    break;
                case "addTypeAirplane":
                    ta.setTypeAirline(request.getParameter("type_airline"));
                    ta.setYear(request.getParameter("year"));
                    ta.setBrand(request.getParameter("brand"));
                    ta.setQtyOfRows(Integer.parseInt(request.getParameter("qty_of_rows")));
                    ta.setSeatsPerRow(Integer.parseInt(request.getParameter("seats_per_row")));
                    ta.calculateQtyOfSeats();
                    typeAirBL.addTypeAirplane(ta);
                    out.print("{\"data\":\"C~El tipo de avion fue ingresado correctamente\"}");
                    break;
                case "updateTypeAirplane":
                    ta.setTypeAirline(request.getParameter("type_airline"));
                    ta.setYear(request.getParameter("year"));
                    ta.setBrand(request.getParameter("brand"));
                    ta.setQtyOfSeats(Integer.parseInt(request.getParameter("qty_of_seats")));
                    ta.setQtyOfRows(Integer.parseInt(request.getParameter("qty_of_rows")));
                    ta.setSeatsPerRow(Integer.parseInt(request.getParameter("seats_per_row")));
                    typeAirBL.updateTypeAirplane(ta);
                    break;
                case "deleteTypeAirplane":
                    ta.setTypeAirline(request.getParameter("type_airline"));
                    typeAirBL.deleteTypeAirplane(ta);
                    out.print("{\"data\": \"C~La persona fue eliminada correctamente\"}");
                    break;
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
