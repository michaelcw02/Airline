/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.services;

import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import una.airline.bl.UserBL;
import una.airline.domain.User;

/**
 *
 * @author cfuen
 */
public class UserServlet extends HttpServlet {

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

            UserBL userBL = new UserBL();
            User user = new User();
            //Se hace una pausa para ver el modal
            //Thread.sleep(1000);
            //**********************************************************************
            //se toman los datos de la session
            //**********************************************************************
            HttpSession session = request.getSession();
            //**********************************************************************
            //se consulta cual accion se desea realizar
            //**********************************************************************
            String action = request.getParameter("action");
            switch (action) {
                case "getAllUsers":
                    List<User> list = userBL.getAllUsers();
                    json = new Gson().toJson(list);
                    out.print(json);
                    break;
                case "getUserByUsername":
                    String username = request.getParameter("username");
                    json = new Gson().toJson(userBL.getUserByUsername(username));
                    out.print(json);
                    break;
                case "addUser":
                    user.setUsername(request.getParameter("username"));
                    user.setPassword(request.getParameter("password"));
                    user.setName(request.getParameter("name"));
                    user.setLastname1(request.getParameter("lastname1"));
                    user.setLastname2(request.getParameter("lastname2"));
                    user.setEmail(request.getParameter("email"));
                    user.setBirthday(new Date (request.getParameter("birthdate")));
                    user.setAddress(request.getParameter("address"));
                    user.setPhone(request.getParameter("phone"));
                    user.setCelular(request.getParameter("celular"));
                    user.setAdministrator( (1 == Integer.parseInt( request.getParameter("administrator") )) );
                    user.setClient((1 == Integer.parseInt( request.getParameter("client") )) );
                    userBL.addUser(user);
                    out.print("{\"response\":\"C~El usuario fue ingresado correctamente\"}");
                    break;
                case "updateUser":
                    user.setUsername(request.getParameter("username"));
                    user.setPassword(request.getParameter("password"));
                    user.setName(request.getParameter("name"));
                    user.setLastname1(request.getParameter("lastname1"));
                    user.setLastname2(request.getParameter("lastname2"));
                    user.setEmail(request.getParameter("email"));
                    user.setBirthday(new Date (request.getParameter("birthdate")));
                    user.setAddress(request.getParameter("address"));
                    user.setPhone(request.getParameter("phone"));
                    user.setCelular(request.getParameter("celular"));
                    userBL.updateUser(user);
                    out.print("{\"data\":\"C~El usuario fue modificado correctamente\"}");
                    break;
                case "deleteUser":
                    user.setUsername(request.getParameter("username"));
                    userBL.deleteUser(user);
                    out.print("{\"data\": \"C~El usuario fue eliminado \"}");
                    break;
                case "userLogin":
                    username = request.getParameter("username");
                    String password = request.getParameter("password");
                    
                    String type = userBL.validateUser(username, password);
                    String[] separated = type.split("~");
                    type = separated[0];
                    String name = separated[1];
                    json = "{}";
                    if(!type.equals("Not A User")) {
                        session.setAttribute("user", name);
                        session.setAttribute("type", type);
                        session.setAttribute("username", username);
                        session.setAttribute("loginStatus", "logged.");
                        json = "{\"response\":\"C~The user has been validated successfully\"}";
                    }
                    out.print(json);
                    break;
                case "userLogout":
                    //DELETE ALL EXISTING ATTRIBUTES 
                    session.removeAttribute("user");
                    session.removeAttribute("Reservation");
                    session.removeAttribute("outPassengerList");
                    session.removeAttribute("inPassengerList");
                    session.setAttribute("loginStatus", "Not logged.");                    
                    session.invalidate();
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
