/*
Realizar un sistema para el cálculo de sueldos de una empresa. Se le solicita que 
ingrese el valor de la hora, la cantidad de horas trabajadas en el mes y los años de 
antigüedad en la empresa. 
Realice un programa para calcular e informar el sueldo mensual del empleado, 
teniendo en 
cuenta que se le asigna un bono mensual igual al 15% del sueldo,por año de 
antigüedad. 
*/

var valHora;
var cantHoras;
var sueldo;
var ant;
var antTotal;
var antAnios;
var sueldoFinal;

valHora=Number(prompt("Ingrese el valor de la hora : "));
cantHoras=Number(prompt("Ingrese cantidad de horas trabajadas : "));
antAnios=Number(prompt("Ingrese años de antiguedad: "));

sueldo=valHora*cantHoras;
ant=sueldo*0.15;
antTotal=ant*antAnios;
sueldoFinal=sueldo+antTotal;

alert("El sueldo es : $ "+sueldoFinal);
