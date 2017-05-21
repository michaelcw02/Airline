/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.domain;

import java.util.List;

/**
 *
 * @author michaelcw02
 */
public class RoundTripFlights {
    
    public RoundTripFlights() {
        this.outboundFlights = null;
        this.returnFlights = null;
    }
    
    public RoundTripFlights(List<Flight> outboundFlights, List<Flight> returnFlights) {
        this.outboundFlights = outboundFlights;
        this.returnFlights = returnFlights;
    }

    public List<Flight> getOutboundFlights() {
        return outboundFlights;
    }

    public void setOutboundFlights(List<Flight> outboundFlights) {
        this.outboundFlights = outboundFlights;
    }

    public List<Flight> getReturnFlights() {
        return returnFlights;
    }

    public void setReturnFlights(List<Flight> returnFlights) {
        this.returnFlights = returnFlights;
    }
    
    List<Flight> outboundFlights;
    List<Flight> returnFlights;
}
