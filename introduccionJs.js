/* 
#############################################################################################
#                                     DATOS EN JAVASCRIPT                                   #
#############################################################################################
*/

/*

Las variables con datos primitivos son aquellas a las que se acceden directamente, mientras
que las variables con datos compuestos, son aquellas con las que se acceden mediante a la 
referencia del valor.

- DATOS PRIMITIVOS:
    string, number, boolean, null, undefined, NaN.

- DATOS COMPUESTOS:
    objects={}, arrays=[], functions(){}, Class{}

 */

/* 
#############################################################################################
#                                     VARIABLES EN JAVASCRIPT                               #
#############################################################################################
*/


//  VAR -----------------------------------------------------------------------------------
/*
var genera variable globales y las almacena en el objeto 'GLOBAL' o 'WINDOW',
por lo que es calificado como mala práctica. Además JS recurre al concepto de 'HOISTING',
el cual es de elevación de varaibles globales de bloques. Dicho en otras palabras, el 
compilador de JS eleva el 'scope' de toda variable de tipo 'var' al objeto global.
*/

console.log("#################-var-####################");
var globalScopeVar;
globalScopeVar = "global";
console.log(`Current variable Scope (body): ${globalScopeVar}`);
{
 var globalScopeVar = "changed to local"
 console.log(`Current variable Scope (block): ${globalScopeVar}`);
}
console.log(`Current variable Scope (body): ${globalScopeVar}`);



//  LET ------------------------------------------------------------------------------------

/*
Por el contrario, a las varialbes del tipo 'let' no se les aplica el concepto de hoisting,
ya que son variables con un alcance o "scope" de bloque. Es de buena práctica utilizar este
tipo de variable para evitar errores.
*/

console.log("#################-let-####################");

let globalScopeLet;
globalScopeLet = "global";
console.log(`Current variable Scope (body): ${globalScopeLet}`);
{
 let globalScopeLet = "changed to local"
 console.log(`Current variable Scope (block): ${globalScopeLet}`);
}
console.log(`Current variable Scope (body): ${globalScopeLet}`);



// CONST -----------------------------------------------------------------------------------
// NOTA: las constantes se deben declarar e inicializar en la misma línea de código.

const constantePrimitiva = "Las constantes con valores primitivos no se pueden cambiar.";

const constanteCompuesta = [1, 2 , 3, 4] ;
console.log(constanteCompuesta);

constanteCompuesta[0] = "valores internos no constantes";
constanteCompuesta.push("la longitud de constantes compuestas es variable");
constanteCompuesta.push("El tipo de objeto no cambia, más allá que lo modifiqué");

console.log(constanteCompuesta);


/* 
#############################################################################################
#                                     VARIABLES PRIMITIVAS                                  #
#############################################################################################
*/

// STRING ----------------------------------------------------------------------------------

let lastName = "Bogado D.";
let firstName = 'Nahuel';

let lorem = 
"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat omnis atque recusandae eaque odit accusamus nostrum mollitia minima enim? Repellat?";
console.log(lorem);

lastName = lastName.toLowerCase();
firstName = firstName.toUpperCase();
console.log(
    lastName,
    firstName,
    lorem.includes("?"),
    lorem.trim(),
    lorem.split("l")
    );

// INTERPOLACION DE VARIABLES
console.log("Hola mi nombre es " + lastName + " " + firstName + ".");

console.log(`Hola mi nombre es ${lastName} ${firstName}.`);


// NUMBER ----------------------------------------------------------------------------------

/*
En JavaScript no hay distinción de tipos de números: ya sea float, int, decimal, etc.
Todos recaen en la categoría de 'number'. Los formularios que recibe JS, debo realizar un 
"Casting" de datos, o una conversión del tipo de dato.
*/

let numeroInt = 10;
let numeroFloat = 10.01;
let stringifiedNumber = "10";

console.log(numeroFloat.toFixed(5)); // Método con el que se muestra el número con una cantidad
                                    // de cifras significativas
console.log(parseInt(numeroFloat)); //Método con el cual se obtiene la parte entera del float

console.log(numeroInt + numeroFloat);
console.log(numeroInt + stringifiedNumber);
console.log(numeroInt + parseFloat(stringifiedNumber));


// BOOLEAN ----------------------------------------------------------------------------------
// Los valores Trusthy y falsy son valores que tienden a verdaderos o falsos (buscar en mdn).

let verdadero = true;
let falso = false;

// DATOS PROPIOS DE JAVASCRIPT --------------------------------------------------------

let indefinida; //undefined: variable vacia asignada por JavaScript (la variable no se ha ini
// cializado y por lo tanto el valor está ausente).
let nulo = null; //variable vacia intencionalmente por el programador

let noEsUnNumero = "hola" * 2;
console.log(noEsUnNumero);


/* 
#############################################################################################
#                                     VARIABLES COMPUESTAS                                  #
#############################################################################################
*/

// FUNCIONES ---------------------------------------------------------------------------

/*
Una Funcion es un bloque de código que es declarado solo una vez y puede reutilizarse o 
ejecutarse las veces requeridas. Puede recibir y devolver valores.
*/ 

//Declaracion de funciones

function estoEsUnaFuncion(){

    console.log("uno");

    console.log("dos");
    
    console.log("tres");

    console.log("CUATROOOOO");

    return ("Esta función ha retornado una línea de texto");

}

//Expresión de funciones: MEJOR PRÁCTICA

// funcionExpresada();
const funcionExpresada = function(){
    console.log("Esto es una funcion expresada, es decir, una funcion que se le ha asignado como valor a una variable, si invocamos a esta función antes de su definición Js nos dirá un error.");
}

//Invocación de una Función

const valorDeFuncion = estoEsUnaFuncion();

console.log(valorDeFuncion);

saludar ("Nahuel D. Bogado", 24);

function saludar(nombre, edad){
    console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
}


/*
NOTA IMPORTANTE: JS realiza un hoisting en tiempo de ejecución, por lo que esto afecta a todas
las funciones declaradas en el código, las cuales pueden ser inicializadas antes de su decla
racion a través de este sistema.
*/