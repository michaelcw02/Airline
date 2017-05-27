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
public class Trip {

    private int idTrip;
    private City cityByArrivalCity;
    private City cityByDepartureCity;
    private int distance;
    private int duration;
    private int departureTime;
    private String departureDay;
    private int cost;
    private int discount;
    private String discountDescription;
    private String discountImagePath;

    public Trip() {
    }
    // THIS CONSTRUCTOR IS FOR DAO ONLY
    public Trip(int idTrip, City cityByDepartureCity, City cityByArrivalCity, int distance, int duration, int departureTime, String departureDay, int cost, int discount, String discountDescription, String discountImagePath) {
        this.idTrip = idTrip;
        this.cityByArrivalCity = cityByArrivalCity;
        this.cityByDepartureCity = cityByDepartureCity;
        this.distance = distance;
        this.duration = duration;
        this.departureTime = departureTime;
        this.departureDay = departureDay;
        this.cost = cost;
        this.discount = discount;
        this.discountDescription = discountDescription;
        this.discountImagePath = discountImagePath;
    }
    // THIS CONSTRUCTOR IS FOR NORMAL USE ONLY
    public Trip(City cityByDepartureCity, City cityByArrivalCity, int distance, int duration, int departureTime, String departureDay, int cost, int discount, String discountDescription, String discountImagePath) {
        this.cityByArrivalCity = cityByArrivalCity;
        this.cityByDepartureCity = cityByDepartureCity;
        this.distance = distance;
        this.duration = duration;
        this.departureTime = departureTime;
        this.departureDay = departureDay;
        this.cost = cost;
        this.discount = discount;
        this.discountDescription = discountDescription;
        this.discountImagePath = discountImagePath;        
    }

    public Integer getIdTrip() {
        return this.idTrip;
    }

    public void setIdTrip(Integer idTrip) {
        this.idTrip = idTrip;
    }

    public City getCityByArrivalCity() {
        return this.cityByArrivalCity;
    }

    public void setCityByArrivalCity(City cityByArrivalCity) {
        this.cityByArrivalCity = cityByArrivalCity;
    }

    public City getCityByDepartureCity() {
        return this.cityByDepartureCity;
    }

    public void setCityByDepartureCity(City cityByDepartureCity) {
        this.cityByDepartureCity = cityByDepartureCity;
    }

    public int getDistance() {
        return this.distance;
    }

    public void setDistance(int distance) {
        this.distance = distance;
    }

    public int getDuration() {
        return this.duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public int getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(int departureTime) {
        this.departureTime = departureTime;
    }
    
    public String getDepartureDay() {
        return departureDay;
    }
    
    public void setDepartureDay(String departureDay) {
        this.departureDay = departureDay;
    }

    public int getCost() {
        return this.cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public int getDiscount() {
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
}
