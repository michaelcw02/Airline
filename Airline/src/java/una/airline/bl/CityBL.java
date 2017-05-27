/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.List;
import una.airline.dao.CityDAO;
import una.airline.domain.City;

/**
 *
 * @author michaelcw02
 */
public class CityBL {

    private CityDAO cityDAO;

    public CityBL() {
        cityDAO = new CityDAO();
    }

    public List<City> getAllCities() {
        return cityDAO.getAllCities();
    }

    public City getCityByCode(String code) throws Exception {
        return cityDAO.getCityByCode(code);
    }
    
    public void addCity(City city) throws Exception{
    cityDAO.addCity(city);
    }

    public void updateCity(City city) {
        cityDAO.updateCity(city);
    }

    public void deleteCity(City city) throws Exception {
        cityDAO.deleteCity(city);
    }

}
