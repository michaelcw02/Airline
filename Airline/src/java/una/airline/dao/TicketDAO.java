/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.sql.ResultSet;
import java.util.LinkedList;
import java.util.List;
import una.airline.domain.Ticket;

/**
 *
 * @author michaelcw02
 */
public class TicketDAO extends BaseDAO {

    public void addTicket(Ticket ticket) throws Exception {
        String query = "INSERT INTO `airlinedb`.`ticket` (`username`, `flight_num`) VALUES ('%s', '%s');";
        query = String.format(query, ticket.getUser().getUsername(),
                ticket.getFlight().getFlightNum()
        );
        System.out.println(query);
        int result = connection.executeUpdate(query);
        if (result == 0) {
            throw new Exception("Ticket already exists.");
        }
    }

    public LinkedList<Ticket> getAllAirplanes() {
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
        throw new Exception("E~Ticket doesnt exists");
    }
    
}
