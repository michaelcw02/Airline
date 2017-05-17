/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.List;
import una.airline.domain.User;

/**
 *
 * @author michaelcw02
 */
public class UserBL extends BaseBL implements IBaseBL<User, String>{

    public UserBL() {
        super();
    }

    @Override
    public void save(User o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public User merge(User o) {
        return (User) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(User o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public User findById(String o) {
        return (User) this.getDao(o.getClass().getName()).findById(o);
    }

    @Override
    public List<User> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}

