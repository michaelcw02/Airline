/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.List;
import una.airline.dao.FlightDAO;
import una.airline.domain.Flight;

/**
 *
 * @author michaelcw02
 */
public class FlightsBL {
    
    FlightDAO flightDAO;

    public FlightsBL() {
        flightDAO = new FlightDAO();
    }
    
    public List<Flight> getAllFlights() {
        return flightDAO.getAllFlights();
    }
    
    public List<Flight> findDiscounts() {
        return flightDAO.findDiscounts();
    }
    
}
