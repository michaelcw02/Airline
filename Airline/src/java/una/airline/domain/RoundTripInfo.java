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
public class RoundTripInfo<T> {

    public RoundTripInfo() {
        this.outboundTripInfo = null;
        this.returnTripInfo = null;
    }

    public RoundTripInfo(List<T> outboundTripInfo, List<T> returnTripInfo) {
        this.outboundTripInfo = outboundTripInfo;
        this.returnTripInfo = returnTripInfo;
    }

    public List<T> getOutboundTripInfo() {
        return outboundTripInfo;
    }

    public void setOutboundTripInfo(List<T> outboundTripInfo) {
        this.outboundTripInfo = outboundTripInfo;
    }

    public List<T> getReturnTripInfo() {
        return returnTripInfo;
    }

    public void setReturnTripInfo(List<T> returnTripInfo) {
        this.returnTripInfo = returnTripInfo;
    }    
    
    List<T> outboundTripInfo;
    List<T> returnTripInfo;
}
