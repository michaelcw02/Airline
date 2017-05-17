/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.List;
import una.airline.domain.City;

/**
 *
 * @author michaelcw02
 */
public class CityBL extends BaseBL implements IBaseBL<City, String>{

    public CityBL() {
        super();
    }

    @Override
    public void save(City o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public City merge(City o) {
        return (City) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(City o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public City findById(String o) {
        return (City) this.getDao(o.getClass().getName()).findById(o);
    }

    @Override
    public List<City> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}
