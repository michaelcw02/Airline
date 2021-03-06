/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.sql.ResultSet;
import java.util.LinkedList;
import java.util.List;
import una.airline.domain.Passenger;
import una.airline.domain.PassengerID;
import una.airline.domain.Ticket;

/**
 *
 * @author michaelcw02
 */
public class PassengerDAO extends BaseDAO {

    public void addPassenger(Passenger passenger) throws Exception {
        String query = "INSERT INTO passenger VALUES ('%s', '%d', '%s', '%s', '%s', '%d');";
        query = String.format(query, passenger.getID().getPassport(),
                passenger.getTicket().getNumber(),
                passenger.getName(),
                passenger.getLastname(),
                passenger.getSeat(),
                (passenger.isChecked()) ? 1 : 0
        );
        System.out.println(query);
        int result = connection.executeUpdate(query);
        if (result == 0) {
            throw new Exception("Passenger already exists.");
        }
    }

    public LinkedList<Passenger> getAllPassengers() {
        LinkedList<Passenger> listResult = new LinkedList<>();
        try {
            String query = "SELECT * FROM passenger;";
            query = String.format(query);
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listResult.add(passenger(rs));
            }
        } catch (Exception e) {
        }
        return listResult;
    }

    public LinkedList<Passenger> findPassengersOfTicket(Ticket t) throws Exception {
        LinkedList<Passenger> listResult = new LinkedList<>();
        try {
            String query = "SELECT * FROM passenger WHERE ticket_num = %d;";
            query = String.format(query, t.getNumber());
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listResult.add(passenger(rs));
            }
        } catch (Exception e) {
            throw new Exception("E~This is wrong man");
        }
        return listResult;
    }

    public Passenger findByID(PassengerID passengerID) throws Exception {
        String query = "SELECT * FROM passenger WHERE passport = '%s' AND ticket_num = %d;";
        query = String.format(query, passengerID.getPassport(), passengerID.getTicketNum());
        ResultSet rs = connection.executeQuery(query);
        if (rs.next()) {
            return passenger(rs);
        } 
        throw new Exception("E~Passenger doesnt exist");
    }

}
