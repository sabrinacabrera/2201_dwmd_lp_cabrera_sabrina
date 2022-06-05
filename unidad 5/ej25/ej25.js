/*
Se le solicita al usuario que ingrese las notas del parcial de los alumnos de una 
comisión. Se desconoce la cantidad de alumnos. Realice el algoritmo para informar: 
a. El porcentaje de alumnos aprobados (nota igual o superior a 4). 
b. El porcentaje de alumnos desaprobados (nota inferior a 4). 
c. El promedio de las notas. 
Tenga en cuenta que solamente las notas pueden ir del 1 al 10. 
*/
var nota;
var contAlumnosA=0;
var contAlumnosD=0;
var contAlumnos=0;
var aproobados;
var desaprobados;
var promedio;
var salir='n'
var continuar;
var acumuladorNotas=0;
var auxD
var auxA;

do{
    
    nota=Number(prompt("Ingrese un nota del alumno del 1 al 10 "));
    
    if(nota>=1 || nota <= 10){
       
        acumuladorNotas=acumuladorNotas+nota;
        contAlumnos++;

        if(nota>=4){
            contAlumnosA++;
        }

        if(nota<=4){
            contAlumnosD++;
        }
    }else{
        alert("numero no valido");
    }
    
    continuar=prompt("Desea continuar? s/n :");

    if(continuar=='n'){

        salir='s';
    }
}while(salir!='s');

promedio=acumuladorNotas/contAlumnos;
auxA=contAlumnos*contAlumnosA
aproobados=auxA/100;
auxD=contAlumnos*contAlumnosD;
desaprobados=auxD/100;

alert("a. El porcentaje de alumnos aprobados (nota igual o superior a 4) es: "+aproobados+"\nb. El porcentaje de alumnos desaprobados (nota inferior a 4) es  "+desaprobados+"\nc. El promedio de las notas es  "+promedio);