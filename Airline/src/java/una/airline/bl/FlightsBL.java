/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.List;
import una.airline.dao.FlightDAO;
import una.airline.domain.Flight;
import una.airline.domain.RoundTripFlights;

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

    public RoundTripFlights searchFlights(String cityFrom, String cityTo, String departDate, String returnDate) {
        RoundTripFlights roundTripFlights = new RoundTripFlights();
        List<Flight> outbound;

        //Searches for the outbound flights...
        outbound = searchOneWayFlights(cityFrom, cityTo, departDate);
        roundTripFlights.setOutboundFlights(outbound);

        //if there is a 'returnDate', is a ROUND TRIP
        if (returnDate != null) {
            //If there is no 'cityTo', is NOT a ROUND TRIP
            List<Flight> returnFlights;
            if (!"All".equalsIgnoreCase(cityTo)) {
                returnFlights = searchOneWayFlights(cityTo, cityFrom, returnDate);
                roundTripFlights.setReturnFlights(returnFlights);
            }
        }
        //if there is no 'returnDate', is ONE WAY TRIPs
        return roundTripFlights;
    }

    //!!!THIS METHOD HAS TO CHECK THE DATE, IT IS STILL NOT IMPLEMENTED FOR TESTING PURPOSES...
    public List<Flight> searchOneWayFlights(String cityFrom, String cityTo, String departDate) {
        List<Flight> results = null;

        if (!"All".equalsIgnoreCase(cityFrom)) {
            if(!"All".equalsIgnoreCase(cityTo)) {
                //GET ALL FLIGHTS FROM CITY & TO CITY
                if(departDate != null) {
                    results = flightDAO.findFlightByCityFromCityToNDate(cityFrom, cityTo, departDate);
                    return results;                
                } else {
                    results = flightDAO.findFlightByCityFromCityTo(cityFrom, cityTo);
                    return results;
                }                
            } else {
                //GET ALL FLIGHTS FROM CITY
                if(departDate != null) {
                    results = flightDAO.findFlightByCityFromNDate(cityFrom, departDate);
                    return results;                
                } else {
                    results = flightDAO.findFlightByCityFrom(cityFrom);
                    return results;
                }
            }
        }
        return flightDAO.getAllFlights();
    }
    
    
}
