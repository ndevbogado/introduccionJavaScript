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
