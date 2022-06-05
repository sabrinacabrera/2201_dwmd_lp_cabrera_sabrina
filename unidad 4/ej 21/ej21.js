/* 
21. Realizar un sistema para el cálculo de sueldo de una empresa. Se le solicita al
usuario que ingrese la categoría a la que pertenece que define el sueldo básico
mensual (categoría 1: u$s 2000, categoría 2: u$s 3000, categoría 3: u$s 4000) y las
horas extras. Se sabe que:
a. Si es de la categoría 1 y trabajó más de 20 horas extra, suma un bono de u$s 500
más.
b. Si es de la categoría 3 y trabajó más de 30 horas extra, suma un bono de u$s 1000
más.
Realice un programa para calcular e informar el sueldo mensual del empleado,
indicando si su sueldo supera o no los u$s 4000.
*/

var categoria;
var extraH=0;
var sueldo=0;
var bono=0;

categoria= Number(prompt("Ingrese categoria:\n 1: u$s 2000, \n 2:u$s 3000\n 3:u$s 4000 \n"));
extraH=Number(prompt("ingrese cantidad de horas extra :\n"));

switch(categoria){
    case 1:
        sueldo=2000;

        if(extraH>=20){
            bono=500;
        }
    break;
    case 2:
        sueldo=3000;
    break;
    case 3:
        sueldo=4000;

        if(extraH>=30){
            bono=1000;
        }
    break;
    default: 
    alert("No es una opcion valida");
}

sueldo=sueldo+bono;

if(sueldo>4000){
    alert("su sueldo es de :"+sueldo+" \nEste sueldo supera los uss 4000\n");
}else{
    alert("su sueldo es:" + sueldo);
}