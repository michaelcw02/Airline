/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.util.List;
import org.hibernate.HibernateException;
import una.airline.domain.Trip;
import una.airline.utils.HibernateUtil;

/**
 *
 * @author michaelcw02
 */
public class TripDAO extends HibernateUtil implements IBaseDAO<Trip, Integer> {

    @Override
    public void save(Trip o) {
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
    public Trip merge(Trip o) {
        try {
            startOperation();
            o = (Trip)getSession().merge(o);
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
    public void delete(Trip o) {
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
    public Trip findById(Integer id) {
        Trip Trip = null;
        try {
            startOperation();
            Trip = (Trip) getSession().get(Trip.class, id);
        } finally {
            getSession().close();
        }
        return Trip;
    }

    @Override
    public List<Trip> findAll() {
        List<Trip> listTrips;
        try {
            startOperation();
            listTrips = getSession().createQuery("from Trip").list();
        } finally {
            getSession().close();
        }
        return listTrips;
    }
    
}

