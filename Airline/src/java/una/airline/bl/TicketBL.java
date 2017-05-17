/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.bl;

import java.util.List;
import una.airline.domain.Ticket;

/**
 *
 * @author michaelcw02
 */
public class TicketBL extends BaseBL implements IBaseBL<Ticket, String>{

    public TicketBL() {
        super();
    }

    @Override
    public void save(Ticket o) {
        this.getDao(o.getClass().getName()).save(o);
    }

    @Override
    public Ticket merge(Ticket o) {
        return (Ticket) this.getDao(o.getClass().getName()).merge(o);
    }

    @Override
    public void delete(Ticket o) {
        this.getDao(o.getClass().getName()).delete(o);
    }

    @Override
    public Ticket findById(String o) {
        return (Ticket) this.getDao(o.getClass().getName()).findById(o);
    }

    @Override
    public List<Ticket> findAll(String className) {
        return this.getDao(className).findAll();
    }
    
}
