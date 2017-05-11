/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.sql.ResultSet;
import java.util.LinkedList;
import una.airline.domain.Trip;

/**
 *
 * @author micha
 */
public class TripDAO extends BaseDAO {
    public TripDAO() {
        super();
    }
    
    
    public LinkedList<Trip> getAllFlights() {
        LinkedList<Trip> listaResultado = new LinkedList<>();
        try {
            String query = "SELECT * FROM Trip;";
            query = String.format(query);
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listaResultado.add(trip(rs));
            }
        } catch (Exception e) {
        }
        return listaResultado;
    }

    public void addCity(Trip trip) throws Exception {
        String query = "INSERT INTO `airlinedb`.`trip` (`code`, `name`, `country`) VALUES ('%s', '%s', '%s');";
        query = String.format(query, trip.getCityFrom(), trip.getCityTo(), trip.getDuration());
        System.out.println(query);
        int result = connection.executeUpdate(query);
        if (result == 0) {
            throw new Exception("City already exists.");
        }
    }
}
