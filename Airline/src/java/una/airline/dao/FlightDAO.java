/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.sql.ResultSet;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import una.airline.domain.Flight;

/**
 *
 * @author michaelcw02
 */
public class FlightDAO extends BaseDAO {

    public FlightDAO() {
        super();
    }

    public int addFlight(Flight flight) {
        String query = "INSERT INTO `airlinedb`.`flight` "
                + "(`flight_num`, `id_airplane`, `id_trip`, `departure_date`, `available_seats`) "
                + "VALUES ('%s', '%s', '%d', '%s', %d);";
        query = String.format(query, flight.getFlightNum(),
                flight.getAirplane().getIdAirplane(),
                flight.getTrip().getIdTrip(),
                dateToSQL(flight.getDepartureDate()),
                flight.getAvailableSeats());
        System.out.println(query);
        return connection.executeUpdate(query);
    }

    public LinkedList<Flight> getAllFlights() {
        LinkedList<Flight> listaResultado = new LinkedList<>();
        try {
            String query = "SELECT * FROM flight;";
            query = String.format(query);
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listaResultado.add(flight(rs));
            }
        } catch (Exception e) {
        }
        return listaResultado;
    }
    
    public Flight findByID(String flightNum) {
        try {
            String query = "SELECT * FROM flight WHERE flight_num = '%s';";
            query = String.format(query, flightNum);
            ResultSet rs = connection.executeQuery(query);
            if (rs.next()) {
                return flight(rs);
            }
        } catch (Exception e) {
        }
        return null;
    }

    public List<Flight> findFlightByCityFromCityTo(String cityFrom, String cityTo) {
        List<Flight> listFlights = new LinkedList<>();
        try {
            String query = "SELECT * "
                    + "FROM FLIGHT, (SELECT ID_TRIP AS TRIP FROM TRIP WHERE DEPARTURE_CITY = '%s' AND ARRIVAL_CITY = '%s')alias1  "
                    + "WHERE FLIGHT.ID_TRIP = TRIP";
            query = String.format(query, cityFrom, cityTo);
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listFlights.add(flight(rs));
            }
        } catch (Exception e) {
            return null;
        }
        return listFlights;
    }
    public List<Flight> findFlightByCityFromCityToNDate(String cityFrom, String cityTo, String departDate) {
        List<Flight> listFlights = new LinkedList<>();
        try {
            String query = "SELECT * "
                    + "FROM FLIGHT, (SELECT ID_TRIP AS TRIP FROM TRIP WHERE DEPARTURE_CITY = '%s' AND ARRIVAL_CITY = '%s')alias1  "
                    + "WHERE FLIGHT.ID_TRIP = TRIP AND DEPARTURE_DATE = '%s'";
            query = String.format(query, cityFrom, cityTo, departDate);
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listFlights.add(flight(rs));
            }
        } catch (Exception e) {
            return null;
        }
        return listFlights;
    }
    
    public List<Flight> findFlightByCityFrom(String cityFrom) {
        List<Flight> listFlights = new LinkedList<>();
        try {
            String query = "SELECT * "
                    + "FROM airlinedb.FLIGHT, (SELECT ID_TRIP AS TRIP FROM airlinedb.TRIP WHERE DEPARTURE_CITY = '%s')alias1 "
                    + "WHERE FLIGHT.ID_TRIP = TRIP";
            query = String.format(query, cityFrom);
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listFlights.add(flight(rs));
            }
        } catch (Exception e) {
            return null;
        }
        return listFlights;
    }
    
    public List<Flight> findFlightByCityFromNDate(String cityFrom, String departDate) {
        List<Flight> listFlights = new LinkedList<>();
        try {
            String query = "SELECT * "
                    + "FROM FLIGHT, (SELECT ID_TRIP AS TRIP FROM TRIP WHERE DEPARTURE_CITY = '%s')alias1 "
                    + "WHERE FLIGHT.ID_TRIP = TRIP AND DEPARTURE_DATE = '%s'";
            query = String.format(query, cityFrom, departDate);
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listFlights.add(flight(rs));
            }
        } catch (Exception e) {
            return null;
        }
        return listFlights;
    }

}
