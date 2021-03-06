/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.domain;

import java.util.Date;

/**
 *
 * @author michaelcw02
 */
public class User {

    private String username;
    private String password;
    private String name;
    private String lastname1;
    private String lastname2;
    private String email;
    private String phone;
    private String celular;
    private String address;
    private Date birthday;
    private boolean administrator;
    private boolean client;

    public User() {
    }

    public User(String username, String password, String name, String lastname1, String lastname2, String email, String phone, String celular, String address, Date birthday, boolean administrator, boolean client) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.lastname1 = lastname1;
        this.lastname2 = lastname2;
        this.email = email;
        this.phone = phone;
        this.celular = celular;
        this.address = address;
        this.birthday = birthday;
        this.administrator = administrator;
        this.client = client;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname1() {
        return this.lastname1;
    }

    public void setLastname1(String lastname1) {
        this.lastname1 = lastname1;
    }

    public String getLastname2() {
        return this.lastname2;
    }

    public void setLastname2(String lastname2) {
        this.lastname2 = lastname2;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCelular() {
        return this.celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Date getBirthday() {
        return this.birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public boolean isAdministrator() {
        return this.administrator;
    }

    public void setAdministrator(boolean administrator) {
        this.administrator = administrator;
    }

    public boolean isClient() {
        return this.client;
    }

    public void setClient(boolean client) {
        this.client = client;
    }

}
