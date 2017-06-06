/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.List;
import una.airline.dao.ReserveDAO;
import una.airline.domain.Reserve;

/**
 *
 * @author michaelcw02
 */
public class ReserveBL {
    ReserveDAO reserveDAO;

    public ReserveBL() {
        this.reserveDAO = new ReserveDAO();
    }

    public boolean addReserve(Reserve t) {
        try {
            this.reserveDAO.addReserve(t);
        } catch (Exception ex) {
            return false;
        }
        return true;
    }

    public List<Reserve> getAllReserve() {
        return this.reserveDAO.getAllReserves();
    }

    public Reserve findByID(int num) {
        try {
            return this.reserveDAO.findByID(num);
        } catch (Exception ex) {
        }
        return null;
    }
}
