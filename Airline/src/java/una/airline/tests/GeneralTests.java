/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.tests;

import java.text.ParseException;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author michaelcw02
 */
public class GeneralTests {

    public static String dateToSQL(Date date) {
        java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yy-MM-dd");
        return sdf.format(date);
    }

    public static String stringToSQL(String date) {
        try {
            java.text.SimpleDateFormat formatted = new java.text.SimpleDateFormat("MM/dd/yyyy");
            System.out.println("this is a test" + formatted.parse(date));
            Date d = new Date();
            java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd");
            return sdf.format(d);
        } catch (Exception ex) {
            Logger.getLogger(GeneralTests.class.getName()).log(Level.SEVERE, null, ex);
        }
        return "NaD";
    }

    public static void main(String[] arg) {
        
        System.out.println(dateToSQL(new Date(2017, 06, 01)));
        System.out.println(stringToSQL("30/05/2017"));
        
    }
}