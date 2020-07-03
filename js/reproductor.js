function iniciar() {
  maximo=500;
  medio=document.getElementById('medio');
  reproducir=document.getElementById('reproducir');
  barra=document.getElementById('barra');
  progreso=document.getElementById('progreso');
  reproducir.addEventListener('click', presionar, false);
  barra.addEventListener('click', mover, false);
}

function presionar(){
  if(!medio.paused && !medio.ended) {
    medio.pause();
    reproducir.innerHTML='<span class="icon-play3"></span>';
    window.clearInterval(bucle);
  }else{
    medio.play();
    reproducir.innerHTML='<span class="icon-pause2"></span>';
    bucle=setInterval(estado, 1000);
  }
}

function estado(){
  if(!medio.ended){
    var total=parseInt(medio.currentTime*maximo/medio.duration);
    progreso.style.width=total+'px';
  }else{
    progreso.style.width='0px';
    reproducir.innerHTML='▶';
    window.clearInterval(bucle);
  }
}

function mover(e){
  if(!medio.paused && !medio.ended){
    var ratonX=e.pageX-barra.offsetLeft;
    var nuevoTiempo=ratonX*medio.duration/maximo;
    medio.currentTime=nuevoTiempo;
    progreso.style.width=ratonX+'px';
  }
}

window.addEventListener('load', iniciar, false);
