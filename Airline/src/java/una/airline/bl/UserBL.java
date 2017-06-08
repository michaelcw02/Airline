/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.List;
import una.airline.dao.UserDAO;
import una.airline.domain.User;

/**
 *
 * @author cfuen
 */
public class UserBL {

    UserDAO userDAO;

    public UserBL() {
        userDAO = new UserDAO();
    }

    public List<User> getAllUsers() {
        return userDAO.getAllUsers();
    }

    public User getUserByUsername(String username) throws Exception {
        return userDAO.getUserByUsername(username);
    }
    
    public void addUser(User user) throws Exception{
        userDAO.addUser(user);
    }

    public void updateUser(User user) {
        userDAO.updateUser(user);
    }

    public void deleteUser(User user) throws Exception {
        userDAO.deleteUser(user);
    }
    
    public String validateUser(String username, String password) {
        User user = null;
        try {
            user = userDAO.validateUser(username, password);
            if(user != null) {
                if(user.getUsername().equals(username) && user.getPassword().equals(password)) {
                    return (user.isAdministrator() == true) ? "Administrator~" + user.getName() + "~" + user.getLastname1() + "~" 
                          + user.getLastname2() + "~" + user.getEmail() + "~" + user.getPhone() + "~" + user.getCelular() + "~" + user.getAddress() + "~" + user.getBirthday()
                            : "Client~"  + user.getName() + "~" + user.getLastname1() + "~" 
                          + user.getLastname2() + "~" + user.getEmail() + "~" + user.getPhone() + "~" + user.getCelular() + "~" + user.getAddress() + "~" + user.getBirthday();
                }
            }
        } catch (Exception e) {
            return "Not A User~No Name";
        }
        return "Not A User~No Name";
    }
}
