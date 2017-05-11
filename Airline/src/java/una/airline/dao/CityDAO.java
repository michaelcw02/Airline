/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import una.airline.domain.City;

/**
 *
 * @author micha
 */
public class CityDAO extends BaseDAO {

    public CityDAO() {
        super();
    }

    public LinkedList<City> getAllCities() {
        LinkedList<City> listaResultado = new LinkedList<>();
        try {
            String query = "SELECT * FROM City;";
            query = String.format(query);
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listaResultado.add(city(rs));
            }
        } catch (Exception e) {
        }
        return listaResultado;
    }

    public void addCity(City city) throws Exception {
        String query = "INSERT INTO `airlinedb`.`city` (`code`, `name`, `country`) VALUES ('%s', '%s', '%s');";
        query = String.format(query, city.getCode(), city.getName(), city.getCountry());
        System.out.println(query);
        int result = connection.executeUpdate(query);
        if (result == 0) {
            throw new Exception("City already exists.");
        }
    }

}
