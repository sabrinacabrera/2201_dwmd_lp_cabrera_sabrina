/*
Realizar un sistema para el cálculo de sueldo de una
empresa de seguros. Se le solicita que ingrese el valor 
de la hora, la cantidad de horas trabajadas en el mes, los 
años de antigüedad, la cantidad de seguros vendidos y el 
valor del seguro más caro vendido. 
Realice un programa para calcular e informar el sueldo 
mensual del empleado, 
teniendo en cuenta que se le asigna un bono igual al 
50% del seguro más caro vendido, 
un bono igual al 25% del sueldo por la cantidad de 
seguros vendidos y otro bono igual 
al 15% del sueldo por año de antigüedad. 
Una vez obtenido el sueldo final, calcular e 
informar el valor promedio de la hora del empleado.
*/
var valHora;
var cantHoras;
var sueldo;
var ant;
var antTotal;
var antAnios;
var sueldoFinal;
var cantSeguros;
var valSeguro;
var bonoSeguro;
var bonoCantSeguros;
var auxCantSeguros;
var promValHora;


valHora=Number(prompt("Ingrese el valor de la hora : "));
cantHoras=Number(prompt("Ingrese cantidad de horas trabajadas en el mes : "));
antAnios=Number(prompt("Ingrese años de antiguedad: "));
cantSeguros=Number(prompt("Ingrese cantidad de seguros vendidos: "));
valSeguro=Number(prompt("Ingrese cantidad de seguros vendidos: "));


sueldo=valHora*cantHoras;

ant=sueldo*0.15;
antTotal=ant*antAnios;

bonoSeguro=valSeguro*0.50;

auxCantSeguros=sueldo*0.25;
bonoCantSeguros=auxCantSeguros*cantSeguros;

sueldoFinal=sueldo+antTotal+bonoSeguro+bonoCantSeguros;

promValHora=sueldoFinal/cantHoras;


alert("El sueldo es : $ "+sueldoFinal+ " Y el valor prom de las horas trabajadas es : "+promValHora);