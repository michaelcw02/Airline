function Ciudad(codigo,nombre,pais){ 
 this.Ciudad(codigo,nombre,pais);
}
Ciudad.prototype={ 
      Ciudad: function(codigo,nombre,pais){
         this.codigo=codigo;
         this.nombre=nombre;
         this.pais=pais;
  },
  completo: function (sep) { return this.codigo +  sep + this.nombre; }
}