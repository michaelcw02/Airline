/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import una.airline.database.Database;
import una.airline.domain.City;
import una.airline.domain.Flight;
import una.airline.domain.Trip;

/**
 *
 * @author micha
 */
public class BaseDAO {

    public BaseDAO() {
        connection = new Database("AirlineDB", "root", "root");
    }

    protected City city(ResultSet rs) {
        try {
            City city = new City();
            city.setCode(rs.getString("code"));
            city.setName(rs.getString("name"));
            city.setCountry(rs.getString("country"));
            return city;
        } catch (SQLException ex) {
            return null;
        }
    }
    protected Trip trip(ResultSet rs) {
        try {
            rs.getString("something");
            float distance = rs.getFloat("distance");
            int duration = rs.getInt("duraton");
            String cityFromCode = rs.getString("departure_city");
            String cityToCode = rs.getString("arrival_city");
            City cityFrom;
            City cityTo;
            try {
                CityDAO cityDao = new CityDAO();
                cityFrom = cityDao.getCityByCode(cityFromCode);
                cityTo = cityDao.getCityByCode(cityToCode);
            } catch(Exception ex) {
                return null;
            }
            return new Trip(cityFrom, cityTo, duration, distance);
        } catch (SQLException ex) {
            return null;
        }
    }
    protected Flight flight(ResultSet rs) {
        try {
            rs.getString("something");
            return null;
        } catch (SQLException ex) {
            return null;
        }
    }

    protected Database connection;
}
