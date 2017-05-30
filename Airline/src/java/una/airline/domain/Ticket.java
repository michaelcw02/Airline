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
public class Ticket {

    private int number;
    private Flight flight;
    private User user;
    private int numPassengers;

    public Ticket() {
    }
    
    //FOR DAO'S USE
    public Ticket(int number, Flight flight, User user, int numPassengers) {
        this.flight = flight;
        this.user = user;
        this.numPassengers = numPassengers;
    }

    //FOR NORMAL INSERTION USE!
    public Ticket(Flight flight, User user, int numPassengers) {
        this.flight = flight;
        this.user = user;
        this.numPassengers = numPassengers;
    }

    public int getNumber() {
        return this.number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public Flight getFlight() {
        return this.flight;
    }

    public void setFlight(Flight flight) {
        this.flight = flight;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getNumPassengers() {
        return numPassengers;
    }

    public void setNumPassengers(int numPassengers) {
        this.numPassengers = numPassengers;
    }
    
}
