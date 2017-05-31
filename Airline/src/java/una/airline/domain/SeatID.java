/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.domain;

import java.util.Objects;

/**
 *
 * @author michaelcw02
 */
public class SeatID {

    public SeatID(String seatNumber, String flightNum) {
        this.seatNumber = seatNumber;
        this.flightNum = flightNum;
    }

    public String getSeatNumber() {
        return seatNumber;
    }

    public void setSeatNumber(String seatNumber) {
        this.seatNumber = seatNumber;
    }

    public String getFlightNum() {
        return flightNum;
    }

    public void setFlightNum(String flightNum) {
        this.flightNum = flightNum;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final SeatID other = (SeatID) obj;
        if (!Objects.equals(this.seatNumber, other.seatNumber)) {
            return false;
        }
        if (!Objects.equals(this.flightNum, other.flightNum)) {
            return false;
        }
        return true;
    }


    
    
    
    String seatNumber;
    String flightNum;
}
