
Storage = {
    store: function (id, object) {
        return localStorage.setItem(id, JSON.stringify(object));
    },

    retrieve: function (id) {
        var jsonObject = localStorage.getItem(id);
        if (jsonObject === null) {
            return null;
        } else {
            return JSON.parse(jsonObject);
        }
    },

    revive: function (key, value) {
        if (value instanceof Object && value._class == 'Flight') {
            return new Flight(value.code, value.trip, value.departureDate, value.price);
        }
        if (value instanceof Object && value._class == 'City') {
            return new City(value.code, value.name, value.country);
        }
        if (value instanceof Object && value._class == 'Trip') {
            return new Trip(value.cityFrom, value.cityTo, value.duration);
        }
        if (value instanceof Object && value._class == 'TypeAirplane') {
            return new TypeAirplane(value.type_airplane, value.year, value.brand, value.qtySeats, value.rows, value.seatsRow);
        }
        if (value instanceof Object && value._class == 'Airplane') {
            return new Airplane(value.id_airplane, value.type_airplane);
        }
        return value;
    },

    replacer: function (key, value) {
        if (value instanceof Flight) {
            value._class = 'Flight';
        }
        if (value instanceof City) {
            value._class = 'City';
        }
        if (value instanceof Trip) {
            value._class = 'Trip';
        }
        if (value instanceof TypeAirplane) {
            value._class = 'TypeAirplane';
        }
        if (value instanceof Airplane) {
            value._class = 'Airplane';
        }
        return value;
    }
};