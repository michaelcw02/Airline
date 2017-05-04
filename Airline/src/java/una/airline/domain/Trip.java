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

    public Trip(City cityFrom, City cityTo, int duration) {
        this.cityFrom = cityFrom;
        this.cityTo = cityTo;
        this.duration = duration;
    }

    public void setCityFrom(City cityFrom) {
        this.cityFrom = cityFrom;
    }

    public void setCityTo(City cityTo) {
        this.cityTo = cityTo;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public City getCityFrom() {
        return cityFrom;
    }

    public City getCityTo() {
        return cityTo;
    }

    public int getDuration() {
        return duration;
    }

    @Override
    public String toString() {
        return cityFrom.getCode() + " - " + cityTo.getCode();
    }
        
    City cityFrom; 
    City cityTo; 
    int duration; //in minutes
}
