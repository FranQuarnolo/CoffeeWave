
function iniciar(){
  var boton=document.getElementById('guardar');
  boton.addEventListener('click', nuevoitem, false);
  mostrar();
}

function nuevoitem(){
  var id=document.getElementById('codigoPedido').value;
  var nombre=document.getElementById('nombrePedido').value;
  var fecha=document.getElementById('fechaPedido').value;
  var precio=document.getElementById('precioPedido').value;
  console.log(id,nombre,fecha,precio);
  sessionStorage.setItem(id,nombre,fecha,precio);
  mostrar();
  document.getElementById('codigoPedido').value='';
  document.getElementById('nombrePedido').value='';
  document.getElementById('fechaPedido').value='';
  document.getElementById('precioPedido').value='';
}

function mostrar(){

  var cajadatos=document.getElementById('cajadatos');
  cajadatos.innerHTML='<div><button id="borrarTodo" onclick="eliminarTodo()">Eliminar Todo</button></div>';

  for(var f=0;f<sessionStorage.length;f++){
    var id=sessionStorage.key(f);
    var nombre=sessionStorage.getItem(id);
    var fecha=sessionStorage.getItem(id);
    var precio=sessionStorage.getItem(id);

    cajadatos.innerHTML+='<div id="listado">'+id+' - '+nombre+' - '+fecha+' - '+precio+'<br/><button id="borrarP" onclick="eliminar(\''+id+'\')">X</button></div>';
  }

}

function eliminar(id){
  if(confirm('Eliminar Pedido?')){
    sessionStorage.removeItem(id);
    mostrar();
  }
}
function eliminarTodo(){
  if(confirm('Esta Seguro?')){
    sessionStorage.clear();
    mostrar();
  }
}


window.addEventListener('load', iniciar, false);
