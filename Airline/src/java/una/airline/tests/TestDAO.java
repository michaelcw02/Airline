/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.tests;

import java.util.Date;
import una.airline.dao.*;
import una.airline.domain.*;

/**
 *
 * @author michaelcw02
 */
public class TestDAO {
    
    
    public static void main(String[] arg) throws Exception {
        
        UserDAO userDAO = new UserDAO();
        User u = userDAO.validateUser("1", "1");
        System.out.println(u.getUsername());
        
    }
    
}
