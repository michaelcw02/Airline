/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.sql.ResultSet;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import una.airline.domain.User;

/**
 *
 * @author michaelcw02
 */
public class UserDAO extends BaseDAO {

    public void addUser(User user) throws Exception {
        String query = "INSERT INTO user VALUES ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%d', '%d');";
        query = String.format(query, user.getUsername(), 
                             user.getPassword(),
                             user.getName(),
                             user.getLastname1(),
                             user.getLastname2(),
                             user.getEmail(),
                             user.getPhone(),
                             user.getCelular(),
                             user.getAddress(),
                             dateToSQL(user.getBirthday()),
                             (user.isAdministrator())? 1 : 0,
                             (user.isCliente())? 1 : 0
        );
        System.out.println(query);
        int result = connection.executeUpdate(query);
        if (result == 0) {
            throw new Exception("User already exists.");
        }
    }
    
    public LinkedList<User> getAllAirplanes() {
        LinkedList<User> listResult=  new LinkedList<>();
        try {
            String query = "SELECT * FROM user;";
            query = String.format(query);
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listResult.add(user(rs));
            }
        } catch (Exception e) {
        }
        return listResult;
    }
    
    public List<User> findByUsername(String username) {
        List<User> listResult = new LinkedList<>();
        try {
            String query = "SELECT FROM user WHERE username = %s;";
            String.format(query, username);
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listResult.add(user(rs));
            }
        } catch (Exception e) {
            return null;
        }
        return listResult;
    }

    private int booleanToInt(boolean b) {
        return (b) ? 1 : 0;
    } 
}