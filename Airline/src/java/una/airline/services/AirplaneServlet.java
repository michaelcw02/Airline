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
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import una.airline.bl.AirplaneBL;
import una.airline.domain.Airplane;

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
            AirplaneBL typeAirBL = new AirplaneBL();

            String action = request.getParameter("action");
            switch (action) {
                case "findAirplane":
                    String airplane = request.getParameter("id_airplane");
                    json = new Gson().toJson(typeAirBL.findAirplaneByID(airplane));
                    out.print(json);
                    break;
                case "getAllAirplane":
                    json = new Gson().toJson(typeAirBL.getAllAirplane());
                    out.print(json);
                    break;
//                case "addAirplane":
//                    ta.setIdAirplane(request.getParameter("identifier"));
//                    ta.setTypeAirplane(request.getParameter("type_airplane"));
//                    out.print(ta.getIdAirplane());
//                    typeAirBL.addTypeAirplane(ta);
//                    out.print("C~El tipo de avion fue ingresado correctamente");
//                    break;
//                default:
//                    out.print("E~No se indico la acción que se desea realizare");
//                    break;
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
