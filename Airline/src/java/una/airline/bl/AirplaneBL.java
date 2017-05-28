/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.List;
import una.airline.dao.AirplaneDAO;
import una.airline.domain.Airplane;

/**
 *
 * @author cfuen
 */
public class AirplaneBL {
    private AirplaneDAO airplaneDAO;
    
    public AirplaneBL() {
        airplaneDAO = new AirplaneDAO();
    }
    
    public List<Airplane> getAllAirplane() {
        return airplaneDAO.getAllAirplanes();
    }
    
    public Airplane findAirplaneByID(String airplane) throws Exception {
        return airplaneDAO.findAirplaneByID(airplane);
    }
    public void updateAirplane(Airplane nAirplane) {
        airplaneDAO.updateAirplane(nAirplane);
    }
    public void addAirplane(Airplane airplane) throws Exception{
        airplaneDAO.addAirplane(airplane);
    }
    public void deleteAirplane(Airplane airplane) throws Exception {
        airplaneDAO.deleteAirplane(airplane);
    }
}
