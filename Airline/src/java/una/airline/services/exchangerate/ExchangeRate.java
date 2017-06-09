/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.services.exchangerate;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 *
 * @author michaelcw02
 */
public class ExchangeRate {

    private int indicador = 0; //317: Compra, 318: Venta
    private String tcFechaInicio;
    private String tcFechaFinal;
    private final String tcNombre = "TEC";
    private final String tnSubNiveles = "N";
    private final String HOST = "http://indicadoreseconomicos.bccr.fi.cr/indicadoreseconomicos/WebServices/wsindicadoreseconomicos.asmx/ObtenerIndicadoresEconomicosXML";
    private String url;
    private final String VALUE_TAG = "NUM_VALOR";

    public ExchangeRate() {
        setDate();
    }

    /**
     * Devuelve el valor de <strong>COMPRA</strong> USD del BCCR
     *
     * @return <code>Double</code> con el valor del precio de compra.
     */
    public double getCompra() {
        setCompra();

        double valor = Double.parseDouble(getValue());
        return valor;
    }

    /**
     * Devuelve el valor de <strong>VENTA</strong> USD del BCCR
     *
     * @return <code>Double</code> con el valor del precio de venta.
     */
    public double getVenta() {
        setVenta();

        double valor = Double.parseDouble(getValue());
        return valor;
    }

    /**
     * Obtiene el XML del WebService del BCCR y parsea el documento para obtener
     * el valor (dado por VALUE_TAG)
     *
     * @return String
     */
    private String getValue() {
        try {
            setUrl(); //Set del Url con los Parámetros

            //Obtiene y Parsea el XML
            String data = GetMethod.getHTML(url);
            XMLParser xml = new XMLParser(data);

            //Retorna el valor del tag
            return xml.getValue(VALUE_TAG);
        } catch (Exception e) {
            System.out.println("Error al obtener el valor del BCCR.");
            return "0";
        }
    }

    private void setUrl() {
        String params = "tcIndicador=" + indicador + "&tcFechaInicio=" + tcFechaInicio + "&tcFechaFinal=" + tcFechaFinal + "&tcNombre=" + tcNombre + "&tnSubNiveles=" + tnSubNiveles;
        this.url = HOST + "?" + params;
    }

    private void setDate() {
        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

        this.tcFechaInicio = sdf.format(date);
        this.tcFechaFinal = tcFechaInicio;
    }

    private void setCompra() {
        this.indicador = 317;
    }

    private void setVenta() {
        this.indicador = 318;
    }

}
