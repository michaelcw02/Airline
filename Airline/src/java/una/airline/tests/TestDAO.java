/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.tests;

import com.google.gson.Gson;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import una.airline.bl.*;
import una.airline.dao.*;
import una.airline.domain.*;

/**
 *
 * @author michaelcw02
 */
public class TestDAO {
    
    
    public static void main(String[] arg) throws Exception {
        
        
       
        
       /* FlightsBL flightBL = new FlightsBL();
        List<Flight> r = flightBL.getAllFlights();
        System.out.println(r.get(0));
        System.out.println(r.get(0));
        
        List<String> result = flightBL.findAirplaneSeatsInfoByFlightNum("STEST");
        System.out.println(result);
        
        
        Airplane airplane = new AirplaneBL().findAirplaneByID("ASA-054");
        Trip trip = new TripsBL().getTripByCode(18);
        DateFormat df = new SimpleDateFormat("MM/dd/yyyy"); 
        Date startDate = df.parse("07/04/2017");
        
        
        int lala = flightBL.addFlight(new Flight("STEST", airplane, trip, startDate, 80));
        System.out.println(lala);
        
        UserDAO userDAO = new UserDAO();
        User u = userDAO.validateUser("1", "1");
        System.out.println(u.getUsername());*/
     
        TicketsBL ti =new TicketsBL();
        List<Ticket> r1 = ti.getTicketsByFlight("ST001");
        System.out.println(r1.get(0).getNumber());
                }
    
}
