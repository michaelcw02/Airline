/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import static com.sun.xml.bind.util.CalendarConv.formatter;
import java.util.Date;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import una.airline.dao.AirplaneDAO;
import una.airline.dao.FlightDAO;
import una.airline.dao.SeatDAO;
import una.airline.dao.TripDAO;
import una.airline.domain.Airplane;
import una.airline.domain.Flight;
import una.airline.domain.RoundTripFlights;
import una.airline.domain.Seat;
import una.airline.domain.SeatID;
import una.airline.domain.Trip;
import una.airline.domain.TypeAirplane;

/**
 *
 * @author michaelcw02
 */
public class FlightsBL {

    FlightDAO flightDAO;

    public FlightsBL() {
        flightDAO = new FlightDAO();
    }

    public int addFlight(Flight flight) {
        int result = flightDAO.addFlight(flight);
        if (result == 1) {
            result = this.addSeatsOfFlight(flight);
        }
        return result;
    }

    public void generateFlights(long[] dates, String num, int tripCode, String airpID) throws Exception {
        Trip trip = new TripDAO().getTripByCode(tripCode);
        Airplane airplane = new AirplaneDAO().findAirplaneByID(airpID);
        TypeAirplane typeAirplane = airplane.getTypeAirplane();
        int seats = typeAirplane.getQtyOfSeats();
        for (int i = 0; i <= dates.length; i++) {
            String idTrip = num + i;
            Date date=new Date(dates[i]); 
            Flight flight = new Flight(idTrip, airplane, trip,date, seats);
            this.addFlight(flight);
        }
    }

    public int addSeatsOfFlight(Flight flight) {
        int result = 0;
        TypeAirplane typeAirplane = flight.getAirplane().getTypeAirplane();
        SeatDAO seatDAO = new SeatDAO();
        for (int i = 1; i <= typeAirplane.getQtyOfRows(); i++) {
            for (int j = 0; j < typeAirplane.getSeatsPerRow(); j++) {
                Character a = (char) (65 + j);
                String seatNum = i + a.toString();
                try {
                    seatDAO.addSeatWithoutPassenger(new Seat(new SeatID(seatNum, flight.getFlightNum()), flight));
                } catch (Exception ex) {
                    return 0;
                }
            }
        }
        return result;
    }

    public List<Flight> getAllFlights() {
        return flightDAO.getAllFlights();
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

    public List<Flight> searchOneWayFlights(String cityFrom, String cityTo, String departDate) {
        List<Flight> results = null;

        if (!"All".equalsIgnoreCase(cityFrom)) {
            if (!"All".equalsIgnoreCase(cityTo)) {
                //GET ALL FLIGHTS FROM CITY & TO CITY
                if (departDate != null) {
                    results = flightDAO.findFlightByCityFromCityToNDate(cityFrom, cityTo, departDate);
                    return results;
                } else {
                    results = flightDAO.findFlightByCityFromCityTo(cityFrom, cityTo);
                    return results;
                }
            } else {
                //GET ALL FLIGHTS FROM CITY
                if (departDate != null) {
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

    public Flight searchFlightByNum(String flightNum) {
        return flightDAO.findByID(flightNum);
    }

}
