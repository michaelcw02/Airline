function Vuelo(codigo,paisOrigen,paisDestino,fechaPartida,fechaLlegada, precio, cantPasajero){ 
 this.Vuelo(codigo,paisOrigen,paisDestino,fechaPartida,fechaLlegada, precio,cantPasajero);
}
Vuelo.prototype={ 
      Vuelo: function(codigo,paisOrigen,paisDestino,fechaPartida,fechaLlegada,precio,cantPasajero){
         this.codigo=codigo;
         this.paisOrigen=paisOrigen;
         this.paisDestino=paisDestino;
         this.fechaLlegada=fechaLlegada;
         this.fechaPartida=fechaPartida;
         this.precio=precio;
         this.cantPasajero=cantPasajero;
          },
  completo: function (sep) { return this.codigo +  sep + this.precio; }
}