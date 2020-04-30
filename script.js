var nombre = prompt('Ingrese su nombre:');
var edad = prompt('Ingrese su edad:');
var saldo = prompt('Ingrese su saldo disponible:');

var elemento1 = document.getElementById('bienvenida');
elemento1.innerHTML = '<h2 id=nombre> Bienvenid@ '+nombre+'</h2>'


var elemento2 = document.getElementById('saldo');
elemento2.innerHTML = '<h2 id=saldoDis> $ '+saldo+'</h2>'