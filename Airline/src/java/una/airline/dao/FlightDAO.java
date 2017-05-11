/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.sql.ResultSet;
import java.util.LinkedList;
import una.airline.domain.Flight;

/**
 *
 * @author micha
 */
public class FlightDAO extends BaseDAO {
    public FlightDAO() {
        super();
    }
    
    public LinkedList<Flight> getAllFlights() {
        LinkedList<Flight> listaResultado = new LinkedList<>();
        try {
            String query = "SELECT * FROM City;";
            query = String.format(query);
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listaResultado.add(flight(rs));
            }
        } catch (Exception e) {
        }
        return listaResultado;
    }

    public void addCity(Flight flight) throws Exception {
        String query = "INSERT INTO `airlinedb`.`flight` (`code`, `name`, `country`) VALUES ('%s', '%s', '%s');";
        query = String.format(query, flight.getCode(), flight.getTrip(), flight.getDepartureDate());
        System.out.println(query);
        int result = connection.executeUpdate(query);
        if (result == 0) {
            throw new Exception("City already exists.");
        }
    }
    
}
