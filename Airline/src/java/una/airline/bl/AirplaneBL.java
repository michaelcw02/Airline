/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.List;
import una.airline.domain.Airplane;

/**
 *
 * @author michaelcw02
 */
public class AirplaneBL extends BaseBL implements IBaseBL<Airplane, String>{

    public AirplaneBL() {
        super();
    }

    @Override
    public void save(Airplane o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Airplane merge(Airplane o) {
        return (Airplane) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Airplane o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Airplane findById(String o) {
        return (Airplane) this.getDao(o.getClass().getName()).findById(o);
    }

    @Override
    public List<Airplane> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}

