/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.List;
import una.airline.dao.PassengerDAO;
import una.airline.domain.Passenger;
import una.airline.domain.PassengerID;

/**
 *
 * @author michaelcw02
 */
public class PassengerBL {
    
    PassengerDAO passengerDAO;
    
    public PassengerBL () {
        this.passengerDAO = new PassengerDAO();
    }
    
    public boolean addPassenger(Passenger p) {
        try {
            this.passengerDAO.addPassenger(p);
        } catch(Exception ex) {
            return false;
        }
        return true;
    }
    
    public List<Passenger> getAllPassengers() {
        return this.passengerDAO.getAllPassengers();
    }
    
    public Passenger findByID(PassengerID id) {
        try {
            return this.passengerDAO.findByID(id);
        } catch(Exception ex) {
        }
        return null;
    } 
    
}
