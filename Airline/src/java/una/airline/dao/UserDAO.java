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
    
    public LinkedList<User> getAllUsers() {
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
    
    public User getUserByUsername(String username) throws Exception{
        String query = "SELECT * FROM user WHERE username = '%s';";
        query = String.format(query, username);
        ResultSet rs = connection.executeQuery(query);
        if (rs.next()) {
            return user(rs);
        } else {
            throw new Exception("E~User does not exists");
        }            
    }
    
    public int updateUser(User user) {
        String query = "UPDATE user SET password='%s', name='%s', lastname1='%s', lastname2='%s', email='%s', phone='%s', celular='%s', address='%s', birthday='%s' WHERE username='%s'";
        query = String.format(query, user.getPassword(), user.getName(), user.getLastname1(), user.getLastname2(), user.getEmail(), user.getPhone(), user.getCelular(), user.getAddress(), dateToSQL(user.getBirthday()), user.getUsername());
        int result = connection.executeUpdate(query);
        return result;
    }

    public void deleteUser(User user) throws Exception {
        String query = "DELETE FROM user WHERE username = '%s'";
        query = String.format(query, user.getUsername());
        int result = connection.executeUpdate(query);
        if (result == 0) {
            throw new Exception("E~User doesnt exists");
        }
    }
    
    public User validateUser(String username, String password) throws Exception {
        String query = "SELECT * FROM user WHERE username = '%s' AND password = '%s';";
        query = String.format(query, username, password);
        ResultSet rs = connection.executeQuery(query);
        if(rs.next()) {
            return user(rs);
        } else {
            throw new Exception("E~User does not exists");
        }
    }

    private int booleanToInt(boolean b) {
        return (b) ? 1 : 0;
    } 
}
