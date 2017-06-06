/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.sql.ResultSet;
import java.util.LinkedList;
import una.airline.domain.Reserve;

/**
 *
 * @author michaelcw02
 */
public class ReserveDAO extends BaseDAO {

    public ReserveDAO() {
        super();
    }

    public void addReserve(Reserve reserve) throws Exception {
        String query = "INSERT INTO `airlinedb`.`reserve` (`outboundTicket`, `returnTicket`, `username`, `date`) VALUES ('%d', '%d', '%s', '%s');";
        query = String.format(query, reserve.getOutboundTicket().getNumber(), reserve.getReturnTicket().getNumber(), reserve.getUser().getUsername(), dateToSQL(reserve.getReserveDate()));
        System.out.println(query);
        int result = connection.executeUpdate(query);
        if (result == 0) {
            throw new Exception("Reserve already exists.");
        }
    }

    public LinkedList<Reserve> getAllReserves() {
        LinkedList<Reserve> listResult = new LinkedList<>();
        try {
            String query = "SELECT * FROM reserve;";
            query = String.format(query);
            ResultSet rs = connection.executeQuery(query);
            while (rs.next()) {
                listResult.add(reserve(rs));
            }
        } catch (Exception e) {
        }
        return listResult;
    }

    public Reserve findByID(int number) throws Exception {
        String query = "SELECT * FROM reserve WHERE number = %d;";
        query = String.format(query, number);
        ResultSet rs = connection.executeQuery(query);
        if (rs.next()) {
            return reserve(rs);
        }
        throw new Exception("E~Reserve does not exists");
    }

}
