/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.List;
import java.util.stream.Collectors;
import una.airline.domain.AirlineModel;
import una.airline.domain.City;
import una.airline.domain.Flight;
import una.airline.domain.RoundTripFlights;

/**
 *
 * @author michaelcw02
 */
public class FlightsBL {

    public FlightsBL() {
        this.airlineModel = AirlineModel.getInstance();
        this.flights = airlineModel.getFlights();
    }

    public List<Flight> getFlights() {
        return airlineModel.getFlights();
    }
    
    public RoundTripFlights searchFlights(String cityFrom, String cityTo, String departDate, String returnDate) {
        RoundTripFlights roundTripFlights = new RoundTripFlights();
        List<Flight> outbound;
        
        //Searches for the outbound flights...
        outbound = searchOneWayFlights(cityFrom, cityTo, departDate);
        roundTripFlights.setOutboundFlights(outbound);
        
        //if there is a 'returnDate', is a ROUND TRIP
        if( returnDate != null ){
            //If there is no 'cityTo', is NOT a ROUND TRIP
            List<Flight> returnFlights;
            if(!"All".equalsIgnoreCase(cityTo)) {
                returnFlights = searchOneWayFlights(cityFrom, cityTo, returnDate);
                roundTripFlights.setReturnFlights(returnFlights);
            }
        }
        //if there is no 'returnDate', is ONE WAY TRIPs
        return roundTripFlights;
    }
    
    
    public List<Flight> searchOneWayFlights(String cityFrom, String cityTo, String departDate) {
        List<Flight> results = getFlights();

        if (!"All".equals(cityFrom)) {
            if("All".equals(cityTo)) {
                results = findFlightsFrom(results, cityFrom);
            } else {
                results = findFlightsFromTo(results, cityFrom, cityTo);
            }
        }
        
        return results;
    }
    
    public List<Flight> findFlightsFrom(List<Flight> flights, String cityCode) {
        List<Flight> results = flights.stream().filter(
                flight -> flight.getTrip().getCityFrom().getCode().equalsIgnoreCase(cityCode)
            ).collect(Collectors.toList());
        return results;
    }
    public List<Flight> findFlightsFromTo(List<Flight> flights, String cityFrom, String cityTo) {
        List<Flight> results = flights.stream().filter(
                flight -> ( flight.getTrip().getCityFrom().getCode().equalsIgnoreCase(cityFrom) && flight.getTrip().getCityTo().getCode().equalsIgnoreCase(cityTo) ) 
            ).collect(Collectors.toList());
        return results;
    }

    AirlineModel airlineModel;
    List<Flight> flights;

}
