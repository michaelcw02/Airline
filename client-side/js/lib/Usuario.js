function Usuario(cedula,nombre,password,apellidos,email,fNacimiento,direccion,telTrabajo,celular){ 
 this.Usuario(cedula,nombre,password,apellidos,email,fNacimiento,direccion,telTrabajo,celular);
}
Usuario.prototype={ 
      Usuario: function(cedula,nombre,password,apellidos,email,fNacimiento,direccion,telTrabajo,celular){
         this.cedula=cedula;
         this.nombre=nombre;
         this.password=password;
         this.apellidos=apellidos;
         this.email=email;
         this.fNacimiento=fNacimiento;
         this.direccion=direccion;
         this,telTrabajo=telTrabajo;
         this.celular=celular
          },
  completo: function (sep) { return this.cedula +  sep + this.password; }
}