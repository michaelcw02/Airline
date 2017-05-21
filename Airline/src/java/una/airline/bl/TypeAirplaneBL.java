/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.List;
import una.airline.dao.TypeAirplaneDAO;
import una.airline.domain.TypeAirplane;

/**
 *
 * @author Fabiana
 */
public class TypeAirplaneBL {

    private TypeAirplaneDAO typeAirplaneDAO;
    
    public TypeAirplaneBL() {
        typeAirplaneDAO = new TypeAirplaneDAO();
    }
    
    public List<TypeAirplane> getAllTypeAirplane() {
        return typeAirplaneDAO.getAllTypeAirplane();
    }
    
    public TypeAirplane findTypeAirplaneByType(String type_airline) throws Exception {
        return typeAirplaneDAO.findTypeAirplaneByType(type_airline);
    }
    public void addTypeAirplane(TypeAirplane typeAirplane) throws Exception{
         typeAirplaneDAO.addTypeAirplane(typeAirplane);
    }
}
