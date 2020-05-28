var usuario = document.getElementById('user');
var correo = document.getElementById('email');
var mensaje = document.getElementById('texto');

function validarInfo(){
  usuario.addEventListener("input",validaciones);
  correo.addEventListener("input",validaciones);
  validaciones();
}

function validaciones(){
  if (usuario.value=='') {
    usuario.setCustomValidity('Ingrese su nombre por favor')
  }else {
    usuario.setCustomValidity('')
    usuario.style.backgroundColor='#C8B888'
    usuario.style.fontSize='17'
  }

  if (correo.value=='') {
    correo.setCustomValidity('Ingrese algun correo')
  }else {
    correo.setCustomValidity('')
    correo.style.backgroundColor='#C8B888'
    correo.style.fontSize='17'
  }
}

window.addEventListener("load", validarInfo)
