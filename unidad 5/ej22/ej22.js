/*
Se le solicita al usuario que ingrese 3 números. 
Realice un programa para informar 
si el número es múltiplo de 3, múltiplo 5, 
múltiplo de ambos o múltiplo de ninguno.
*/
var num;
var contador=1;

do{
    num=Number(prompt("Ingrese un numero"));

    if(num%3==0 && num%5==0){

        alert("El numero es multiplo de 3 y 5\n");

    }else{
        if(num%3==0){
            alert("El numero es multiplo de 3 ");
        }
        if(num%5==0){
            alert("El numero es multiplo de 5 ");
        }
    }
  contador ++;
}while(contador<4);