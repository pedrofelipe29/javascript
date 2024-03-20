/*
  Dica:

  - Alguns exercícios utilizarão métodos, propriedades e funcionalidades vistos  
    no começo do curso. Se for necessário, reveja partes das aulas anteriores  
    para relembrar.
*/

/*
  01

  - Converta a função abaixo em uma arrow function e utilize-a para exibir um  
    valor no console.
*/

const convertToString = (value) => String(value);
const number = 42;
console.log(convertToString(number));

  
  /*
    02
  
    - Crie uma função que retorne a quantidade de caracteres que uma string  
      recebida por parâmetro possui.
  */
      const countCharacters = (str) => {
        return str.length;
    };

    const minhaString = "Chama";
    console.log("chama:", countCharacters(minhaString));
    
  /*
    03
  
    - Crie uma função que retorne todos os caracteres de uma string em letras  
      minúsculas;  
    - Utilize a função para exibir a string abaixo no console.
  
    "CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO"
  */
   const toLowerCase = (str) => {
        return str.toLowerCase();
    };
    const suaString = "CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO";
    console.log(toLowerCase(minhaString));
    
  /*
    04
  
    - Crie uma função que recebe 2 parâmetros: um caractere e uma string;
    - Ao ser invocada, a função deve retornar o index do caractere na string.
  */
  const findCharacterIndex = (character, str) => {
    return str.indexOf(character);
};

const meuCaractere = "O";
const umastring = "CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO";
console.log("Index do caractere na string:", findCharacterIndex(meuCaractere, umastring));

  /*
    05
  
    - Crie uma função que, ao ser invocada, retorna um boolean indicando se o item  
      passado por argumento existe no array (também passado por argumento).
  */
     const itemExistsInArray = (item, array) => {
        return array.includes(item);
    };

    const pedroArray = ["maçã", "banana", "laranja", "uva"];
    const item = "laranja";
    console.log("O item existe no array?", itemExistsInArray(item, pedroArray));
  /*
    06
  
    - Crie uma função que retorna a concatenação de 2 arrays, passados como  
      argumentos em sua invocação;
  */
     const concatenateArrays = (array1, array2) => {
        return array1.concat(array2);
    };
    
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    console.log("Concatenação dos arrays:", concatenateArrays(array1, array2));
    
  /*
    07
  
    - Crie uma função que retorna o array passado como argumento em sua invocação,  
      mas com o último item removido.
  */
      const removeLastItem = (array) => {
        return array.slice(0, -1);
    };
    
    const meuArray = [1, 2, 3, 4, 5];
    console.log("Array com o último item removido:", removeLastItem(meuArray));
    
  /*
    08
  
    - Crie uma função que retorna se o valor passado como argumento em sua  
      invocação é null.
  */
      const isNull = (value) => {
        return value === null;
    };
    
    const meuValor1 = null;
    const meuValor2 = 42;
    console.log("É null?", isNull(meuValor1));
    console.log("É null?", isNull(meuValor2));
    
  /*
    09
  
    - Crie uma função que apenas invoca uma função de callback recebida por  
      parâmetro;
    - Crie outra função que apenas exibe seu nome no console;
    - Invoque a função que recebe um callback por parâmetro, passando como  
      argumento a função que exibe seu nome no console e veja se o nome realmente  
      foi exibido.
  */
const invokeCallback = (callback) => {
    callback();
};

const displayMyName = () => {
    console.log("Meu nome é pedro.");
};

invokeCallback(displayMyName);

  /*
    10
  
    - Crie uma função que invoca uma função de callback recebida por parâmetro.  
      A invocação da função recebida por parâmetro deve receber um valor como  
      argumento;
    - Crie uma função que retorna o triplo de um número recebido por parâmetro;
    - Faça com que a invocação da função descrita no 1º item deste exercício (10)  
      resulte no triplo de 33.
  */
const invokeCallbackWithValue = (callback, value) => {
    return callback(value);
};

const triple = (number) => {
    return number * 3;
};

const resultado = invokeCallbackWithValue(triple, 33);
console.log(resultado);

  /*
    11
  
    - Utilizando um forEach, baseado no array "numbers", a cada iteração, exiba a  
      mensagem abaixo no console, substituindo os "X" pelas informações corretas;
    
    "O Xº item do array [X, X, X] é X."
  */
  
    const numbers = [1, 2, 3];
    numbers.forEach((number, index) => {
        console.log(`O ${index + 1}º item do array [${numbers}] é ${number}.`);
    });
    
  /*
    12
  
    - Converta o for loop abaixo em um forEach;
    - Após a conversão, verifique se a cópia do array lettersCopy realmente foi  
      criada.
  */
  
 const letters = ['v', 'e', 'p'];
let lettersCopy = [];

letters.forEach(letter => {
  lettersCopy.push(letter);
});

console.log(lettersCopy);
