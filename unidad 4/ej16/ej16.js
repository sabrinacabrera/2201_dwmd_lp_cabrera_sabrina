/*
Se le solicita al usuario que ingrese un número. 
Realice un programa para informar 
si el número es múltiplo de 3.
*/

var num;

num=Number(prompt("Ingrese un numero: "));

if(num==0){
    alert("El numero es cero");
}else{

    if(num%3 ==0){
        alert("El numero es multiplo de 3 ");
    }else{
        alert("El numero no es multiplo de 3");
    }

}