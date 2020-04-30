// var edad = prompt('Ingrese su edad:');
var saldo = prompt('Ingrese su saldo disponible:');

var elemento2 = document.getElementById('saldo');
elemento2.innerHTML = '<h2 id=saldoDis> $ '+saldo+'</h2>'


let preciosP = new Array();
preciosP = document.getElementsByClassName ('precio');


console.log('El saldo actual es de: '+saldo);


for (var i = 0; i <= preciosP.length; i++) {

	console.log(preciosP[i].textContent);

	if(saldo < preciosP[i].textContent){

		preciosP[i].style.color='#ad230e';//
	}
}
	

// for (i = 0; i < document.getElementsByClassName('precio').length; i++){
        

//     var valor = document.getElementsByClassName('precio')[i];
    
//     var valor2 = valor.textContent;
    
//     alert(valor2);
        
// }      
