function iniciar (){
  var elemento1 = document.querySelector('#canvas');
  var tg1 = elemento1.getContext('2d');
  var tg2 = elemento1.getContext('2d');
  var tg3 = elemento1.getContext('2d');
  var tg4 = elemento1.getContext('2d');
  var tg5 = elemento1.getContext('2d');
  var tg6 = elemento1.getContext('2d');
  var text1 = elemento1.getContext('2d');



	tg1.beginPath();
	tg1.moveTo(20, 10);
	tg1.lineTo(70, 10);
  tg1.lineTo(43, 70);
  tg1.lineTo(20, 10);
  tg1.stroke();
  tg1.fillStyle="#000000";
	tg1.fill();

  tg2.beginPath();
  tg2.moveTo(120,70);
  tg2.lineTo(170,70);
  tg2.lineTo(143,10);
  tg2.lineTo(120,70);
  tg2.stroke();
  tg2.fillStyle="#ffffff";
  tg2.fill();

  tg3.beginPath();
  tg3.moveTo(220,10);
  tg3.lineTo(270,10);
  tg3.lineTo(243,70);
  tg3.lineTo(220,10);
  tg3.stroke();
  tg3.fillStyle="#695958";
  tg3.fill();


  var gradiente = text1.createLinearGradient(0, 0, elemento1.width, 0);
  gradiente.addColorStop("0.2", "white");
  gradiente.addColorStop("1.0", "black");

  text1.font = "30px deco";
  text1.fillStyle=gradiente;
  text1.fillText("CONTACTANOS", 370 ,50);
  // text1.strokeText("CONTACTANOS", 370 ,50);

  tg4.beginPath();
  tg4.moveTo(670,10);
  tg4.lineTo(720,10);
  tg4.lineTo(693,70);
  tg4.lineTo(670,10);
  tg4.stroke();
  tg4.fillStyle="#000000";
  tg4.fill();

  tg5.beginPath();
  tg5.moveTo(770,70);
  tg5.lineTo(820,70);
  tg5.lineTo(795,10);
  tg5.lineTo(770,70);
  tg5.stroke();
  tg5.fillStyle="#ffffff";
  tg5.fill();

  tg6.beginPath();
  tg6.moveTo(870,10);
  tg6.lineTo(920,10);
  tg6.lineTo(895,70);
  tg6.lineTo(870,10);
  tg6.stroke();
  tg6.fillStyle="#695958";
  tg6.fill();

}


  window.addEventListener("load", iniciar, false)
