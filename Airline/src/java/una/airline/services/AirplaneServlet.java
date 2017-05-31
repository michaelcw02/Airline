/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.services;

import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import una.airline.bl.AirplaneBL;
import una.airline.bl.TypeAirplaneBL;
import una.airline.domain.Airplane;
import una.airline.domain.User;

/**
 *
 * @author cfuen
 */
public class AirplaneServlet extends HttpServlet {

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
            Airplane ta = new Airplane();
            AirplaneBL AirBL = new AirplaneBL();
            TypeAirplaneBL typeAirBL = new TypeAirplaneBL();

            String action = request.getParameter("action");
            switch (action) {
                case "findAirplane":
                    String airplane = request.getParameter("id_airplane");
                    json = new Gson().toJson(AirBL.findAirplaneByID(airplane));
                    out.print(json);
                    break;
                case "getAllAirplane":
                    List<Airplane> list = AirBL.getAllAirplane();
                    json = new Gson().toJson(list);
                    out.print(json);
                    break;
                case "updateAirplane":
                    ta.setIdAirplane(request.getParameter("id_airplane"));
                    String typeAirplane = request.getParameter("type_airplane");
                    ta.setTypeAirplane(typeAirBL.findTypeAirplaneByType(typeAirplane));
                    AirBL.updateAirplane(ta);
                    out.print("{\"data\":\"C~El avion fue modificado correctamente\"}");
                    break;
                case "addAirplane":
                    ta.setIdAirplane(request.getParameter("id_airplane"));
                    String tAirplane = request.getParameter("type_airplane");
                    ta.setTypeAirplane(typeAirBL.findTypeAirplaneByType(tAirplane));
                    AirBL.addAirplane(ta);
                    out.print("{\"data\":\"C~El avion fue ingresado correctamente\"}");
                    break;
                case "deleteAirplane":
                    ta.setIdAirplane(request.getParameter("id_airplane"));
                    AirBL.deleteAirplane(ta);
                    out.print("{\"data\": \"C~El avion fue eliminado \"}");
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
