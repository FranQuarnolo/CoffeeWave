function iniciar(){
  var elemento=document.getElementById('lienzo');
  lienzo=elemento.getContext('2d');
  var imagen=new Image();
  imagen.src="img/pattern.png";
  imagen.addEventListener("load", modificarimagen, false);
}
function modificarimagen(e){
  imagen=e.target;
  var patron=lienzo.createPattern(imagen,'repeat');
  lienzo.fillStyle=patron;
  lienzo.fillRect(0,0,960,100);
}

window.addEventListener("load", iniciar, false);
