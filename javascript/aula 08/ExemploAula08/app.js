/* 

Entrada de valores;
Funções e métodos: Function declaration e hoisting; 
Argumentos e parâmetros; Retornando valores;

*/

// Function Declaration

function sayHello() {
    console.log('Hello ALRN!');
}

sayHello();

// Function Expression

let showMenu = function () {
    console.log('1. Spaghetti\n2. Pizza\n3.Lasanha\n4.Personalizado');
}

showMenu();

// Hoisting funciona apenas para Function declaration


// Argumentos e parâmetros

let saudacaoInicial = function (nome, sobrenome) {
    console.log(`Olá, ${nome} ${sobrenome}, seja bem vindo!`);
}

saudacaoInicial('Bob', 'Esponja');

// Argumentos padrão

let login = function (nome = 'Sem nome', sobrenome = 'Sem sobrenome') {
    console.log(`Olá, ${nome} ${sobrenome}, login realizado!`);
}

// Passando todos os parâmetros
login('Bob', 'Esponja');

// Passando só um dos parâmetros
login('Bob');

// Sem parâmetros
login();


// Retornando valores
let somar = function (num1, num2) {
    return num1 + num2;
}

console.log(somar(2, 4));

// Entrada de valores

let nome = prompt("Digite seu nome: ");
console.log(nome);