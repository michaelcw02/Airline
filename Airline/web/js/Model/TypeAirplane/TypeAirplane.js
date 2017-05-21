function TypeAirplane(type_airline, year, brand, qtySeats, rows, seatsRow) {
    this.TypeAirplane(type_airline, year, brand, qtySeats, rows, seatsRow);
}

TypeAirplane.prototype = {
    TypeAirplane: function (type_airline, year, brand, qtySeats, rows, seatsRow) {
        this.type_airline = type_airline;
        this.year = year;
        this.brand = brand;
        this.qtySeats = qtySeats;
        this.rows = rows;
        this.seatsRow = seatsRow;
    }
}


