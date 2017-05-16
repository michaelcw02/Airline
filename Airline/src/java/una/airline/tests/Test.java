/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.tests;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;
import una.airline.dao.*;
import una.airline.domain.*;

/**
 *
 * @author michaelcw02
 */
public class Test {

    public static int getRandomInt(int min, int max) {
        return ThreadLocalRandom.current().nextInt(min, max + 1);
    }

    public static Date parseDate(String date) {
        try {
            return new SimpleDateFormat("yyyy-MM-dd").parse(date);
        } catch (ParseException e) {
            return null;
        }
    }

    public static long getRandomTime() {
        long date1 = new Date().getTime();
        long date2 = parseDate("2017-06-30").getTime();
        return new Date(ThreadLocalRandom.current().nextLong(date1, date2)).getTime();
    }

    public static void main(String[] arg) {

        TypeAirplaneDAO typeAirplaneDAO = new TypeAirplaneDAO();

        //ALL PASSED
        Typeairplane ta1 = new Typeairplane("A380-800", "2009", "Airbus", 800, 88, 9);
        typeAirplaneDAO.save(ta1);
        //ta1.setYear("2010");
        //typeAirplaneDAO.merge(ta1);

        ta1 = typeAirplaneDAO.findById("A380-800");
        AirplaneDAO airplaneDAO = new AirplaneDAO();

        //ALL PASSED
        for (int i = 1; i <= 54; i++) {
            String number = String.format("%03d", i);
            String id = "ASA-" + number;
            Airplane a = new Airplane(id, ta1);
            airplaneDAO.save(a);
        }

        List<Airplane> airplaneList = airplaneDAO.findAll();
        /*
        //ALL PASSED
        for (Airplane airplane : airplaneList) {
            System.out.println(airplane.getIdAirplane());
        }
         */

        CityDAO cityDAO = new CityDAO();

        //ALL PASSED
        cityDAO.save(new City("SJO", "San Jose", "Costa Rica"));
        cityDAO.save(new City("LAX", "Los Angeles", "United States"));
        cityDAO.save(new City("BOS", "Boston", "United States"));
        cityDAO.save(new City("MIA", "Miami", "United States"));
        cityDAO.save(new City("ATL", "Atlanta", "United States"));
        cityDAO.save(new City("JFK", "New York", "United States"));
        cityDAO.save(new City("TPE", "Taipei", "Taiwan"));
        cityDAO.save(new City("LHR", "London", "United Kingdom"));
        cityDAO.save(new City("NRT", "Narita", "Japan"));
        cityDAO.save(new City("CCS", "Caracas", "Venezuela"));

        City sjo = cityDAO.findById("SJO");
        List<City> cities = cityDAO.findAll();

        TripDAO tripDAO = new TripDAO();

        //TRIPS
        //ALL PASSED
        cities.forEach((city) -> {
            if (!city.getCode().equalsIgnoreCase(sjo.getCode())) {
                int duration = getRandomInt(200, 500); //MINUTES
                int distance = getRandomInt(200, 1500); //miles
                tripDAO.save(new Trip(sjo, city, duration, distance));
                tripDAO.save(new Trip(city, sjo, duration, distance));
            }
        });

        List<Trip> trips = tripDAO.findAll();
        /*
        //NOT FUNCTIONAL
        FlightDAO flightDAO = new FlightDAO();
        for (int i = 0; i < trips.size(); i++) {
            String number = String.format("%02d", i);
            String code = "ST" + number;
            flightDAO.save(new Flight(code + 1, airplaneDAO.findById("ASA-" + String.format("%03d", (i * 3 ) + 1)),trips.get(i), System.currentTimeMillis(), getRandomInt(320, 1600)));
            flightDAO.save(new Flight(code + 2, airplaneDAO.findById("ASA-" + String.format("%03d", (i * 3 ) + 2)),trips.get(i), getRandomTime(), getRandomInt(320, 1600)));
            flightDAO.save(new Flight(code + 3, airplaneDAO.findById("ASA-" + String.format("%03d", (i * 3 ) + 3)),trips.get(i), getRandomTime(), getRandomInt(320, 1600)));
        }
*       */

    }
}
