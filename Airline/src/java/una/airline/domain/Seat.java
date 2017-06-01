/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.domain;

/**
 *
 * @author michaelcw02
 */
public class Seat {

    public Seat(SeatID id, Flight flight) {
        this.id = id;
        this.flight = flight;
        this.passenger = null;
    }
    public Seat(SeatID id, Flight flight, Passenger passenger) {
        this.id = id;
        this.flight = flight;
        this.passenger = passenger;
    }

    public SeatID getId() {
        return id;
    }

    public void setId(SeatID id) {
        this.id = id;
    }

    public Flight getFlight() {
        return flight;
    }

    public void setFlight(Flight flight) {
        this.flight = flight;
    }

    public Passenger getPassenger() {
        return passenger;
    }

    public void setPassenger(Passenger passenger) {
        this.passenger = passenger;
    }    
    
    SeatID id;
    Flight flight;
    Passenger passenger;
}
