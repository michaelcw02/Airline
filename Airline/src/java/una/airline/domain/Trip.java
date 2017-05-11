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

    public Trip(City cityFrom, City cityTo, int duration, float distance) {
        this.cityFrom = cityFrom;
        this.cityTo = cityTo;
        this.duration = duration;
        this.distance = distance;
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

    public void setDistance(float distance) {
        this.distance = distance;
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

    public float getDistance() {
        return distance;
    }

    @Override
    public String toString() {
        return cityFrom.getCode() + " - " + cityTo.getCode();
    }
        
    City cityFrom; 
    City cityTo; 
    int duration; //in minutes
    float distance; //in miles
}
