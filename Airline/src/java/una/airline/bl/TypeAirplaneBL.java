/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.List;
import una.airline.domain.Typeairplane;

/**
 *
 * @author michaelcw02
 */
public class TypeAirplaneBL extends BaseBL implements IBaseBL<Typeairplane, String>{

    public TypeAirplaneBL() {
        super();
    }

    @Override
    public void save(Typeairplane o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Typeairplane merge(Typeairplane o) {
        return (Typeairplane) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Typeairplane o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Typeairplane findById(String o) {
        return (Typeairplane) this.getDao(o.getClass().getName()).findById(o);
    }

    @Override
    public List<Typeairplane> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}
