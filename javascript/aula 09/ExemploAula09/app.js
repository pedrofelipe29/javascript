/*
Arrow functions; 
ForEach e Callback; 
Utilizando Callbacks; 

*/

// Arrow functions

/* Isto é uma função tradicional */
let dobrarFunc = function (numero) {
    return numero * 2;
}

let resultado = dobrarFunc(200);
console.log(resultado);


/* Isto é uma Arrow function */
let dobrarFuncArrow = (numero) => {
    return numero * 2;
}

resultado = dobrarFuncArrow(10);
console.log(resultado);

/* Isto é uma Arrow function com retorno implícito */
let dobrarFuncArrowImplicita = numero => numero * 2;

resultado = dobrarFuncArrowImplicita(500);
console.log(resultado);

// ForEach 

// Função de callback a ser chamada
let printer = array => console.log(`Item: ${array}`);

let saoJoaoFoods = ['Pamonha', 'Canjica', 'Pé de moleque', 'Tapioca', 'Milho assado'];

saoJoaoFoods.forEach(printer);