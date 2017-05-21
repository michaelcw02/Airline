/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import una.airline.database.Database;
import una.airline.domain.*;

/**
 *
 * @author michaelcw02
 */
public class BaseDAO {

    public BaseDAO() {
        connection = new Database(null, null, null);
    }

    protected City city(ResultSet rs) {
        try {
            City city = new City();
            city.setCode(rs.getString("code"));
            city.setName(rs.getString("name"));
            city.setCountry(rs.getString("country"));
            return city;
        } catch (SQLException ex) {
            return null;
        }
    }

    protected Trip trip(ResultSet rs) throws Exception {
        try {
            int idTrip = rs.getInt("id_trip");
            int distance = rs.getInt("distance");
            int duration = rs.getInt("duration");
            String cityFromCode = rs.getString("departure_city");
            String cityToCode = rs.getString("arrival_city");
            int departureTime = rs.getInt("departure_time");
            City cityFrom;
            City cityTo;
            try {
                CityDAO cityDao = new CityDAO();
                cityFrom = cityDao.getCityByCode(cityFromCode);
                cityTo = cityDao.getCityByCode(cityToCode);
            } catch (Exception ex) {
                throw new Exception("E~There was an issue in cities of trip", ex);
            }
            return new Trip(idTrip, cityFrom, cityTo, duration, distance, departureTime);
        } catch (SQLException ex) {
            return null;
        }
    }

    protected Flight flight(ResultSet rs) throws Exception {
        try {
            String flightNum = rs.getString("flight_num");
            String airplaneId = rs.getString("id_airplane");
            int tripId = rs.getInt("id_trip");
            int cost = rs.getInt("cost");
            Date departureDate = rs.getDate("departure_date");
            int availableSeats = rs.getInt("available_seats");
            int discount = rs.getInt("discount");
            String discountDescription = rs.getString("discount_description");
            String discountImagePath = rs.getString("discount_image_path");
            Airplane airplane = null;
            Trip trip = null;
            try {
                AirplaneDAO airplaneDAO = new AirplaneDAO();
                airplane = (Airplane) airplaneDAO.findAirplaneByID(airplaneId);
                TripDAO tripDAO = new TripDAO();
                trip = (Trip) tripDAO.getTripByCode(tripId);
            } catch (Exception ex) {
                throw new Exception("E~There was an issue in airplane or trips of flight", ex);
            }
            return new Flight(flightNum, airplane, trip, cost, departureDate, availableSeats, discount, discountDescription, discountImagePath);
        } catch (SQLException ex) {
            return null;
        }
    }

    protected TypeAirplane typeAirplane(ResultSet rs) throws Exception {
        try {
            String typeAirline = rs.getString("type_airline");
            String year = rs.getString("year");
            String brand = rs.getString("brand");
            int qtyOfSeats = rs.getInt("qty_of_seats");
            int qtyOfRows = rs.getInt("qty_of_rows");
            int seatsPerRow = rs.getInt("seats_per_row");
            return new TypeAirplane(typeAirline, year, brand, qtyOfSeats, qtyOfRows, seatsPerRow);
        } catch (SQLException e) {
            return null;
        }
    }

    protected Airplane airplane(ResultSet rs) throws Exception {
        try {
            String idAirplane = rs.getString("id_airplane");
            String idTypeAirplane = rs.getString("type_airplane");
            TypeAirplane typeAirplane = null;
            try {
                typeAirplane = (TypeAirplane) new TypeAirplaneDAO().findTypeAirplaneByType(idTypeAirplane);
            } catch (Exception e) {
                throw new Exception("E~There was an issue with TypeAirplane of Airplane", e);
            }
            return new Airplane(idAirplane, typeAirplane);
        } catch (SQLException e) {
            return null;
        }
    }

    protected User user(ResultSet rs) throws Exception {
        try {
            String username = rs.getString("username");
            String password = rs.getString("password");
            String name = rs.getString("name");
            String lastname1 = rs.getString("lastname1");
            String lastname2 = rs.getString("lastname2");
            String email = rs.getString("email");
            String phone = rs.getString("phone");
            String celular = rs.getString("celular");
            String address = rs.getString("address");
            Date birthday = rs.getDate("birthday");
            boolean administrator = rs.getBoolean("administrator");
            boolean cliente = rs.getBoolean("cliente");
            return new User(username, password, name, lastname1, lastname2, email, phone, celular, address, birthday, administrator, cliente);
        } catch (SQLException e) {
            return null;
        }
    }

    protected Ticket ticket(ResultSet rs) throws Exception {
        try {
            int number = rs.getInt("number");
            String username = rs.getString("username");
            String flightNum = rs.getString("flight_num");
            User user = null;
            Flight flight = null;
            try {
                user = (User) new UserDAO().findByUsername(username);
                flight = (Flight) new FlightDAO().findByID(flightNum);
            } catch (Exception e) {
                throw new Exception("E~There was an issue with User or Flight of Ticket", e);
            }
            return new Ticket(number, flight, user);
        } catch (SQLException e) {
            return null;
        }
    }

    protected Passenger passenger(ResultSet rs) throws Exception {
        try {
            String passport = rs.getString("passport");
            int number = rs.getInt("ticket_num");
            PassengerID passengerID = new PassengerID(passport, number);
            String name = rs.getString("name");
            String lastname = rs.getString("lastname");
            String seat = rs.getString("seat");

            Ticket ticket = null;
            try {
                ticket = (Ticket) new TicketDAO().findByID(number);
            } catch (Exception e) {
                throw new Exception("E~There was an issue with the Ticket of Passenger", e);
            }
            return new Passenger(passengerID, ticket, name, lastname, seat);
        } catch (SQLException e) {
            return null;
        }
    }

    protected String dateToSQL(Date date) {
        java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return sdf.format(date);
    }

    protected Database connection;
}
