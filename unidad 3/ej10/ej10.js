/*
Se le solicita al usuario que ingrese el diámetro de un
 círculo. Realice un programa 
para calcular e informar el perímetro y el área del círculo.
 Se considerará para este 
ejercicio que el valor de PI será 3.1416. 
*/

var diametro;
var perimetro;
var radio;
var area;
const pi=3.1416;

diametro=prompt("ingrese diametro del circulo: \n");

perimetro=pi*diametro;
radio=diametro/2;
area=(radio*radio)*pi;

alert("El perimetro es "+perimetro+ "\n El area es: "+area);