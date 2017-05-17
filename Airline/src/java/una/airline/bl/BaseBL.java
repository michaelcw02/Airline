/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.LinkedHashMap;
import una.airline.dao.*;

/**
 *
 * @author michaelcw02
 */
public class BaseBL {
    private final LinkedHashMap<String, IBaseDAO> daos;
    
    public BaseBL() {
        daos = new LinkedHashMap();
        daos.put("una.airline.domain.Typeairline", new TypeAirplaneDAO());
        daos.put("una.airline.domain.Airplane", new AirplaneDAO());
        daos.put("una.airline.domain.City", new CityDAO());
        daos.put("una.airline.domain.Trip", new TripDAO());
        daos.put("una.airline.domain.Flight", new FlightDAO());
        daos.put("una.airline.domain.User", new UserDAO());
        daos.put("una.airline.domain.Ticket", new TicketDAO());
        daos.put("una.airline.domain.Passenger", new TypeAirplaneDAO());        
    }
    
    public IBaseDAO getDao(String className){
        return daos.get(className);
    }
}
