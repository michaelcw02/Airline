/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.utils;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

/**
 * Hibernate Utility class with a convenient method to get Session Factory
 * object.
 *
 * @author michaelcw02
 */
public class HibernateUtil {

    private static final SessionFactory sessionFactory;
    private Transaction transac;
    private Session session;
    
    static {
        try {
            // Create the SessionFactory from standard (hibernate.cfg.xml) 
            // config file.
            sessionFactory = new AnnotationConfiguration().configure().buildSessionFactory();
        } catch (Throwable ex) {
            // Log the exception. 
            System.err.println("Initial SessionFactory creation failed." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }
    
    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }
    //METODOS PARA EL MANEJO DE TRANSACCIONES
    
    public void startOperation() throws HibernateException {
        this.session = HibernateUtil.getSessionFactory().openSession();
        this.transac = session.beginTransaction();
    }
    
    public void handleException(HibernateException he) throws HibernateException {
        transac.rollback();
        throw new HibernateException("An error ocurred in the Data Access Layer", he);
    }

    public Transaction getTransac() {
        return transac;
    }

    public Session getSession() {
        return session;
    }
    
}
