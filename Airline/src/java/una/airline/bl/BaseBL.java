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
        daos.put("una.airline.domain.Typeairline", new TypeAirplaneDAO() );
    }
    
    public IBaseDAO getDao(String className){
        return daos.get(className);
    }
}
