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
public class Discount {

    public Discount(Flight flight, int discount, String description, String path) {
        this.flight = flight;
        this.discount = discount;
        this.description = description;
        this.path = path;
    }

    public Flight getFlight() {
        return flight;
    }

    public int getDiscount() {
        return discount;
    }

    public String getDescription() {
        return description;
    }

    public String getPath() {
        return path;
    }

    public void setFlight(Flight flight) {
        this.flight = flight;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPath(String path) {
        this.path = path;
    }
    
    Flight flight;
    int discount;
    String description;
    String path;
}
