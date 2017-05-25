function Airplane(id_airplane, type_airplane) {
    this.Airplane(id_airplane, type_airplane);
}

Airplane.prototype = {
    Airplane: function (id_airplane, type_airplane) {
        this.id_airplane = id_airplane;
        this.type_airplane = type_airplane;
    }
}