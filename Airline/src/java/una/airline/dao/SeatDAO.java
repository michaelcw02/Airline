/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.sql.ResultSet;
import java.util.LinkedList;
import una.airline.domain.Seat;
import una.airline.domain.SeatID;

/**
 *
 * @author michaelcw02
 */
public class SeatDAO extends BaseDAO {

    public SeatDAO() {
        super();
    }

    public void addSeat(Seat seat) throws Exception {
        String query = "INSERT INTO `airlinedb`.`seat` (`flight_num`, `seat_num`, `passenger`) VALUES ('%s', '%s', '%s');";
        query = String.format(query, seat.getFlight().getFlightNum(), seat.getId().getSeatNumber(), seat.getPassenger().getID().getPassport());
        System.out.println(query);
        int result = connection.executeUpdate(query);
        if (result == 0) {
            throw new Exception("E~City already exists.");
        }
    }

    public LinkedList<Seat> getAllSeats() {
        LinkedList<Seat> listaResultado = new LinkedList<>();
        try {
            String query = "SELECT * FROM Seat;";
            query = String.format(query);
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listaResultado.add(seat(rs));
            }
        } catch (Exception e) {
        }
        return listaResultado;
    }

    public Seat getSeatByID(SeatID id) throws Exception {
        String query = "SELECT * FROM Seat WHERE flight_num = '%d' AND seat_num = '%s';";
        query = String.format(query, id.getFlightNum(), id.getSeatNumber());
        ResultSet rs = connection.executeQuery(query);
        if (rs.next()) {
            return seat(rs);
        } else {
            throw new Exception("E~City not found.");
        }
    }

    public int updateSeat(Seat seat) {
        String query = "UPDATE Seat SET passenger = '%s', ticket_num = '%d' WHERE flight_num = '%s' AND seat_num = '$s'";
        query = String.format(query, seat.getPassenger().getID().getPassport(), seat.getPassenger().getID().getTicketNum(), seat.getFlight().getFlightNum(), seat.getId().getSeatNumber());
        int result = connection.executeUpdate(query);
        return result;
    }
    
    public void deleteCity(Seat seat) throws Exception {
        String query = "DELETE FROM Seat WHERE flight_num = '%s' AND seat_num = '%s'";
        query = String.format(query, seat.getId().getFlightNum(), seat.getId().getSeatNumber());
        int result = connection.executeUpdate(query);
        if (result == 0) {
            throw new Exception("E~City doesnt exists");
    }
    }

}
