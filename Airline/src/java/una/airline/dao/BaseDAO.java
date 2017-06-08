/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.dao;

import java.sql.PreparedStatement;
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

    public boolean setConnectionAutoCommit(boolean autoCommit) {
        return connection.setConnectionAutoCommit(autoCommit);
    }

    public boolean commit() {
        return connection.connectionCommit();
    }

    public boolean rollback() {
        return connection.connectionRollback();
    }

    public PreparedStatement prepareStatement(String query) throws SQLException {
        return connection.prepareStatement(query);
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
            String departureDay = rs.getString("departure_day");
            int cost = rs.getInt("cost");
            int discount = rs.getInt("discount");
            String discountDescription = rs.getString("discount_description");
            String discountImagePath = rs.getString("discount_image_path");
            City cityFrom;
            City cityTo;
            try {
                CityDAO cityDao = new CityDAO();
                cityFrom = cityDao.getCityByCode(cityFromCode);
                cityTo = cityDao.getCityByCode(cityToCode);
            } catch (Exception ex) {
                throw new Exception("E~There was an issue in cities of trip", ex);
            }
            return new Trip(idTrip, cityFrom, cityTo, distance, duration, departureTime, departureDay, cost, discount, discountDescription, discountImagePath);
        } catch (SQLException ex) {
            return null;
        }
    }
    
    protected Flight toFlights(ResultSet rs) throws Exception {
        try {
            String flightNum = rs.getString("flight_num");
            Airplane airplane = airplane(rs);
            Trip trip = trip(rs);
            Date departureDate = rs.getDate("departure_date");
            int availableSeats = rs.getInt("available_seats");
            return new Flight(flightNum, airplane, trip, departureDate, availableSeats);
        } catch (SQLException ex) {
            return null;
        }
    }

    protected Flight flight(ResultSet rs) throws Exception {
        try {
            String flightNum = rs.getString("flight_num");
            String airplaneId = rs.getString("id_airplane");
            int tripId = rs.getInt("id_trip");
            Date departureDate = rs.getDate("departure_date");
            int availableSeats = rs.getInt("available_seats");
            Airplane airplane = null;
            Trip trip1 = null;
            try {
                AirplaneDAO airplaneDAO = new AirplaneDAO();
                airplane = (Airplane) airplaneDAO.findAirplaneByID(airplaneId);
                TripDAO tripDAO = new TripDAO();
                trip1 = (Trip) tripDAO.getTripByCode(tripId);
            } catch (Exception ex) {
                throw new Exception("E~There was an issue in airplane or trips of flight", ex);
            }
            return new Flight(flightNum, airplane, trip1, departureDate, availableSeats);
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

    protected Airplane toAirplane(ResultSet rs) throws Exception {
        try {
            String idAirplane = rs.getString("id_airplane");
            TypeAirplane typeAirplane = typeAirplane(rs);
            return new Airplane(idAirplane, typeAirplane);
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
            String flightNum = rs.getString("flight_num");
            int numPassengers = rs.getInt("number_passengers");
            Flight flight = null;
            try {
                flight = (Flight) new FlightDAO().findByID(flightNum);
            } catch (Exception e) {
                throw new Exception("E~There was an issue with User or Flight of Ticket", e);
            }
            return new Ticket(number, flight, numPassengers);
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
            boolean checked = (rs.getInt("checked") == 1);

            Ticket ticket = null;
            try {
                ticket = (Ticket) new TicketDAO().findByID(number);
            } catch (Exception e) {
                throw new Exception("E~There was an issue with the seat of Passenger", e);
            }
            return new Passenger(passengerID, ticket, name, lastname, seat);
        } catch (SQLException e) {
            return null;
        }
    }

    protected Seat seat(ResultSet rs, Flight flight) throws Exception {
        try {
            String seatNumber = rs.getString("seat_num");
            String flightNum = rs.getString("flight_num");
            SeatID seatID = new SeatID(seatNumber, flightNum);

            String passport = rs.getString("passenger");
            int ticketNum = rs.getInt("ticket_num");

            PassengerID passengerID = new PassengerID(passport, ticketNum);
            Passenger passenger = null;
            try {
                if (passport != null & ticketNum != 0) {
                    passenger = (Passenger) new PassengerDAO().findByID(passengerID);
                }
                if(flight == null) {
                    flight = (Flight) new FlightDAO().findByID(flightNum);
                }
            } catch (Exception ex) {
                throw new Exception("E~Passenger does not exists");
            }
            return new Seat(seatID, flight, passenger);
        } catch (SQLException e) {
            return null;
        }
    }

    protected Reserve reserve(ResultSet rs) throws Exception {
        try {
            int number = rs.getInt("number");
            int outboundTktNumber = rs.getInt("outboundTicket");
            int returnTktNumber = rs.getInt("returnTicket");
            String username = rs.getString("username");
            Date reserveDate = rs.getDate("date");
            double price = rs.getDouble("price");

            Ticket outboundTicket = null;
            Ticket returnTicket = null;
            User user = null;
            try {
                TicketDAO ticketDAO = new TicketDAO();
                outboundTicket = ticketDAO.findByID(outboundTktNumber);
                returnTicket = ticketDAO.findByID(returnTktNumber);
                user = new UserDAO().getUserByUsername(username);
            } catch (Exception ex) {
                throw new Exception("E~Reserve does not exists");
            }
            return new Reserve(number, outboundTicket, returnTicket, user, reserveDate, price);
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
