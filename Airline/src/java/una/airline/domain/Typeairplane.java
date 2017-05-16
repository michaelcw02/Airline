package una.airline.domain;
// Generated May 15, 2017 11:25:46 PM by Hibernate Tools 4.3.1


import java.util.LinkedList;
import java.util.List;
/**
 * Typeairplane generated by hbm2java
 */
public class Typeairplane  implements java.io.Serializable {


     private String typeAirline;
     private String year;
     private String brand;
     private int qtyOfSeats;
     private int qtyOfRows;
     private int seatsPerRow;
     private List<Airplane> airplanes = new LinkedList<>();

    public Typeairplane() {
    }

	
    public Typeairplane(String typeAirline, String year, String brand, int qtyOfSeats, int qtyOfRows, int seatsPerRow) {
        this.typeAirline = typeAirline;
        this.year = year;
        this.brand = brand;
        this.qtyOfSeats = qtyOfSeats;
        this.qtyOfRows = qtyOfRows;
        this.seatsPerRow = seatsPerRow;
    }
    public Typeairplane(String typeAirline, String year, String brand, int qtyOfSeats, int qtyOfRows, int seatsPerRow, List<Airplane> airplanes) {
       this.typeAirline = typeAirline;
       this.year = year;
       this.brand = brand;
       this.qtyOfSeats = qtyOfSeats;
       this.qtyOfRows = qtyOfRows;
       this.seatsPerRow = seatsPerRow;
       this.airplanes = airplanes;
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
    public List<Airplane> getAirplanes() {
        return this.airplanes;
    }
    
    public void setAirplanes(List<Airplane> airplanes) {
        this.airplanes = airplanes;
    }




}

