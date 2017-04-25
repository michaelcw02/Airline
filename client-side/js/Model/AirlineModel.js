function AirlineModel() {
    this.AirlineModel();
}

AirlineModel.prototype = {
    AirlineModel: function () {
        this.cities = this.loadCities();
        this.trips = this.loadTrips(this.cities);
        this.flights = this.loadFlights(this.trips);
        this.discounts = this.loadDiscounts(this.flights);
        this.search = [];
    },
    loadCities: function () {
        let cities = [];
        cities.push(new City('SJO', 'San Jose', 'Costa Rica'));
        cities.push(new City('LAX', 'Los Angeles', 'United States'));
        cities.push(new City('BOS', 'Boston', 'United States'));
        cities.push(new City('MIA', 'Miami', 'United States'));
        cities.push(new City('ATL', 'Atlanta', 'United States'));
        cities.push(new City('JFK', 'New York', 'United States'));
        cities.push(new City('TPE', 'Taipei', 'Taiwan'));
        cities.push(new City('LHR', 'London', 'United Kingdom'));
<<<<<<< HEAD
        cities.push(new City('MAD', 'Madrid', 'España'));
        cities.push(new City('ROS', 'Rosario', 'Argentina'));
        cities.push(new City('BCN', 'Barcelona', 'España'));
        cities.push(new City('BCN', 'Barcelona', 'España'));
        cities.push(new City('BCN', 'Barcelona', 'España'));
        cities.push(new City('BCN', 'Barcelona', 'España'));
        cities.push(new City('BCN', 'Barcelona', 'España'));
        cities.push(new City('BCN', 'Barcelona', 'España'));
        cities.push(new City('BCN', 'Barcelona', 'España'));
        cities.push(new City('BCN', 'Barcelona', 'España'));
        cities.push(new City('BCN', 'Barcelona', 'España'));
        cities.push(new City('BCN', 'Barcelona', 'España'));
        cities.push(new City('BCN', 'Barcelona', 'España'));
        cities.push(new City('BCN', 'Barcelona', 'España'));
        cities.push(new City('BCN', 'Barcelona', 'España'));
        cities.push(new City('BCN', 'Barcelona', 'España'));
        cities.push(new City('BCN', 'Barcelona', 'España'));
=======
        cities.push(new City('NRT', 'Narita', 'Japan'));
        cities.push(new City('CCS', 'Caracas', 'Venezuela'));
>>>>>>> added trip and its corrections
        return cities;
    },
    loadTrips: function (cities = []) {
        let trips = [];
        let sjo = findCity('SJO', cities);
        for (let i = 1; i < cities.length; i++) {
            let duration = getRandomInt(200, 1500);   //MINUTES
            trips.push(new Trip(sjo, cities[i], duration));
            trips.push(new Trip(cities[i], sjo, duration));
        }
        return trips;
    },
    loadFlights: function (trips = []) {
        let flights = [];
        for (let i in trips) {
            let code = 'ST' + i;
            flights.push( new Flight(code + 1, trips[i], randomDate(), getRandomInt(320, 1600)));
            flights.push( new Flight(code + 2, trips[i], randomDate(), getRandomInt(320, 1600)));
            flights.push( new Flight(code + 3, trips[i], randomDate(), getRandomInt(320, 1600)));
        }
        return flights;
    },

    loadDiscounts: function (flights) {
        let discounts = [];
        let i = 0;
        discounts.push(new Discount(flights[i], getRandomInt(10, 40), 'Let\'s go to Los Angeles!', 'images/background-3.jpg'));
        discounts.push(new Discount(flights[i += 6], getRandomInt(10, 40), 'Let us take you to Boston!', 'images/background-6.jpg'));
        discounts.push(new Discount(flights[i += 6], getRandomInt(10, 40), 'Wanna go to Miami?', 'images/background-2.jpg'));
        discounts.push(new Discount(flights[i += 6], getRandomInt(10, 40), 'Have you thought about Atlanta?', 'images/background-5.jpg'));
        discounts.push(new Discount(flights[i += 6], getRandomInt(10, 40), 'The City That Never Sleeps?', 'images/background-17.jpg'));
        discounts.push(new Discount(flights[i += 6], getRandomInt(10, 40), 'Taipei is just Amazing!', 'images/background-4.jpg'));
        discounts.push(new Discount(flights[i += 6], getRandomInt(10, 40), 'How about London?', 'images/background-1.jpg'));
        return discounts;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function findCity(code, cities = []) {
    let result = cities.filter((city) => city.code === code);
    return result[0];
}
function randomDate(start = new Date(), end = new Date('2017/06/30')) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}