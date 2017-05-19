/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.tests;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.util.List;
import una.airline.bl.FlightBL;
import una.airline.domain.Flight;
import una.airline.utils.HibernateProxyTypeAdapter;

/**
 *
 * @author michaelcw02
 */
public class TestBL {

    public static void main(String[] arg) {

        FlightBL flightBL = new FlightBL();

        List<Flight> list = flightBL.findDiscounts();

        
        
        for (Flight i : list) {
            GsonBuilder b = new GsonBuilder();
            b.registerTypeAdapterFactory(HibernateProxyTypeAdapter.FACTORY);
            Gson gson = b.create();
            System.out.println(gson.toJson(i));
        }
    }

}
