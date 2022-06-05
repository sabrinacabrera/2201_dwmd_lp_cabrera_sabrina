/*
Se le solicita al usuario que ingrese una cantidad desconocida de números. 
Realice un programa para calcular e informar: 
a. La sumatoria de los valores ingresados. 
b. El menor valor ingresado. 
c. El mayor valor ingresado. 
*/
var salir='n'
var continuar;
var numero;
var suma=0;
var max;
var min;

do{
    numero=Number(prompt("Ingrese un numero "));
    
    if(suma==0){
        max=numero;
        min=numero;
    }else{      
        if(numero>max){
            max=numero;
        }
        if(numero<min){
            min=numero;
        }           
    }
    suma=suma+numero;
    continuar=prompt("Desea continuar? s/n :");

    if(continuar=='n'){

        salir='s';
    }
}while(salir!='s');

alert("a. La suma es: " +suma+ "\nb. El menor valor ingresado es "+min+"\nc. El mayor valor ingresado "+max);