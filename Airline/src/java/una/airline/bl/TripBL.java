/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.List;
import una.airline.domain.Trip;

/**
 *
 * @author michaelcw02
 */
public class TripBL extends BaseBL implements IBaseBL<Trip, String>{

    public TripBL() {
        super();
    }

    @Override
    public void save(Trip o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Trip merge(Trip o) {
        return (Trip) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Trip o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Trip findById(String o) {
        return (Trip) this.getDao(o.getClass().getName()).findById(o);
    }

    @Override
    public List<Trip> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}
