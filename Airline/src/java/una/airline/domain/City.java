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
public class City {

    public City(String code, String name, String country) {
        this.code = code;
        this.name = name;
        this.country = country;
    }

    public City() {
        this.code = "Nothing";
        this.name = "Nothing";
        this.country = "Nothing";
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }

    public String getCountry() {
        return country;
    }

    @Override
    public String toString() {
        return code + ", "+  name + ", " + country;
    }
    
    String code;
    String name;
    String country;
}
