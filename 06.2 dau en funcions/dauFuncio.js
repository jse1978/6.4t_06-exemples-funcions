/*DAU num aleatori de numMin a numMax en numeros enters*/
function tirarDau(numMin,numMax){
    
    var minim = parseInt(numMin); // lo del parseInt no cal fer-ho pero aixi la funcio també serveix si inrtoduim el numero amb text.
    var maxim = parseInt(numMax);
	var numAleatori = Math.floor(Math.random()*(maxim-minim+1)+minim);  
    return numAleatori;
    
}