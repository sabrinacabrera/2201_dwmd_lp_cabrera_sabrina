/*
Realizar un sistema para el cálculo de sueldos de una empresa. 
Se le solicita que ingrese el valor de la hora y 
la cantidad de horas trabajadas en el mes. 
*/

var sueldo;
var valHora;
var horasT;

valHora=Number(prompt("ingrese el valor de las horas: \n"));
horasT=Number(prompt("ingrese el valor de las horas trabajadas por mes :\n"));

sueldo=valHora*horasT;

alert("El sueldo es :$ "+sueldo);