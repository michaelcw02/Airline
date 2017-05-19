/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.List;
import una.airline.domain.TypeAirplane;

/**
 *
 * @author michaelcw02
 */
public class TypeAirplaneBL extends BaseBL implements IBaseBL<TypeAirplane, String>{

    public TypeAirplaneBL() {
        super();
    }

    @Override
    public void save(TypeAirplane o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public TypeAirplane merge(TypeAirplane o) {
        return (TypeAirplane) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(TypeAirplane o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public TypeAirplane findById(String o) {
        return (TypeAirplane) this.getDao(o.getClass().getName()).findById(o);
    }

    @Override
    public List<TypeAirplane> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}
