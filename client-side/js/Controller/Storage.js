
Storage = {
    store: function (id, object) {
        return localStorage.setItem(id, JSON.stringify(object, this.replacer));
    },

    retrieve: function (id) {
        var jsonObject = localStorage.getItem(id);
        if (jsonObject === null) {
            return null;
        }
        else {
            return JSON.parse(jsonObject, this.revive);
        }
    },

    revive: function (key, value) {
        if (value instanceof Object && value._class == 'Flight') {
            return new Flight(value.code, value.cityFrom, value.cityTo, value.price);
        }
        if (value instanceof Object && value._class == 'City') {
            return new City(value.code, value.name, value.country);
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
        return value;
    }
};