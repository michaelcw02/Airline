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

    public void addAirplane(Airplane airplane) throws Exception {
        String query = "INSERT INTO airplane VALUES ('%s', '%s');";
        query = String.format(query, airplane.getIdAirplane(),
                airplane.getTypeAirplane().getTypeAirline()
        );
        System.out.println(query);
        int result = connection.executeUpdate(query);
        if (result == 0) {
            throw new Exception("Airplane already exists.");
        }
    }

    public LinkedList<Airplane> getAllAirplanes() {
        LinkedList<Airplane> listResult = new LinkedList<>();
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

    public Airplane findAirplaneByID(String idAirplane) throws Exception {
        String query = "SELECT * FROM airplane WHERE id_airplane = '%s';";
        query = String.format(query, idAirplane);
        ResultSet rs = connection.executeQuery(query);
        if (rs.next()) {
            return airplane(rs);
        } else {
            throw new Exception("E~Airplane does not exists");
        }
    }
    public int updateAirplane(Airplane nAirplane) {
       String query = "UPDATE airplane SET type_airplane='%s' WHERE id_airplane='%s'";
       query = String.format(query, nAirplane.getTypeAirplane().getTypeAirline(), nAirplane.getIdAirplane());
       int result = connection.executeUpdate(query);
       return result;
    }
    public void deleteAirplane(Airplane airplane) throws Exception {
        String query = "DELETE FROM airplane WHERE id_airplane = '%s'";
        query = String.format(query, airplane.getIdAirplane());
        int result = connection.executeUpdate(query);
        if (result == 0) {
            throw new Exception("E~Airplane doesnt exists");
        }
    }

}
