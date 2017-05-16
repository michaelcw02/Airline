/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.util.List;
import org.hibernate.HibernateException;
import una.airline.domain.Flight;
import una.airline.utils.HibernateUtil;

/**
 *
 * @author michaelcw02
 */
public class FlightDAO extends HibernateUtil implements IBaseDAO<Flight, String> {

    @Override
    public void save(Flight o) {
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
    public Flight merge(Flight o) {
        try {
            startOperation();
            o = (Flight)getSession().merge(o);
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
    public void delete(Flight o) {
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
    public Flight findById(String id) {
        Flight Flight = null;
        try {
            startOperation();
            Flight = (Flight) getSession().get(Flight.class, id);
        } finally {
            getSession().close();
        }
        return Flight;
    }

    @Override
    public List<Flight> findAll() {
        List<Flight> listFlights;
        try {
            startOperation();
            listFlights = getSession().createQuery("from Flight").list();
        } finally {
            getSession().close();
        }
        return listFlights;
    }
    
    public List<Flight> findFlightByCityFromCityTo(String cityFrom, String cityTo) {
        List<Flight> listFlights;
        try {
            startOperation();
            listFlights = getSession()
                .createSQLQuery("SELECT * "
                            +   "FROM FLIGHT, (SELECT ID_TRIP AS TRIP FROM TRIP WHERE DEPARTURE_CITY = 'SJO' AND ARRIVAL_CITY = 'LAX')alias1  "
                            +   "WHERE FLIGHT.ID_TRIP = TRIP").addEntity(Flight.class).list();
        } finally {
            getSession().close();
        }
        return listFlights;
    }
    
    
}
