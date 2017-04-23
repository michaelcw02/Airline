const geolocationOption = {
    maximumAge:60000, 
    timeout:5000, 
    enableHighAccuracy:true
}
var defaultMapOptions = {
    center: { lat: 9.998563, lng: -84.123851 },
    zoom: 17,
    mapTypeId: 'roadmap'
}

function GoogleMap(key, divElement, mapOptions = defaultMapOptions) {
    this.GoogleMap(key, divElement, mapOptions);
}

GoogleMap.prototype = {
    GoogleMap: function(key, divElement, mapOptions) {
        this.key = key;
        this.divElement = divElement;
        this.mapOptions = mapOptions;
        this.initMap();
    },
    initMap: function() {
        this.map = new GoogleMap.maps.Map(divElement, myOptions);
    },
    setLocation: function(position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let latlon = new google.maps.LatLng(lat, lon);
/*
//FOR LATER USES
        let object = getRequest(lat, lon).results;
        console.log(object);
        setDirection(object);
*/

        myOptions.center = latlon;
        
        var map = new google.maps.Map(document.getElementById("map"), myOptions);

        markOpc = { position:latlon,
                    map:map,
                    title:"You are here!"
                };

        var marker = new google.maps.Marker(markOpc);
    },
    getLocationName: function(lat, lng) {
        let url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+ lat + ',' + lng +'&key=' + key;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", url, false ); // false for synchronous request
        xmlHttp.send( null );
        return JSON.parse(xmlHttp.responseText);
    }
}