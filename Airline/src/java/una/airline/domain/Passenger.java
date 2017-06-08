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
public class Passenger implements java.io.Serializable {

    private PassengerID id;
    private Ticket ticket;
    private String name;
    private String lastname;
    private String seat;
    private boolean checked;

    public Passenger() {
    }

    public Passenger(PassengerID id, Ticket ticket) {
        this.id = id;
        this.ticket = ticket;
    }

    public Passenger(PassengerID id, Ticket ticket, String name, String lastname, String seat) {
        this.id = id;
        this.ticket = ticket;
        this.name = name;
        this.lastname = lastname;
        this.seat = seat;
        this.checked = false;
    }

    public PassengerID getID() {
        return this.id;
    }

    public void setID(PassengerID id) {
        this.id = id;
    }

    public Ticket getTicket() {
        return this.ticket;
    }

    public void setTicket(Ticket ticket) {
        this.ticket = ticket;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return this.lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getSeat() {
        return this.seat;
    }

    public void setSeat(String seat) {
        this.seat = seat;
    }

    public boolean isChecked() {
        return checked;
    }

    public void setChecked(boolean checked) {
        this.checked = checked;
    }

}
