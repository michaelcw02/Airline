/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.List;
import una.airline.dao.FlightDAO;
import una.airline.domain.Flight;

/**
 *
 * @author michaelcw02
 */
public class FlightBL extends BaseBL implements IBaseBL<Flight, String>{

    public FlightBL() {
        super();
    }

    @Override
    public void save(Flight o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Flight merge(Flight o) {
        return (Flight) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Flight o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Flight findById(String o) {
        return (Flight) this.getDao(o.getClass().getName()).findById(o);
    }

    @Override
    public List<Flight> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
    public List<Flight> findDiscounts() {
        List<Flight> list = new FlightDAO().findDiscounts();
        return list;
    }
    
}
