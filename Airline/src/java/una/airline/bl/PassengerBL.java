/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import una.airline.dao.FlightDAO;
import una.airline.dao.PassengerDAO;
import una.airline.domain.Flight;
import una.airline.domain.Passenger;
import una.airline.domain.PassengerID;
import una.airline.domain.Ticket;

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
    
    public List<Passenger> addNGetListPassenger(List<Passenger> list, Ticket t) {
        try {
            for(Passenger p : list) {
                p.setTicket(t);
                this.passengerDAO.addPassenger(p);
            }
            return this.passengerDAO.findPassengersOfTicket(t);            
        } catch (Exception e) {
            return null;
        }
    }
    
    public List<Passenger> getAllPassengers() {
        return this.passengerDAO.getAllPassengers();
    }
    
    public List<Passenger> getAllPassengersOfTickets(Ticket t) {
        try {
            return this.passengerDAO.findPassengersOfTicket(t);
        } catch (Exception ex) {
            return null;
        }
    }
    
    public Passenger findByID(PassengerID id) {
        try {
            return this.passengerDAO.findByID(id);
        } catch(Exception ex) {
        }
        return null;
    }
    
    public Passenger createPassenger (String passport, String name, String lastname, Ticket ticket) {
        PassengerID passengerID = new PassengerID(passport, ticket.getNumber());
        Passenger passenger = new Passenger(passengerID, ticket, name, lastname, null);
        return passenger;
    }
    
}
