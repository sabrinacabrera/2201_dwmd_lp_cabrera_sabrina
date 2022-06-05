/*
Se le solicita al usuario que ingrese un número. 
Realice un programa para informar 
si el número es cero, par o impar. 
*/

var num;

num=Number(prompt("Ingrese un numero: "));

if(num==0){
    alert("El numero es cero");
}else{

    if(num%2 ==0){
        alert("El numero es par ");
    }else{
        alert("El numero es impar");
    }

}