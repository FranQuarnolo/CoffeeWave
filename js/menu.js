
var saldo = prompt('Ingrese su saldo disponible:');
var edad = prompt('Ingrese su edad:');
if (saldo == null || saldo == ""){
	saldo = '0';
}

var elemento1 = document.getElementById('saldo');
elemento1.innerHTML = '<h2 id=saldoDis> $ '+saldo+'</h2>'

var edades = new Array();
edades = document.getElementsByClassName('edad');

var preciosP = new Array();
preciosP = document.getElementsByClassName ('precio');

console.log('El saldo actual es de: '+saldo);

for (var i = 0; i < preciosP.length; i++) {

	if(parseInt(saldo) < parseInt(preciosP[i].textContent)){
		preciosP[i].style.color='#ad230e';
	}
}

for (var i = 0; i < edades.length; i++) {
	console.log(edades[i].textContent);
	if(parseInt(edad) < 18 & parseInt(edades[i].textContent) == 18){

		preciosP[i].style.textDecoration="line-through";
		preciosP[i].style.color='#ad230e';
	}
}
