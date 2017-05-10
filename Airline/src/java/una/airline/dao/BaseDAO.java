/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import una.airline.database.Database;

/**
 *
 * @author micha
 */
public class BaseDAO {
    
    public BaseDAO() {
        connection = new Database("AirlineDB", "root", "root");
    }
    
    protected Database connection;
}
