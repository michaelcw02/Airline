/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.domain;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 *
 * @author michaelcw02
 */
public class Flight {

    public Flight(String code, Trip trip, Date departureDate, double price) {
        this.code = code;
        this.trip = trip;
        this.departureDate = departureDate;
        this.price = price;
    }

    public String getCode() {
        return code;
    }

    public Trip getTrip() {
        return trip;
    }

    public Date getDepartureDate() {
        return departureDate;
    }

    public double getPrice() {
        return price;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setTrip(Trip trip) {
        this.trip = trip;
    }

    public void setDepartureDate(Date departureDate) {
        this.departureDate = departureDate;
    }

    public void setPrice(double price) {
        this.price = price;
    }
    
    public long getTime() {
        return departureDate.getDate();
    }
    
    public String getDateFormatted() {
        SimpleDateFormat dt = new SimpleDateFormat("dd/MM/yyyy");
        return dt.format(departureDate);
    }
    
    String code;
    Trip trip;
    Date departureDate;
    double price; 
}
