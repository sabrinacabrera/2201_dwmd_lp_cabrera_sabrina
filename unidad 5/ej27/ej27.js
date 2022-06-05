/*
. Como resultado de una encuesta se recogen los siguientes datos: sexo (H: Hombre, 
M: Mujer), edad (en años) y altura (en centímetros). Realice un programa para calcular 
e informar: 
a. El porcentaje de mujeres mayores a 25 años. 
b. El porcentaje de hombres menores de 18 años.
c. El promedio de edad de las mujeres. 
d. El promedio de altura de los hombres. 
e. La menor edad ingresada. 
f. La mayor altura ingresada 
*/
var sexo;
var edad;
var altura;
var salir='n'
var continuar;
var flagE=0;
var flagA=0;
var contM=0;
var acumEdadM=0;
var contH=0;
var acumAltH=0;
var promAltH;
var promEdadM;
var contH18=0;
var porcHombres;
var auxHom;
var contM25=0;
var auxM;
var porcMujeres;
do{
    edad=Number(prompt("Ingrese edad \n"));
    sexo=prompt("ingrese sexo f/m \n");
    altura=Number(prompt("ingrese altura \n"));
    
    
    if(sexo=='m'){
        contH++;
        acumAltH=acumAltH+altura;  
        if(edad<18){
            contH18++; //cuenta la cantidad de hombres menores de 18
        }     
    }

    if (sexo=='f') {
        contM++;
        acumEdadM=acumEdadM+edad;
        if(edad>25){
            contM25++;
        }
    }
    //menor edad
    if(flagE==0){
        min=edad;
        flagE=1;
    }else{      
        
        if(edad<min){
            min=edad;
        }           
    }
    //mayor altura
    if(flagA==0){
        max=altura;
        flagE=1;
    }else{      
        
        if(altura>max){
            max=altura;
        }           
    }
    continuar=prompt("Desea continuar? s/n :");
    if(continuar=='n'){

        salir='s';
    }
}while(salir!='s');

promAltH= acumAltH/contH; //promedio de altura de hombres
promEdadM=acumEdadM/contM; //promedio edad mujeres

auxHom= contH18*100;
porcHombres=auxHom/contH; //porcentaje de hombres <18

auxM=contM25*100;
porcMujeres=auxM/contM;

alert("a.El porcentaje de mujeres mayores a 25 años es "+porcMujeres+"\nb.El porcentaje de hombres menores de 18 años es "+porcHombres+ "\nc.El promedio de edad de las mujeres es "+promEdadM+"\nd.El promedio de altura de los hombres es  "+promAltH+"\ne.La menor edad ingresada es " +min+"\nf.La mayor altura ingresada es "+max);
