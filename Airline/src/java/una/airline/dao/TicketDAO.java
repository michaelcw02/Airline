/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.util.List;
import org.hibernate.HibernateException;
import una.airline.domain.Ticket;
import una.airline.utils.HibernateUtil;

/**
 *
 * @author michaelcw02
 */
public class TicketDAO extends HibernateUtil implements IBaseDAO<Ticket, Integer> {

    @Override
    public void save(Ticket o) {
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
    public Ticket merge(Ticket o) {
        try {
            startOperation();
            o = (Ticket)getSession().merge(o);
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
    public void delete(Ticket o) {
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
    public Ticket findById(Integer id) {
        Ticket Ticket = null;
        try {
            startOperation();
            Ticket = (Ticket) getSession().get(Ticket.class, id);
        } finally {
            getSession().close();
        }
        return Ticket;
    }

    @Override
    public List<Ticket> findAll() {
        List<Ticket> listTickets;
        try {
            startOperation();
            listTickets = getSession().createQuery("from Ticket").list();
        } finally {
            getSession().close();
        }
        return listTickets;
    }
    
}

