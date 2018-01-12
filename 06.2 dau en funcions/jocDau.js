window.onload = function (){

	/*Declaració de variables GLOBALS*/
	var numMaxim;
	var numMinim;
	var resultatDau=document.getElementById("contentDau");
	var butoDau = document.getElementById("buto");
	var formulari = document.getElementById("idFormulari");

	/*Funcions i programa*/
	formulari.onsubmit = function () {
		numMaxim = formulari.numMaxForm.value;
		numMinim = formulari.numMinForm.value;
		console.log(numMinim, numMaxim);
	
        /*Escriure quin num max i minim hem agafat en el HTML*/
		document.getElementById("numMinIn").innerHTML = numMinim;
		document.getElementById("numMaxIn").innerHTML = numMaxim;
		
        return false;
	};



		/*tirar el dau al apretar el buto*/
		butoDau.onclick = function () {

		resultatDau.innerHTML = tirarDau(numMinim, numMaxim);
		};
	
}