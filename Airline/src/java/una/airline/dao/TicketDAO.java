/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.sql.ResultSet;
import java.util.LinkedList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import una.airline.bl.FlightsBL;
import una.airline.bl.UserBL;
import una.airline.domain.Flight;
import una.airline.domain.Ticket;
import una.airline.domain.User;

/**
 *
 * @author michaelcw02
 */
public class TicketDAO extends BaseDAO {

    public void addTicket(Ticket ticket) throws Exception {
        String query = "INSERT INTO `airlinedb`.`ticket` (`username`, `flight_num`, `number_passengers`) VALUES ('%s', '%s', '%d');";
        query = String.format(query, ticket.getUser().getUsername(),
                ticket.getFlight().getFlightNum(),
                ticket.getNumPassengers()
        );
        System.out.println(query);
        int result = connection.executeUpdate(query);
        if (result == 0) {
            throw new Exception("Ticket already exists.");
        }
    }
    
    public int addTicket(String username, String flightNum, int numPassengers) {
        String query = "INSERT INTO `airlinedb`.`ticket` (`username`, `flight_num`, `number_passengers`) VALUES ('%s', '%s', '%d');";
        query = String.format(query, username, flightNum, numPassengers);
        System.out.println(query);
        return connection.executeUpdate(query);
    }

    public LinkedList<Ticket> getAllTickets() {
        LinkedList<Ticket> listResult = new LinkedList<>();
        try {
            String query = "SELECT * FROM ticket;";
            query = String.format(query);
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listResult.add(ticket(rs));
            }
        } catch (Exception e) {
        }
        return listResult;
    }

    public Ticket findByID(int number) throws Exception {
        String query = "SELECT * FROM ticket WHERE number = %d;";
        query = String.format(query, number);
        ResultSet rs = connection.executeQuery(query);
        if (rs.next()) {
            return ticket(rs);
        }
        throw new Exception("E~Ticket does not exists");
    }
    
    public Ticket searchTicketByFlightNUser(String username, String flightNum) throws Exception {
        String query = "SELECT * FROM ticket WHERE username = '%s' AND flight_num = '%s';";
        query = String.format(query, username, flightNum);
        ResultSet rs = connection.executeQuery(query);
        if(rs.next()) {
            return ticket(rs);
        }
        throw new Exception("E~Ticket does not exists");
    }

    public Ticket createTicket(String username, String flightNum, int numPassengers) {
        int result = this.addTicket(username, flightNum, numPassengers);
        if(result == 1) {
            try {
                return this.searchTicketByFlightNUser(username, flightNum);                
            } catch (Exception ex) {
                return null;
            }
        }
        return null;        
    }
    
}
