/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.domain;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

/**
 *
 * @author michaelcw02
 */
public final class AirlineModel {

    private AirlineModel() {
        cities = new ArrayList<>();
        trips = new ArrayList<>();
        flights = new ArrayList<>();
        discounts = new ArrayList<>();
        loadCities();
        loadTrips();
        loadFlights();
        loadDiscounts();
    }

    static public AirlineModel getInstance() {
        if (instance == null) {
            instance = new AirlineModel();
        }
        return instance;
    }

    public List<City> getCities() {
        return cities;
    }

    public List<Trip> getTrips() {
        return trips;
    }

    public List<Flight> getFlights() {
        return flights;
    }

    public List<Discount> getDiscounts() {
        return discounts;
    }

    public void loadCities() {
        cities.add(new City("SJO", "San Jose", "Costa Rica"));
        cities.add(new City("LAX", "Los Angeles", "United States"));
        cities.add(new City("BOS", "Boston", "United States"));
        cities.add(new City("MIA", "Miami", "United States"));
        cities.add(new City("ATL", "Atlanta", "United States"));
        cities.add(new City("JFK", "New York", "United States"));
        cities.add(new City("TPE", "Taipei", "Taiwan"));
        cities.add(new City("LHR", "London", "United Kingdom"));
        cities.add(new City("NRT", "Narita", "Japan"));
        cities.add(new City("CCS", "Caracas", "Venezuela"));
    }

    public void loadTrips() {
        City sjo = findCity("SJO");
        cities.forEach((city) -> {
            if (city != sjo) {
                int duration = getRandomInt(200, 500); //MINUTES
                int distance = getRandomInt(200, 1500); //miles
                trips.add(new Trip(sjo, city, duration, distance));
                trips.add(new Trip(city, sjo, duration, distance));
            }
        });
    }

    public void loadFlights() {

        for (int i = 0; i < trips.size(); i++) {
            String code = "ST" + i;
            flights.add(new Flight(code + 1, trips.get(i), System.currentTimeMillis(), getRandomInt(320, 1600)));
            flights.add(new Flight(code + 2, trips.get(i), getRandomTime(), getRandomInt(320, 1600)));
            flights.add(new Flight(code + 3, trips.get(i), getRandomTime(), getRandomInt(320, 1600)));
        }

    }

    public void loadDiscounts() {
        int i = 0;
        discounts.add(new Discount(flights.get(i), getRandomInt(10, 40), "Let's go to Los Angeles!", "images/background-3.jpg"));
        discounts.add(new Discount(flights.get(i += 6), getRandomInt(10, 40), "Let us take you to Boston!", "images/background-6.jpg"));
        discounts.add(new Discount(flights.get(i += 6), getRandomInt(10, 40), "Wanna go to Miami?", "images/background-2.jpg"));
        discounts.add(new Discount(flights.get(i += 6), getRandomInt(10, 40), "Have you thought about Atlanta?", "images/background-5.jpg"));
        discounts.add(new Discount(flights.get(i += 6), getRandomInt(10, 40), "The City That Never Sleeps?", "images/background-17.jpg"));
        discounts.add(new Discount(flights.get(i += 6), getRandomInt(10, 40), "Taipei is just Amazing!", "images/background-4.jpg"));
        discounts.add(new Discount(flights.get(i += 6), getRandomInt(10, 40), "How about London?", "images/background-1.jpg"));
    }

    public City findCity(String cityCode) {
        City result = cities.stream().filter(city -> city.getCode().equalsIgnoreCase(cityCode)).findFirst().orElse(null);
        return result;
    }

    public static int getRandomInt(int min, int max) {
        return ThreadLocalRandom.current().nextInt(min, max + 1);
    }

    public static long getRandomTime() {
        long date1 = new Date().getTime();
        long date2 = parseDate("2017-06-30").getTime();
        return new Date(ThreadLocalRandom.current().nextLong(date1, date2)).getTime();
    }

    public static Date parseDate(String date) {
        try {
            return new SimpleDateFormat("yyyy-MM-dd").parse(date);
        } catch (ParseException e) {
            return null;
        }
    }
    
    public static AirlineModel instance;
    List<City> cities;
    List<Trip> trips;
    List<Flight> flights;
    List<Discount> discounts;
}
