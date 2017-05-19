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
public class PassengerID {

    private String passport;
    private int ticketNum;

    public PassengerID() {
    }

    public PassengerID(String passport, int ticketNum) {
        this.passport = passport;
        this.ticketNum = ticketNum;
    }

    public String getPassport() {
        return this.passport;
    }

    public void setPassport(String passport) {
        this.passport = passport;
    }

    public int getTicketNum() {
        return this.ticketNum;
    }

    public void setTicketNum(int ticketNum) {
        this.ticketNum = ticketNum;
    }

    public boolean equals(Object other) {
        if ((this == other)) {
            return true;
        }
        if ((other == null)) {
            return false;
        }
        if (!(other instanceof PassengerID)) {
            return false;
        }
        PassengerID castOther = (PassengerID) other;

        return ((this.getPassport() == castOther.getPassport()) || (this.getPassport() != null && castOther.getPassport() != null && this.getPassport().equals(castOther.getPassport())))
                && (this.getTicketNum() == castOther.getTicketNum());
    }

    public int hashCode() {
        int result = 17;

        result = 37 * result + (getPassport() == null ? 0 : this.getPassport().hashCode());
        result = 37 * result + this.getTicketNum();
        return result;
    }

}