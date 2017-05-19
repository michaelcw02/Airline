/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.domain;

/**
 *
 * @author michaelcw02
 */
public class Airplane implements java.io.Serializable {

    private String idAirplane;
    private TypeAirplane typeairplane;

    public Airplane() {
    }

    public Airplane(String idAirplane, TypeAirplane typeairplane) {
        this.idAirplane = idAirplane;
        this.typeairplane = typeairplane;
    }

    public String getIdAirplane() {
        return this.idAirplane;
    }

    public void setIdAirplane(String idAirplane) {
        this.idAirplane = idAirplane;
    }

    public TypeAirplane getTypeairplane() {
        return this.typeairplane;
    }

    public void setTypeairplane(TypeAirplane typeairplane) {
        this.typeairplane = typeairplane;
    }

}
