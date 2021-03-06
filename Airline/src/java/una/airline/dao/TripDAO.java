/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
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
        String query = "INSERT INTO `airlinedb`.`trip` (`distance`, `duration`, `departure_city`, `arrival_city`, `departure_time`, `departure_day`, `cost`, `discount`, `discount_description`, `discount_image_path`) VALUES ('%d', '%d', '%s', '%s', '%d', '%s', '%d', '%d', '%s', '%s');";
        query = String.format(query, trip.getDistance(), trip.getDuration(), trip.getCityByArrivalCity().getCode(), trip.getCityByDepartureCity().getCode(), trip.getDepartureTime(), trip.getDepartureDay(), trip.getCost(), trip.getDiscount(), trip.getDiscountDescription(), trip.getDiscountImagePath());
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
        if (rs.next()) {
            return trip(rs);
        }
        throw new Exception("E~Trip does not exists");
    }

    public LinkedList<Trip> getTripByCityFrom(String code) throws Exception {
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

    public LinkedList<Trip> getTripByCityFromTo(String codeCityFrom, String codeCityTo) throws Exception {
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

    public void deleteTrip(Trip dTrip) throws Exception {
        String query = "DELETE FROM Trip WHERE id_trip = '%d';";
        query = String.format(query, dTrip.getIdTrip());
        int result = connection.executeUpdate(query);
        if (result == 0) {
            throw new Exception("E~Trip doesnt exists");
        }
    }

    public List<Trip> findDiscounts() {
        List<Trip> listResult = new LinkedList<>();
        try {
            String query = "SELECT * FROM TRIP WHERE DISCOUNT <> '0';";
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listResult.add((trip(rs)));
            }
        } catch (Exception e) {
            return null;
        }
        return listResult;
    }

    public int getAutoIncremental() throws Exception {
        String query = "SELECT MAX(id_trip) FROM Trip;";
        query = String.format(query);
        ResultSet rs = connection.executeQuery(query);
        if (rs.next()) {
            return rs.getInt("MAX(id_trip)");
        }
        throw new Exception("E~Trip does not exists");
    }

    public int updateTrip(Trip trip) {
        String query = "UPDATE Trip SET distance='%d',duration='%d',arrival_city='%s', departure_city='%s',departure_time='%d',departure_day='%s', cost='%d', discount='%d', discount_description='%s', discount_image_path='%s' WHERE id_trip='%s'";
        query = String.format(query, trip.getDistance(), trip.getDuration(), trip.getCityByArrivalCity().getCode(), trip.getCityByDepartureCity().getCode(), trip.getDepartureTime(), trip.getDepartureDay(), trip.getCost(), trip.getDiscount(), trip.getDiscountDescription(), trip.getDiscountImagePath(), trip.getIdTrip());
        int result = connection.executeUpdate(query);
        return result;
    }
}
