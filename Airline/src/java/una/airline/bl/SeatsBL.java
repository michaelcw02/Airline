/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.List;
import una.airline.dao.SeatDAO;
import una.airline.domain.Seat;
import una.airline.domain.SeatID;

/**
 *
 * @author michaelcw02
 */
public class SeatsBL {
    private SeatDAO seatDAO;

    public SeatsBL() {
        this.seatDAO = new SeatDAO();
    }
    
    public void addSeats(Seat seat) throws Exception {
        try {
            this.seatDAO.addSeat(seat);
        } catch (Exception ex) {
            throw new Exception("E~Seat already exist!");
        }
    }
    public List<Seat> getAllSeats() {
        return this.seatDAO.getAllSeats();
    }
    public List<Seat> getAllSeatsByFlight(String flightNum) {
        return this.seatDAO.getAllSeatsOfFlight(flightNum);
    }
    public Seat getSeatByID(SeatID id) {
        try {
            return this.seatDAO.getSeatByID(id);
        } catch (Exception ex) {
            return null;
        }
    }
    public int updateSeat(Seat seat) {
        return this.seatDAO.updateSeat(seat);
    }
    public void deleteSeat(Seat seat) throws Exception {
        this.seatDAO.deleteSeat(seat);
    }
    
}
