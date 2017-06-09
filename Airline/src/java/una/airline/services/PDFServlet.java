// <div><a href="PDFServlet"> Ver Pdf</a></div>
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.services;

import com.itextpdf.io.font.FontConstants;
import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.kernel.color.Color;
import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Image;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.property.TextAlignment;
import java.io.IOException;
import java.util.Date;
import java.util.LinkedList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import una.airline.bl.ReserveBL;
import una.airline.domain.Passenger;
import una.airline.domain.Reserve;

/**
 *
 * @author Fabiana
 */
@WebServlet(name = "PDFServlet", urlPatterns = {"/PDFServlet"})
public class PDFServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("aplication/pdf");
        response.setHeader("Content-Disposition", "inline;filename=\"TicketReport.pdf\"");
        PdfDocument pdf = new PdfDocument(new PdfWriter(response.getOutputStream()));
        Document document = new Document(pdf);

        ReserveBL reserveBL = new ReserveBL();
        HttpSession session = request.getSession();
        Reserve reserve = (Reserve) session.getAttribute("Reservation");
        Paragraph p;

        PdfFont font = PdfFontFactory.createFont(FontConstants.TIMES_ROMAN);
        p = new Paragraph("Star Airlines ✵");
        p.setTextAlignment(TextAlignment.LEFT);
        p.setBold();
        p.setFont(font);
        p.setFontSize(30);
        document.add(p);
        Image img = new Image(ImageDataFactory.create(this.getServletContext().getResource("/images/pdf1.jpg")));
        //img.scaleToFit(1300,120);
        document.add(img);
        p = new Paragraph("FLIGHT TICKET");
        p.setTextAlignment(TextAlignment.CENTER);
        p.setBold();
        p.setFontSize(15);
        p.setFont(font);
        p.setBackgroundColor(Color.BLUE, 1);
        document.add(p);
        //String number= reserve.getUser().getName();
        String nameFlight = reserve.getOutboundTicket().getFlight().getFlightNum();
        String arrival = reserve.getOutboundTicket().getFlight().getTrip().getCityByArrivalCity().getName();
        String departure = reserve.getOutboundTicket().getFlight().getTrip().getCityByDepartureCity().getName();
        String arrivalCountry = reserve.getOutboundTicket().getFlight().getTrip().getCityByArrivalCity().getCountry();
        String departureCountry = reserve.getOutboundTicket().getFlight().getTrip().getCityByDepartureCity().getCountry();
        Date date = reserve.getOutboundTicket().getFlight().getDepartureDate();
        String departureDate = date.toString();
        p = new Paragraph("OUTBOUND TICKET INFORMATION:");
        p.setTextAlignment(TextAlignment.LEFT);
        p.setBold();
        p.setFontSize(15);
        document.add(p);
        p = new Paragraph("Flight Number: " + nameFlight);
        p.setTextAlignment(TextAlignment.LEFT);
        document.add(p);
        p = new Paragraph("Arrival City: " + arrival + "-" + arrivalCountry);
        p.setTextAlignment(TextAlignment.LEFT);
        document.add(p);
        p = new Paragraph("Departure City: " + departure + "-" + departureCountry);
        p.setTextAlignment(TextAlignment.LEFT);
        document.add(p);
        p = new Paragraph("Departure Date: " + departureDate);
        p.setTextAlignment(TextAlignment.LEFT);
        document.add(p);
        LinkedList<Passenger> inPL = new LinkedList();
        int costR = 0;
        if (session.getAttribute("ReturnReservation") != null) {
            String nameFlightR = reserve.getReturnTicket().getFlight().getFlightNum();
            String arrivalR = reserve.getReturnTicket().getFlight().getTrip().getCityByArrivalCity().getName();
            String departureR = reserve.getReturnTicket().getFlight().getTrip().getCityByDepartureCity().getName();
            String arrivalCountryR = reserve.getReturnTicket().getFlight().getTrip().getCityByArrivalCity().getCountry();
            String departureCountryR = reserve.getReturnTicket().getFlight().getTrip().getCityByDepartureCity().getCountry();
            Date dateR = reserve.getReturnTicket().getFlight().getDepartureDate();
            String departureDateR = dateR.toString();
            p = new Paragraph("RETURN TICKET INFORMATION:");
            p.setTextAlignment(TextAlignment.LEFT);
            p.setBold();
            p.setFontSize(15);
            document.add(p);
            p = new Paragraph("Return Flight Number: " + nameFlightR);
            p.setTextAlignment(TextAlignment.LEFT);
            document.add(p);
            p = new Paragraph("Arrival City: " + arrivalR + "-" + arrivalCountryR);
            p.setTextAlignment(TextAlignment.LEFT);
            document.add(p);
            p = new Paragraph("Departure City: " + departureR + "-" + departureCountryR);
            p.setTextAlignment(TextAlignment.LEFT);
            document.add(p);
            p = new Paragraph("Departure Date: " + departureDateR);
            p.setTextAlignment(TextAlignment.LEFT);
            document.add(p);
            inPL = (LinkedList<Passenger>) session.getAttribute("inPassengerList");
            int basePriceR = reserve.getReturnTicket().getFlight().getTrip().getCost();
            int discountR = reserve.getReturnTicket().getFlight().getTrip().getDiscount();
            int passengersR = reserve.getReturnTicket().getNumPassengers();
            costR = (discountR != 0) ? passengersR * basePriceR * ((100 - discountR) / 100) : passengersR * basePriceR;
        }
        LinkedList<Passenger> outPL = (LinkedList<Passenger>) session.getAttribute("outPassengerList");
        p = new Paragraph("PASSANGERS INFORMATION:");
        p.setTextAlignment(TextAlignment.LEFT);
        p.setBold();
        p.setFontSize(15);
        document.add(p);
        if (inPL.isEmpty()) {
            for (int i = 0; i < outPL.size(); i++) {
                String name = outPL.get(i).getName();
                String lastname = outPL.get(i).getLastname();
                String seat = outPL.get(i).getSeat();
                p = new Paragraph("Name:" + " " + name + " " + lastname + " " + "Seat:" + " " + seat);
                p.setTextAlignment(TextAlignment.LEFT);
                document.add(p);
            }
        } else {
            for (int i = 0; i < outPL.size(); i++) {
                String name = outPL.get(i).getName();
                String lastname = outPL.get(i).getLastname();
                String seat = outPL.get(i).getSeat();
                String seat2 = inPL.get(i).getSeat();
                p = new Paragraph("Name:" + " " + name + " " + lastname + " " + "Seat:" + " " + "Departure Seat:" + " " + seat + " " + "Return Seat:" + " " + seat2);
                p.setTextAlignment(TextAlignment.LEFT);
                document.add(p);
            }
        }
        int basePrice = reserve.getOutboundTicket().getFlight().getTrip().getCost();
        int discount = reserve.getOutboundTicket().getFlight().getTrip().getDiscount();
        int passengers = reserve.getOutboundTicket().getNumPassengers();
        int cost = (discount != 0) ? passengers * basePrice * ((100 - discount) / 100) : passengers * basePrice;
        int totalCost=cost+costR;
        String costT=String.valueOf(totalCost);
        p = new Paragraph("TOTAL COST:"+""+costT+"USD");
        p.setTextAlignment(TextAlignment.RIGHT);
        p.setBold();
        p.setBackgroundColor(Color.BLUE, 1);
        document.add(p);

        document.close();
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
