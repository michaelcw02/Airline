/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.tests;

import com.google.gson.Gson;
import java.util.Date;
import java.util.LinkedList;
import una.airline.bl.*;
import una.airline.dao.*;
import una.airline.domain.*;

/**
 *
 * @author michaelcw02
 */
public class TestDAO {
    
    
    public static void main(String[] arg) throws Exception {
        
        SeatDAO seatDAO = new SeatDAO();
        LinkedList<Seat> resulta = seatDAO.getAllSeats();
        System.out.println(resulta);
        
        //TEST PASSED
        TicketsBL ticketsBL = new TicketsBL();
        RoundTripInfo<Ticket> result = ticketsBL.reserveTickets("michaelcw02", "ST003", null, 1);
        System.out.println("doNE");
        ticketsBL = new TicketsBL();
        String json = new Gson().toJson(ticketsBL.reserveTickets("michaelcw02", "ST003", "ST007", 1));
        System.out.println("doNE");
        
        
        UserDAO userDAO = new UserDAO();
        User u = userDAO.validateUser("1", "1");
        System.out.println(u.getUsername());
     
        
    }
    
}
