/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.List;
import una.airline.domain.Passenger;

/**
 *
 * @author michaelcw02
 */
public class PassengerBL extends BaseBL implements IBaseBL<Passenger, String>{

    public PassengerBL() {
        super();
    }

    @Override
    public void save(Passenger o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Passenger merge(Passenger o) {
        return (Passenger) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Passenger o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Passenger findById(String o) {
        return (Passenger) this.getDao(o.getClass().getName()).findById(o);
    }

    @Override
    public List<Passenger> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}

