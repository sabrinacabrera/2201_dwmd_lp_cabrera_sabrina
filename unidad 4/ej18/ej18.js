/*
Se le solicita al usuario que ingrese los extremos
 de un rango numérico y un número. Realice un programa 
 para informar si el número está dentro del rango. 
Si está en rango, informar si el número es par. 
Si no está dentro del rango, informar si es número es impar. 
Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números 
enteros. 
*/
var max;
var min;
var auxMin;
var auxMax;
var numero;
var diferencia=0;

do{
    diferencia= auxMax-auxMin;
    auxMax=Number(prompt("Ingrese un rango maximo"));
    auxMin=Number(prompt("Ingrese un rango minimo")); 
    max=auxMax;
    min=auxMin;  

    numero=Number(prompt("Ingrese un numero"));
   // console.log(max);
   // console.log(min);
if(numero>min && numero<max){
    if(numero%2==0){
        alert("El numero es par");
      //  console.log(numero);
    }
}else{
    if(numero%2 !=0){
        alert("El numero es impar");
      //  console.log(numero);
    }
}

}while(diferencia<=4);


