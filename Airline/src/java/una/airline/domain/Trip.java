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

    public Trip() {
    }

    public Trip(int idTrip, City cityByArrivalCity, City cityByDepartureCity, int distance, int duration) {
        this.idTrip = idTrip;
        this.cityByArrivalCity = cityByArrivalCity;
        this.cityByDepartureCity = cityByDepartureCity;
        this.distance = distance;
        this.duration = duration;
    }

    public Trip(City cityByArrivalCity, City cityByDepartureCity, int distance, int duration) {
        this.cityByArrivalCity = cityByArrivalCity;
        this.cityByDepartureCity = cityByDepartureCity;
        this.distance = distance;
        this.duration = duration;
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
}
