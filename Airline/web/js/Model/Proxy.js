var Proxy = Proxy || {};

Proxy.getCities = (callback) => {
    $.ajax({
        url: 'CitiesServlet',
        data: {
            action: "getAllCities"
        },
        error: function (ts) { //si existe un error en la respuesta del ajax
            alert(ts.responseText);
            //alert("Se presento un error a la hora de cargar las ciudades de la base de datos");
        },
        success: (data) => {
            callback(data);
        },
        type: 'GET',
        dataType: "json"
    });
}