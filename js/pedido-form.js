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
