/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.domain;

import java.util.Date;

/**
 *
 * @author michaelcw02
 */
public class Reserve {

    //NORMAL CONSTRUCTOR
    public Reserve(Ticket outboundTicket, Ticket returnTicket, User username) {
        this.outboundTicket = outboundTicket;
        this.returnTicket = returnTicket;
        this.user = username;
        this.reserveDate = new Date();
        this.price = 0;
    }
    
    //DAO CONSTRUCTOR
    public Reserve(int number, Ticket outboundTicket, Ticket returnTicket, User username, Date reserveDate, double price) {
        this.number = number;
        this.outboundTicket = outboundTicket;
        this.returnTicket = returnTicket;
        this.user = username;
        this.reserveDate = reserveDate;
        this.price = price;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public Ticket getOutboundTicket() {
        return outboundTicket;
    }

    public void setOutboundTicket(Ticket outboundTicket) {
        this.outboundTicket = outboundTicket;
    }

    public Ticket getReturnTicket() {
        return returnTicket;
    }

    public void setReturnTicket(Ticket returnTicket) {
        this.returnTicket = returnTicket;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getReserveDate() {
        return reserveDate;
    }

    public void setReserveDate(Date reserveDate) {
        this.reserveDate = reserveDate;
    }
    
    int number;
    Ticket outboundTicket;
    Ticket returnTicket;
    User user;
    Date reserveDate;
    double price;
}
