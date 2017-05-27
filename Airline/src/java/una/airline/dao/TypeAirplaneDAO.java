/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.sql.ResultSet;
import java.util.LinkedList;
import java.util.List;
import una.airline.domain.TypeAirplane;

/**
 *
 * @author michaelcw02
 */
public class TypeAirplaneDAO extends BaseDAO {

    public TypeAirplaneDAO() {
        super();
    }

    public void addTypeAirplane(TypeAirplane typeAirplane) throws Exception {
        String query = "INSERT INTO `airlinedb`.`typeairplane` VALUES ('%s', '%s', '%s', '%d', '%d', '%d');";
        query = String.format(query, typeAirplane.getTypeAirline(),
                typeAirplane.getYear(),
                typeAirplane.getBrand(),
                typeAirplane.getQtyOfSeats(),
                typeAirplane.getQtyOfRows(),
                typeAirplane.getSeatsPerRow()
        );
        System.out.println(query);
        int result = connection.executeUpdate(query);
        if (result == 0) {
            throw new Exception("TypeAirplane already exists.");
        }
    }

    public LinkedList<TypeAirplane> getAllTypeAirplane() {
        LinkedList<TypeAirplane> listaResultado = new LinkedList<>();
        try {
            String query = "SELECT * FROM typeairplane;";
            query = String.format(query);
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listaResultado.add(typeAirplane(rs));
            }
        } catch (Exception e) {
            return null;
        }
        return listaResultado;
    }

    public TypeAirplane findTypeAirplaneByType(String typeAirline) throws Exception {
        try {
            String query = "SELECT * FROM typeairplane WHERE type_airline = '%s';";
            query = String.format(query, typeAirline);
            ResultSet rs = connection.executeQuery(query);
            if (rs.next()) {
                return typeAirplane(rs);
            } else {
                throw new Exception("E~Trip does not exists");
            }            
        } catch (Exception e) {
            throw new Exception("E~ An error has ocurred in TypeAirline db", e);
        }
    }

    public int updateTypeAirplane(TypeAirplane nTypeAirplane) {
       String query = "UPDATE typeairplane SET year='%s',brand='%s', qty_of_seats='%d', qty_of_rows='%d', seats_per_row='%d' WHERE type_airline='%s'";
       query = String.format(query, nTypeAirplane.getYear(),nTypeAirplane.getBrand() ,nTypeAirplane.getQtyOfSeats(), nTypeAirplane.getQtyOfRows(), nTypeAirplane.getSeatsPerRow(), nTypeAirplane.getTypeAirline());
       int result = connection.executeUpdate(query);
       return result;
    }
    
    public void deleteTypeAirplane(TypeAirplane dTypeAirplane) throws Exception {
        String query = "DELETE FROM typeairplane WHERE type_airline = '%s'";
        query = String.format(query, dTypeAirplane.getTypeAirline());
        int result = connection.executeUpdate(query);
        if (result == 0)
            throw new Exception("E~TypeAirplane doesnt exists");
    }
}

