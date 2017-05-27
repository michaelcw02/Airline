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
}
