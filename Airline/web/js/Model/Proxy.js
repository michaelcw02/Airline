var Proxy = Proxy || {};

Proxy.getCities = (callback) => {
    $.ajax({
        url: 'CitiesServlet',
        data: {
            accion: "getAllCities"
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar la información de las personas en la base de datos");
        },
        success: callback(data),
        type: 'GET',
        dataType: "json"
    });
}