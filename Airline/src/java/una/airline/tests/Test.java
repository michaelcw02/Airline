/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.tests;

import com.google.gson.Gson;
import una.airline.bl.FlightBL;

/**
 *
 * @author michaelcw02
 */
public class Test {
    
    public static void main(String[] arg) {
        
        FlightBL flightBL = new FlightBL();
        String json;
        json = new Gson().toJson(flightBL.findDiscounts());
        System.out.println(json);
        
    }
    
    
}
