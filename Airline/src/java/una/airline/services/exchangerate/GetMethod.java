/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package una.airline.services.exchangerate;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 *
 * @author michaelcw02
 */
public class GetMethod {
    /**
     * Devuelve un documento HTML a partir de una solicitud
     * <code>HTTP GET</code>
     *
     * @param urlToRead con el URL a donde enviar la solicitud (incluido
     * parámetros)
     * @return <code>String</code> con el HTML dado por la solicitud HTTP GET
     * @throws Exception
     */
    protected static String getHTML(String urlToRead) throws Exception {
        StringBuilder result = new StringBuilder();
        URL url = new URL(urlToRead);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");

        BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        String line;
        while ((line = rd.readLine()) != null) {
            result.append(line);
        }
        rd.close();
        return result.toString();
    }

}
