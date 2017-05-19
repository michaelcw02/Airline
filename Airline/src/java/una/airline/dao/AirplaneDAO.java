/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.util.List;
import org.hibernate.HibernateException;
import una.airline.domain.Airplane;
import una.airline.database.HibernateUtil;

/**
 *
 * @author michaelcw02
 */
public class AirplaneDAO extends HibernateUtil implements IBaseDAO<Airplane, String> {

    @Override
    public void save(Airplane o) {
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
    public Airplane merge(Airplane o) {
        try {
            startOperation();
            o = (Airplane)getSession().merge(o);
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
    public void delete(Airplane o) {
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
    public Airplane findById(String id) {
        Airplane Airplane = null;
        try {
            startOperation();
            Airplane = (Airplane) getSession().get(Airplane.class, id);
        } finally {
            getSession().close();
        }
        return Airplane;
    }

    @Override
    public List<Airplane> findAll() {
        List<Airplane> listAirplanes;
        try {
            startOperation();
            listAirplanes = getSession().createQuery("from Airplane").list();
        } finally {
            getSession().close();
        }
        return listAirplanes;
    }
    
}
