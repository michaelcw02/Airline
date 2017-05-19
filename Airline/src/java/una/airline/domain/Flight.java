package una.airline.domain;
// Generated May 15, 2017 11:25:46 PM by Hibernate Tools 4.3.1

import java.util.LinkedList;
import java.util.List;

/**
 * Flight generated by hbm2java
 */
public class Flight implements java.io.Serializable {

    private String flightNum;
    private Airplane airplane;
    private Trip trip;
    private int cost;
    private String departureDate;
    private int availableSeats;
    private Integer discount;
    private String discountDescription;
    private String discountImagePath;
    private List<Ticket> tickets = new LinkedList<>();

    public Flight() {
    }

    public Flight(String flightNum, Airplane airplane, Trip trip, int cost, String departureDate, int availableSeats) {
        this.flightNum = flightNum;
        this.airplane = airplane;
        this.trip = trip;
        this.cost = cost;
        this.departureDate = departureDate;
        this.availableSeats = availableSeats;
    }

    public Flight(String flightNum, Airplane airplane, Trip trip, int cost, String departureDate, int availableSeats, Integer discount, String discountDescription, String discountImagePath, List<Ticket> tickets) {
        this.flightNum = flightNum;
        this.airplane = airplane;
        this.trip = trip;
        this.cost = cost;
        this.departureDate = departureDate;
        this.availableSeats = availableSeats;
        this.discount = discount;
        this.discountDescription = discountDescription;
        this.discountImagePath = discountImagePath;
        this.tickets = tickets;
    }

    public String getFlightNum() {
        return this.flightNum;
    }

    public void setFlightNum(String flightNum) {
        this.flightNum = flightNum;
    }

    public Airplane getAirplane() {
        return this.airplane;
    }

    public void setAirplane(Airplane airplane) {
        this.airplane = airplane;
    }

    public Trip getTrip() {
        return this.trip;
    }

    public void setTrip(Trip trip) {
        this.trip = trip;
    }

    public int getCost() {
        return this.cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public String getDepartureDate() {
        return this.departureDate;
    }

    public void setDepartureDate(String departureDate) {
        this.departureDate = departureDate;
    }

    public int getAvailableSeats() {
        return this.availableSeats;
    }

    public void setAvailableSeats(int availableSeats) {
        this.availableSeats = availableSeats;
    }

    public Integer getDiscount() {
        return this.discount;
    }

    public void setDiscount(Integer discount) {
        this.discount = discount;
    }

    public String getDiscountDescription() {
        return this.discountDescription;
    }

    public void setDiscountDescription(String discountDescription) {
        this.discountDescription = discountDescription;
    }

    public String getDiscountImagePath() {
        return this.discountImagePath;
    }

    public void setDiscountImagePath(String discountImagePath) {
        this.discountImagePath = discountImagePath;
    }

    public List<Ticket> getTickets() {
        return this.tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }

}
