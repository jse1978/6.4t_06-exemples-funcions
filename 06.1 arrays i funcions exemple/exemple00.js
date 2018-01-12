//JavaScript

var diesSetmana = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"]; 
var fruites = ["poma", "platan", "taronja", "pera"];

function llegirArrayConsole(array){
/*    for (var i=0; i<=array.length-1;i++){
        console.log(array[i]);*/

       for (var i=0 in array){ // for... in recorre l'array en ordre ascendent
       	console.log(array[i]);
      
    }
}

llegirArrayConsole(diesSetmana);
llegirArrayConsole(fruites);


