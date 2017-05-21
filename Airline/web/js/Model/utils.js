
 function mostrarModal(idDiv ,titulo, mensaje){
     $("#"+idDiv+"Title").html(titulo);
     $("#"+idDiv+"Message").html(mensaje);
     $("#"+idDiv).modal();
 }
 
 function ocultarModal(idDiv){
     $("#"+idDiv).modal("hide");	
 }
 
  function cambiarMensajeModal(idDiv ,titulo, mensaje){
     $("#"+idDiv+"Title").html(titulo);
     $("#"+idDiv+"Message").html(mensaje);
 }


