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
public class TypeAirplane {

    private String typeAirline;
    private String year;
    private String brand;
    private int qtyOfSeats;
    private int qtyOfRows;
    private int seatsPerRow;

    public TypeAirplane() {
    }

    public TypeAirplane(String typeAirline, String year, String brand, int qtyOfSeats, int qtyOfRows, int seatsPerRow) {
        this.typeAirline = typeAirline;
        this.year = year;
        this.brand = brand;
        this.qtyOfSeats = qtyOfSeats;
        this.qtyOfRows = qtyOfRows;
        this.seatsPerRow = seatsPerRow;
    }

    public String getTypeAirline() {
        return this.typeAirline;
    }

    public void setTypeAirline(String typeAirline) {
        this.typeAirline = typeAirline;
    }

    public String getYear() {
        return this.year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getBrand() {
        return this.brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public int getQtyOfSeats() {
        return this.qtyOfSeats;
    }

    public void setQtyOfSeats(int qtyOfSeats) {
        this.qtyOfSeats = qtyOfSeats;
    }

    public int getQtyOfRows() {
        return this.qtyOfRows;
    }

    public void setQtyOfRows(int qtyOfRows) {
        this.qtyOfRows = qtyOfRows;
    }

    public int getSeatsPerRow() {
        return this.seatsPerRow;
    }

    public void setSeatsPerRow(int seatsPerRow) {
        this.seatsPerRow = seatsPerRow;
    }
}