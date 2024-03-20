

// Strings e métodos em Strings
let stringExemplo = "Olá, mundo!";
console.log("String original:", stringExemplo); // Output: String original: Olá, mundo!


// Concatenação de Strings
let strParte1 = "Turma de "
let strParte2 = "Programação WEB."
console.log(strParte1 + strParte2);



// Métodos em Strings
console.log("Tamanho da string:", stringExemplo.length); // Output: Tamanho da string: 11
console.log("String em maiúsculas:", stringExemplo.toUpperCase()); // Output: String em maiúsculas: OLÁ, MUNDO!
console.log("String em minúsculas:", stringExemplo.toLowerCase()); // Output: String em minúsculas: olá, mundo!
console.log("Índice da substring 'mundo':", stringExemplo.indexOf("mundo")); // Output: Índice da substring 'mundo': 5
console.log("Substring 'mundo': ", stringExemplo.substring(5)); // Output: Substring 'mundo': mundo!
console.log("Último índice: ", stringExemplo.lastIndexOf('O')) // Output: Último índice: ", 0
console.log("String recortada: ", stringExemplo.slice(0, 3)) // Output: String recortada: , "Olá"
console.log("Substituição na String: ", stringExemplo.replace('Olá', 'Alô')) // "String recortada: ", "Olá"



// Acessando caracteres em determinado índice
console.log("Posicionamento de um caracter:", stringExemplo[3]);


// Numbers
let num1 = 10;
let num2 = 5;
console.log("Soma:", num1 + num2); // Output: Soma: 15
console.log("Subtração:", num1 - num2); // Output: Subtração: 5
console.log("Multiplicação:", num1 * num2); // Output: Multiplicação: 50
console.log("Divisão:", num1 / num2); // Output: Divisão: 2
console.log("Resto da divisão:", num1 % num2); // Output: Resto da divisão: 0

// Template Strings
let nome = "João";
let idade = 25;
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`); // Output: Olá, meu nome é João e tenho 25 anos.


// Marcação de Tipos em JS
console.log('O tipo da let nome é: ', typeof nome)
console.log('O tipo da let idade é: ', typeof idade)
