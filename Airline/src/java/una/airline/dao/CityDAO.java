/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.util.List;
import org.hibernate.HibernateException;
import una.airline.domain.City;
import una.airline.utils.HibernateUtil;

/**
 *
 * @author michaelcw02
 */
public class CityDAO extends HibernateUtil implements IBaseDAO<City, String> {

    @Override
    public void save(City o) {
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
    public City merge(City o) {
        try {
            startOperation();
            o = (City)getSession().merge(o);
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
    public void delete(City o) {
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
    public City findById(String id) {
        City City = null;
        try {
            startOperation();
            City = (City) getSession().get(City.class, id);
        } finally {
            getSession().close();
        }
        return City;
    }

    @Override
    public List<City> findAll() {
        List<City> listCities;
        try {
            startOperation();
            listCities = getSession().createQuery("from City").list();
        } finally {
            getSession().close();
        }
        return listCities;
    }
    
}


