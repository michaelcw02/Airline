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
    
}
