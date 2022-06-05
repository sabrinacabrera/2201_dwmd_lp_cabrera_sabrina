/*
Se le solicita al usuario que ingrese 4 números.
Realice un programa para calcular e 
informar la suma y el promedio. 
*/

var numero;
var suma=0;
var promedio;
var contador=1;

while(contador<=4){
    
    numero=Number(prompt("ingrese un numero \n"));
    contador++;
    suma=suma+numero;
}

promedio=suma/4;
alert("la suma es " +suma+ " y el promedio es "+promedio);

