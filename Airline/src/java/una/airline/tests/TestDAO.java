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
    
    
    public static void main(String[] arg) {
        
        
        TypeAirplane ta1 = new TypeAirplane("B777", "2015", "Boeing", 400, 88, 9);
        Airplane ap1 = new Airplane("B001", ta1);
        City c = new City("TES", "TEST", "TESTING");
        Trip t = new Trip(19, c, c, 999, 999);
        Flight f = new Flight("lala1", ap1, t, 999, new Date().getTime(), 350, 5, "yaahs", "yeeeha");
        User u = new User("a", "a", "a", "a", "a", "a", "a", "a", "a", new Date(), true, true);
        Ticket tic = new Ticket(f, u);
        tic.setNumber(3);
        PassengerID pID = new PassengerID("1111", 3);
        Passenger p = new Passenger(pID, tic, "a", "a", "a");
        
        try {
            new TypeAirplaneDAO().addTypeAirplane(ta1);
            new AirplaneDAO().addTypeAirplane(ap1);
            new CityDAO().addCity(c);
            new TripDAO().addTrip(t);
            new FlightDAO().addFlight(f);
            new UserDAO().addUser(u);
            new TicketDAO().addTicket(tic);
            new PassengerDAO().addPassenger(p);
        } catch(Exception e) {
            System.out.println("shit " + e);
        }
        
        //TEST COMPLETE
        
    }
    
}
