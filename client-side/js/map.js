
// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">


var key = 'AIzaSyDTA1btQZJ0v_4ry2yFCX7u70GcpePQcts';
var divElemMap = document.getElementById('map');
var map;
var myOptions = {
    center: { lat: 9.998563, lng: -84.123851 },
    zoom: 17,
    mapTypeId: 'roadmap'
}

function initMap() {
    map = new google.maps.Map(divElemMap, myOptions);
}

function getLocation(event) {
    $('.map-container').show();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setLocation, showError);
    } else { 
        divElemMap.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function setLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let latlon = new google.maps.LatLng(lat, lon);

    let object = getRequest(lat, lon).results;
    console.log(object);
    setDirection(object);

    myOptions.center = latlon;
    
    var map = new google.maps.Map(document.getElementById("map"), myOptions);

    markOpc = { position:latlon,
                map:map,
                title:"You are here!"
            };

    var marker = new google.maps.Marker(markOpc);
}
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            divElemMap.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            divElemMap.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            divElemMap.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            divElemMap.innerHTML = "An unknown error occurred."
            break;
    }
}

function getRequest(lat, lng) {
    let url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+ lat + ',' + lng +'&key=' + key;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}

function setDirection(array) {
    $('#direction').val(array[1].formatted_address);
}


/*
//THIS SHIT WORKS ONLY ON A REALWEBSITE
function initAutocomplete() {
    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });
    console.log('is it working?')
    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();
        if (places.length == 0) {
            return;
        }
        // Clear out the old markers.
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];
        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };
            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));
            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}
*/