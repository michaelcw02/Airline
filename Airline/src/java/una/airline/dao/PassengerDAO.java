/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.util.List;
import org.hibernate.HibernateException;
import una.airline.domain.Passenger;
import una.airline.domain.PassengerId;
import una.airline.utils.HibernateUtil;

/**
 *
 * @author michaelcw02
 */
public class PassengerDAO extends HibernateUtil implements IBaseDAO<Passenger, PassengerId> {

    @Override
    public void save(Passenger o) {
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
    public Passenger merge(Passenger o) {
        try {
            startOperation();
            o = (Passenger)getSession().merge(o);
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
    public void delete(Passenger o) {
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
    public Passenger findById(PassengerId id) {
        Passenger Passenger = null;
        try {
            startOperation();
            Passenger = (Passenger) getSession().get(Passenger.class, id);
        } finally {
            getSession().close();
        }
        return Passenger;
    }

    @Override
    public List<Passenger> findAll() {
        List<Passenger> listPassengers;
        try {
            startOperation();
            listPassengers = getSession().createQuery("from Passenger").list();
        } finally {
            getSession().close();
        }
        return listPassengers;
    }
    
}
