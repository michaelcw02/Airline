
function Preload() {

}

Preload.prototype = {
    Preload: function() {
        this.cities = loadCities();
        this.flights = loadFlights(this.cities);
        this.promotions = loadPromotions(flights);
    }
}

function loadCities() {
    let cities = [];
    cities.push(new City('SJO', 'San Jose', 'Costa Rica'));
    cities.push(new City('LAX', 'Los Angeles', 'United States'));
    cities.push(new City('BOS', 'Boston', 'United States'));
    cities.push(new City('MIA', 'Miami', 'United States'));
    cities.push(new City('ATL', 'Atlanta', 'United States'));
    cities.push(new City('JFK', 'New York', 'United States'));
    cities.push(new City('PTY', 'Panama City', 'Panama'));
    cities.push(new City('CCS', 'Caracas', 'Venezuela'));
    cities.push(new City('TPE', 'Taipei', 'Taiwan'));
    cities.push(new City('NRT', 'Narita', 'Japan'));
    cities.push(new City('LHR', 'London', 'United Kingdom'));
    return cities;
}

function loadFlights(cities = []) {
    let flights = [];
    let sjo = findCity('SJO', cities);
    for(let i = 1; i < cities.length; i++) {
        let code = 'ST' + i + i;
        let price =  getRandomInt(99, 1450);
        flights.push(new Flight(code+'1', sjo, cities[i], price));
        flights.push(new Flight(code+'2', cities[i], sjo, price));
    }
    return flights;
}

function loadPromotions(flights) {
    let promotions = [];
    
    array.push(new Offer('SJO', 'LHR', '$746', 'How about London?', 'images/background-1.jpg'));
    array.push(new Offer('SJO', 'MIA', '$292', 'Wanna go to Miami?', 'images/background-2.jpg'));
    array.push(new Offer('SJO', 'LAX', '$419', 'Let\'s go to Los Angeles!', 'images/background-3.jpg'));
    array.push(new Offer('SJO', 'NRT', '$954', 'Japan is just Amazing!', 'images/background-4.jpg'));
    array.push(new Offer('SJO', 'BOG', '$317', 'Have you thought about Bogotá?', 'images/background-5.jpg'));
    array.push(new Offer('SJO', 'BOS', '$426', 'Let us take you to Boston!', 'images/background-6.jpg'));
    promotions.push(new Promotion())
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function findCity(code, cities = []) {
    return cities.filter( (city) => city.code === code);
}   