/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.util.List;
import org.hibernate.HibernateException;
import una.airline.domain.User;
import una.airline.utils.HibernateUtil;

/**
 *
 * @author michaelcw02
 */
public class UserDAO extends HibernateUtil implements IBaseDAO<User, String> {

    @Override
    public void save(User o) {
        try {
            startOperation();
            getSession().save(o);
            getTransac().commit();
        } catch (HibernateException he) {
            handleException(he);
            throw he;
        } finally {
            getSession().close();
        }
    }

    @Override
    public User merge(User o) {
        try {
            startOperation();
            o = (User)getSession().merge(o);
            getTransac().commit();
        } catch (HibernateException he) {
            handleException(he);
            throw he;
        } finally {
            getSession().close();
        }
        return o;
    }

    @Override
    public void delete(User o) {
        try {
            startOperation();
            getSession().delete(o);
            getTransac().commit();
        } catch (HibernateException he) {
            handleException(he);
            throw he;
        } finally {
            getSession().close();
        }
    }

    @Override
    public User findById(String id) {
        User User = null;
        try {
            startOperation();
            User = (User) getSession().get(User.class, id);
        } finally {
            getSession().close();
        }
        return User;
    }

    @Override
    public List<User> findAll() {
        List<User> listUsers;
        try {
            startOperation();
            listUsers = getSession().createQuery("from User").list();
        } finally {
            getSession().close();
        }
        return listUsers;
    }
    
}
