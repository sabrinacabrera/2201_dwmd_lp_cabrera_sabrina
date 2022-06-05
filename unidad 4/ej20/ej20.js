/*
Se le solicita al usuario que ingrese los tres lados de un triángulo. Realice el 
algoritmo para informar si el triángulo es equilátero, isósceles o escaleno. 
*/

var lado1;
var lado2;
var lado3;

lado1=Number(prompt("Ingrese el lado 1 "));
lado2=Number(prompt("Ingrese el lado 2 "));
lado3=Number(prompt("Ingrese el lado 3 "));

if(lado1==lado2 && lado1==lado2 && lado1==lado3){
        alert("El triangulo es equilatero\n");

}else{
        if(lado1!=lado2 && lado1!=lado3 && lado2!=lado3)
        {
            alert("El triangulo es escaleno\n");

        }else{

            alert("El triangulo es isoceles\n");
        }
    }
