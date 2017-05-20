/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import una.airline.domain.Trip;

/**
 *
 * @author michaelcw02
 */
public class TripDAO extends BaseDAO {
    public TripDAO() {
        super();
    }
 
    public void addTrip(Trip trip) throws Exception {
        String query = "INSERT INTO `airlinedb`.`trip` (`distance`, `duration`, `departure_city`, `arrival_city`) VALUES ('%d', '%d', '%s', '%s');";
        query = String.format(query, trip.getDistance(), trip.getDuration(), trip.getCityByArrivalCity().getCode(), trip.getCityByDepartureCity().getCode());
        System.out.println(query);
        int result = connection.executeUpdate(query);
        if (result == 0) {
            throw new Exception("City already exists.");
        }
    }
    public LinkedList<Trip> getAllTrips() {
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
    public Trip getTripByCode(int code) throws Exception {
        String query = "SELECT * FROM TRIP WHERE ID_TRIP = '%d';";
        query = String.format(query, code);
        ResultSet rs = connection.executeQuery(query);
        if(rs.next())
            return trip(rs);
        throw new Exception("E~Trip does not exists");
    }
    public LinkedList<Trip> getTripByCityFrom(String code) throws Exception{
        LinkedList<Trip> listaResultado = new LinkedList<>();
        try {
            String query = "SELECT * FROM Trip WHERE departure_city = '%s'";
            query = String.format(query, code);
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listaResultado.add(trip(rs));
            }
        } catch (SQLException ex) {
        }
        return listaResultado;
    }
    public LinkedList<Trip> getTripByCityFromTo(String codeCityFrom, String codeCityTo) throws Exception{
        LinkedList<Trip> listaResultado = new LinkedList<>();
        try {
            String query = "SELECT * FROM Trip WHERE departure_city = '%s' AND arrival_city = '%s'";
            query = String.format(query, codeCityFrom, codeCityTo);
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listaResultado.add(trip(rs));
            }
        } catch (SQLException ex) {
            throw new Exception("E~Trip does not exists");
        }
        return listaResultado;
    }

}
