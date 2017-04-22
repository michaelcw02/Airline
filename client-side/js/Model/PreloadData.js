
function PreloadData() {
    this.PreloadData();
}

PreloadData.prototype = {
    PreloadData: function() {
        this.cities = loadCities();
        this.flights = loadFlights(this.cities);
        this.discounts = loadDiscounts(this.flights);
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

function loadDiscounts(flights) {
    let discounts = [];
    
    for (let i in flights) {
        console.log(i, flights[i].countryFrom.code, flights[i].countryTo.code);
    }

    discounts.push(new Discount(flights[0], getRandomInt(10, 40), 'Let\'s go to Los Angeles!', 'images/background-3.jpg'));
    discounts.push(new Discount(flights[2], getRandomInt(10, 40), 'Let us take you to Boston!', 'images/background-6.jpg'));
    discounts.push(new Discount(flights[4], getRandomInt(10, 40), 'Wanna go to Miami?', 'images/background-2.jpg'));
    discounts.push(new Discount(flights[8], getRandomInt(10, 40), 'Have you thought about Atlanta?', 'images/background-5.jpg'));
    discounts.push(new Discount(flights[12], getRandomInt(10, 40), 'Taipei is just Amazing!', 'images/background-4.jpg'));
    discounts.push(new Discount(flights[16], getRandomInt(10, 40), 'How about London?', 'images/background-1.jpg'));


    return discounts;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function findCity(code, cities = []) {
    let result = cities.filter( (city) => city.code === code);
    return result[0];
}   