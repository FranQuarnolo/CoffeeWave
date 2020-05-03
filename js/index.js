var nombre = prompt('Ingrese su nombre:');
if (nombre == null || nombre == ""){
	nombre = 'tu';
}

var elemento1 = document.getElementById('bienvenida');
elemento1.innerHTML = '<h2 id=nombre> Bienvenid@ '+nombre+'</h2>'
