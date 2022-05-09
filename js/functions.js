function suma(){
    var A = 0;
    var B = 0;
    var suma = 0;
    alert ("Este algoritmo realiza una suma de dos valores ingresados  por el usuario");

    A = parseInt(prompt("por favor ingrese el primer numero para sumar"));
    B = parseInt(prompt("por favor ingrese el segundo numero para sumar"));

    suma= A + B;
    alert ("el resultado de la suma es" +suma);

}

function operaciones(){
    var A = 0;
    var B = 0;
    var  suma,resta,multi,divi;
alert ("este algoritmo realiza una suma,resta,multiplicacion,division");

A = parseInt(prompt("porfavor escriba el primer numero para hacer los calculos"));
B = parseInt(prompt("porfavor escriba el segundo numero para hacer los calculos"));

suma =   A + B
resta =  A - B
multi = A * B
divi = A / B

alert("el resultado de la suma es" + suma)
alert("el resultado de la rest es" + resta)
alert("el resultado de la multi es" + multi)
alert("el resultado de la divi es" + divi)
}



function NMA(){
var A = 0
var B = 0
var NM = 0
alert(" este algoritmo determina el mayor de dos números ingresados por el usuario")

A = parseFloat(prompt("por favor ingrese el primer numero"))
B = parseFloat(prompt("por favor ingrese el segundo numero"))
NM = A>B;
if (A>B) {
    alert ("el primer numero es mayor")
} 
else {
    alert ("el segundo numero es mayor")
}
}


function NME(){
var A = 0
var B = 0
var C = 0
var D = 0
alert("este algorit modetermina el menor de tres numeros ingresados por el usuario")

A = parseFloat(prompt("por favor ingrese el primer numero"))
B = parseFloat(prompt("por favor ingrese el segundo numero"))
C = parseFloat(prompt("por favor ingrese el tercer numero"))

if ((A<=B) && (A<=C)) {
    alert ("el primer numero es menor")
}
else if ((B<=A) && (B<=C)) {
    alert ("el segundo numero es menor")
}
else if ((C<A) && (C<B)) {
    alert ("el tercer numero es menor")
}
}



function PAR(){
    var A = 0
    var B = 0
    var parimpar = 0

    A = parseInt(prompt("ingrese el primer valor a comparar"));
    B = parseInt(prompt("ingrese el segundo valor a comparar"));
    parimpar = A<B 

    if((A<B)){
        alert ("el valor es par");
    }
    else{
        alert(("el valor es impar"));
    }
}
