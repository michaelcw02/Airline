/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.sql.ResultSet;
import java.util.LinkedList;
import java.util.List;
import una.airline.domain.Airplane;

/**
 *
 * @author michaelcw02
 */
public class AirplaneDAO extends BaseDAO {

    public void addTypeAirplane(Airplane airplane) throws Exception {
        String query = "INSERT INTO airplane VALUES ('%s', '%s');";
        String.format(query, airplane.getIdAirplane(), 
                             airplane.getTypeairplane()
        );
        System.out.println(query);
        int result = connection.executeUpdate(query);
        if (result == 0) {
            throw new Exception("Airplane already exists.");
        }
    }
    
    public LinkedList<Airplane> getAllAirplanes() {
        LinkedList<Airplane> listResult=  new LinkedList<>();
        try {
            String query = "SELECT * FROM airplane;";
            query = String.format(query);
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listResult.add(airplane(rs));
            }
        } catch (Exception e) {
        }
        return listResult;
    }
    
    public List<Airplane> findAirplaneByID(String idAirplane) {
        List<Airplane> listResult = new LinkedList<>();
        try {
            String query = "SELECT FROM airplane WHERE id_airplane = %s;";
            String.format(query, idAirplane);
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listResult.add(airplane(rs));
            }
        } catch (Exception e) {
            return null;
        }
        return listResult;
    }
    
}
