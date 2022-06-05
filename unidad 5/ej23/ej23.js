/*
Se le solicita al usuario que ingrese los extremos de un rango numérico y una 
cantidad de valores desconocidos. 
Realice un programa para informar si cada número está dentro del rango. 
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
var salir='n'
var continuar;

do{
    diferencia= auxMax-auxMin;
    auxMax=Number(prompt("Ingrese un rango maximo"));
    auxMin=Number(prompt("Ingrese un rango minimo")); 
    max=auxMax;
    min=auxMin;  

    do{
        numero=Number(prompt("Ingrese un numero "));
     
        if(numero>min && numero<max){
            if(numero%2==0){
                alert("El numero es par");
            
            }
        }else{
            if(numero%2 !=0){
                alert("El numero es impar");
             
            }
        }
    
        continuar=prompt("Desea continuar? s/n :");
    
        if(continuar=='n'){
    
            salir='s';
        }
    }while(salir!='s');
   
}while(diferencia<=4);



