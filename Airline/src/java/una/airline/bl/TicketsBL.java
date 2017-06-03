/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.LinkedList;
import java.util.List;
import una.airline.dao.TicketDAO;
import una.airline.domain.RoundTripInfo;
import una.airline.domain.Ticket;

/**
 *
 * @author michaelcw02
 */
public class TicketsBL {
    TicketDAO ticketDAO;

    public TicketsBL() {
        this.ticketDAO = new TicketDAO();
    }
    
    public boolean addTicket(Ticket t) {
        try {
            this.ticketDAO.addTicket(t);
        } catch (Exception ex) {
            return false;
        }
        return true;
    }
    
    public List<Ticket> getAllTickets() {
        return this.ticketDAO.getAllTickets();
    }
    
    public Ticket findByID(int num) {
        try {
            return this.ticketDAO.findByID(num);
        } catch (Exception ex) {
        }
        return null;
    }

    public RoundTripInfo<Ticket> reserveTickets(String outboundReservation, String returnReservation, int numPassengers) {
        Ticket outboundTicket = this.ticketDAO.createTicket(outboundReservation, numPassengers);
        Ticket returnTicket = null;
        List<Ticket> outList = new LinkedList<>();
        List<Ticket> inList = new LinkedList<>();
        outList.add(outboundTicket);
        if(returnReservation != null) {
            returnTicket = this.ticketDAO.createTicket(returnReservation, numPassengers);
            inList.add(returnTicket);
        } 
        RoundTripInfo<Ticket> roundTripTickets = new RoundTripInfo<>(outList, inList);
        return roundTripTickets;
    }
    
    
    
}
