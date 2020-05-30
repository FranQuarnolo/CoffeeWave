//Obtengo el modal
var modal = document.getElementById("myModal");
//Obtengo el boton que abre el modal
var btn = document.getElementById("mostrar-modal");
//boton de cierre
var span = document.getElementsByClassName("close")[0];
//Cuando el usuario presiona "registrar" abre la ventana modal
btn.onclick = function() {
  modal.style.display = "block";
}
//Cuando el usuario hace click en X o en cualquier parte fuera de la ventana Modal la cierra
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var usuario=document.getElementById("user");
var nacimineto=document.getElementById("nacimiento");
var correo=document.getElementById("correo");
var pwd=document.getElementById("password");
var confirmPwd=document.getElementById("confirmPwd");


function confirmar(){
  usuario.addEventListener("input",validando);
  nacimineto.addEventListener("input",validando);
  correo.addEventListener("input",validando);
  pwd.addEventListener("input",validando);
  confirmPwd.addEventListener("input",validando);
  validando();
}

function validando(){
  // nombre
  if (usuario.value=='') {
    usuario.setCustomValidity('Ingrese un nombre (long. min 4 caract.)')
    usuario.style.backgroundColor='#E7D8C9'
  }else {
    usuario.setCustomValidity('')
    usuario.style.backgroundColor='#E7D8C9'
    usuario.style.fontSize='17px'
  }
  usuario.oninvalid=function(event){
    event.target.setCustomValidity('Nombre muy corto!');
  }
  // Fecha Nacimiento
  if (nacimineto.value=='') {
    nacimineto.setCustomValidity('Ingrese una fecha!')
    nacimineto.style.backgroundColor='#E7D8C9'
  }else {
    nacimineto.setCustomValidity('')
    nacimineto.style.backgroundColor='#E7D8C9'
    nacimineto.style.fontSize='17px'
  }
  // Correo
  if (correo.value=='') {
    correo.setCustomValidity('Ningun correo ingresado!')
    correo.style.backgroundColor='#E7D8C9'
  }else {
    correo.setCustomValidity('')
    correo.style.backgroundColor='#E7D8C9'
    correo.style.fontSize='17px'
  }
  // Contraseña
  if (pwd.value=='') {
    pwd.setCustomValidity('Ingrese una contraseña por favor!')
    pwd.style.backgroundColor='#E7D8C9'
  }else {
    pwd.setCustomValidity('')
    pwd.style.backgroundColor='#E7D8C9'
    pwd.style.fontSize='17px'
  }
  pwd.oninvalid=function(event){
    event.target.setCustomValidity('Su contraseña debe contar con al menos una mayúscula y un número (8 longitud)');
  }

  if (pwd.value != confirmPwd.value) {
    confirmPwd.setCustomValidity('Las contraseñas no coinciden!')
  }else {
    confirmPwd.setCustomValidity('')
    confirmPwd.style.backgroundColor='#E7D8C9'
    confirmPwd.style.fontSize='17px'
  }
}



window.addEventListener("load", confirmar);
