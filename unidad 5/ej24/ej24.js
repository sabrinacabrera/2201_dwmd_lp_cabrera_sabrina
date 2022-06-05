/*
Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). 
Realice un programa para calcular e informar cada operación deseada 
entre los dos números. Ese proceso se puede repetir 
mientras lo desee el usuario. Todos los valores deben ser 
validados.
*/
var num1;
var num2;
var opcion;
var suma;
var resta;
var mult;
var division;
var salir='n'
var continuar;

do{
    num1=Number(prompt("Ingrese primer operando "));
    num2=Number(prompt("Ingrese segundo operando "));
    opcion=Number(prompt("Ingrese operacion:\n1.Suma\n2.Resta\n3.Multiplicacion\n4.Division\n"));

    switch(opcion){
    case 1:
        suma=num1+num2;
        alert("La suma es: "+suma);
    break;
    case 2:
        resta=num1-num2;
        alert("El resultado de la resta es: "+resta);
    break;
    case 3:
        if(num2==0 || num1==0){
            alert("no se puede multiplicar por cero");
        }else{
            mult=num1*num2;
            alert("El resultado de la multiplicacion es " +mult);
        }
    break;
    case 4:
        if(num2==0){
            alert("No se puede dividir por cero ");
        }else{
            division= num1/num2;
            alert("El resultado de la division es "+division);
        }
    break;

    }

    continuar=prompt("Desea continuar? s/n :");

    if(continuar=='n'){

        salir='s';
    }
}while(salir!='s');
