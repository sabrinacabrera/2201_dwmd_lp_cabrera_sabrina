/*
Se le solicita al usuario que ingrese una letra. 
Realice el algoritmo para informar si 
el valor ingresado es una vocal. 
*/

var letra;

letra=prompt("ingrese una letra: ");

if(letra=="a" || letra=="e" || letra=="i" || letra=="o" || letra=="u"){
    alert("Es una vocal");
}else{
    alert("no es una vocal");
}