/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.List;
import una.airline.dao.TripDAO;
import una.airline.domain.Trip;

/**
 *
 * @author michaelcw02
 */
public class TripsBL {

    TripDAO tripDAO;

    public TripsBL() {
        tripDAO = new TripDAO();
    }

    public List<Trip> getAllTrips() {
        return tripDAO.getAllTrips();
    }

    public List<Trip> findDiscounts() {
        return tripDAO.findDiscounts();
    }

    public Trip getTripByCode(int code) throws Exception {
        return tripDAO.getTripByCode(code);
    }

    public void deleteTrip(Trip trip) throws Exception {
        tripDAO.deleteTrip(trip);
    }

    public void addTrip(Trip trip) throws Exception {
        tripDAO.addTrip(trip);
    }

    public int getLastID() throws Exception {
        return tripDAO.getAutoIncremental();
    }

    public List<Trip> getTripsByCityFrom(String cityFrom) throws Exception {
        return tripDAO.getTripByCityFrom(cityFrom);
    }

    public void updateTrip(Trip trip) {
        tripDAO.updateTrip(trip);
    }
}
