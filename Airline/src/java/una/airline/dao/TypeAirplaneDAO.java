/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.util.List;
import org.hibernate.HibernateException;
import una.airline.domain.Typeairplane;
import una.airline.utils.HibernateUtil;

/**
 *
 * @author michaelcw02
 */
public class TypeAirplaneDAO extends HibernateUtil implements IBaseDAO<Typeairplane, String> {

    @Override
    public void save(Typeairplane o) {
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
    public Typeairplane merge(Typeairplane o) {
        try {
            startOperation();
            o = (Typeairplane)getSession().merge(o);
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
    public void delete(Typeairplane o) {
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
    public Typeairplane findById(String id) {
        Typeairplane typeAirplane = null;
        try {
            startOperation();
            typeAirplane = (Typeairplane) getSession().get(Typeairplane.class, id);
        } finally {
            getSession().close();
        }
        return typeAirplane;
    }

    @Override
    public List<Typeairplane> findAll() {
        List<Typeairplane> listTypeAirplanes;
        try {
            startOperation();
            listTypeAirplanes = getSession().createQuery("from Typeairplanes").list();
        } finally {
            getSession().close();
        }
        return listTypeAirplanes;
    }
    
}
