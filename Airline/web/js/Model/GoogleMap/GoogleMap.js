
function GoogleMap(key, divElement, mapOptions = defaultMapOptions) {
    this.GoogleMap(key, divElement, mapOptions);
}

GoogleMap.prototype = {
    GoogleMap: function(key, divElement, mapOptions) {
        this.key = key;
        this.divElement = divElement;
        this.mapOptions = mapOptions;
    },
    initMap: function() {
        this.map = new GoogleMap.maps.Map(this.divElement, this.mapOptions);
    },
    setLocation: function(position, callback) {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        let latlng = {lat, lng}
        this.mapOptions.center = latlng;
        var map = new google.maps.Map(this.divElement, this.mapOptions);

        markOpc = { 
            position: latlng,
            map: map,
            title: "You are here!",
        };
        var marker = new google.maps.Marker(markOpc);
        callback();
    },
    showError: function(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                this.divElement.innerHTML = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                this.divElement.innerHTML = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                this.divElement.innerHTML = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                this.divElement.innerHTML = "An unknown error occurred."
                break;
        }
    },
    getLocationName: function(latlng) {
        let lat = latlng.lat;
        let lng = latlng.lng;
        let url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+ lat + ',' + lng +'&key=' + this.key;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", url, false ); // false for synchronous request
        xmlHttp.send( null );
        return JSON.parse(xmlHttp.responseText).results;
    }
}

var defaultMapOptions = {
    center: { lat: 9.998563, lng: -84.123851 },
    zoom: 17,
    mapTypeId: 'roadmap'
}
