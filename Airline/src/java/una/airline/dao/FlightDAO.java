/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.sql.ResultSet;
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

    public void addFlight(Flight flight) throws Exception {
        String query = "INSERT INTO `airlinedb`.`flight` "
                + "(`flight_num`, `id_airplane`, `id_trip`, `cost`, `departure_date`, `available_seats`, `discount`, `discount_description`, `discount_image_path`) "
                + "VALUES ('%s', '%d', '%d', '%d', '%d', '%s', '%d', '%s', '%s');";
        query = String.format(query, flight.getFlightNum(),
                flight.getAirplane().getIdAirplane(),
                flight.getTrip().getIdTrip(),   
                flight.getCost(),
                dateToSQL(flight.getDepartureDate()),
                flight.getAvailableSeats(),
                flight.getDiscount(),
                flight.getDiscountDescription(),
                flight.getDiscountImagePath());
        System.out.println(query);
        int result = connection.executeUpdate(query);
        if (result == 0) {
            throw new Exception("Flight already exists.");
        }

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
    
    public List<Flight> findByID(String flightNum) {
        List<Flight> listResult = new LinkedList<>();
        try {
            String query = "SELECT FROM flight WHERE flight_num = %s;";
            String.format(query, flightNum);
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listResult.add(flight(rs));
            }
        } catch (Exception e) {
            return null;
        }
        return listResult;
    }

    public List<Flight> findFlightByCityFromCityTo(String cityFrom, String cityTo) {
        List<Flight> listFlights = new LinkedList<>();
        try {
            String query = "SELECT * "
                    + "FROM FLIGHT, (SELECT ID_TRIP AS TRIP FROM TRIP WHERE DEPARTURE_CITY = %d AND ARRIVAL_CITY = %d)alias1  "
                    + "WHERE FLIGHT.ID_TRIP = TRIP";
            String.format(query, cityFrom, cityTo);
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listFlights.add(flight(rs));
            }
        } catch (Exception e) {
            return null;
        }
        return listFlights;
    }

    public List<Flight> findDiscounts() {
        List<Flight> listResult = new LinkedList<>();
        try {
            String query = "SELECT * FROM FLIGHT WHERE DISCOUNT <> '0';";
            ResultSet rs = connection.executeQuery(query);
            while(rs.next()) {
                listResult.add((flight(rs)));
            }
        } catch(Exception e) {
            return null;
        }
        return listResult;
    }
}
