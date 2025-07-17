// ================================
// Arrays em Node.js / JavaScript
// ================================

// O que é um array?
// -----------------
// Um array é uma estrutura de dados que armazena vários valores em uma única variável.
// Cada valor é chamado de elemento e pode ser acessado por seu índice (posição), começando do zero.

// Como criar um array:
let frutas = ["maçã", "banana", "uva"]; // array de strings
let numeros = [1, 2, 3, 4, 5]; // array de números
let misto = [1, "texto", true, null]; // array com vários tipos

// Acessando elementos:
console.log(frutas[0]); // "maçã"
console.log(frutas[2]); // "uva"

// Modificando elementos:
frutas[1] = "laranja"; // agora frutas = ["maçã", "laranja", "uva"]

// Propriedade .length – quantidade de elementos no array
console.log(frutas.length); // 3

// =========================
// MÉTODOS PRINCIPAIS
// =========================

// .push() - adiciona elemento ao final do array
frutas.push("abacaxi"); // frutas = ["maçã", "laranja", "uva", "abacaxi"]

// .pop() - remove o último elemento do array e retorna ele
let removido = frutas.pop(); // removido = "abacaxi", frutas = ["maçã", "laranja", "uva"]

// .unshift() - adiciona elemento no início do array
frutas.unshift("morango"); // frutas = ["morango", "maçã", "laranja", "uva"]

// .shift() - remove o primeiro elemento do array e retorna ele
let primeiro = frutas.shift(); // primeiro = "morango", frutas = ["maçã", "laranja", "uva"]

// .map() - cria um novo array aplicando uma função a cada elemento
let frutasMaiusculas = frutas.map((f) => f.toUpperCase()); // ["MAÇÃ", "LARANJA", "UVA"]

// .filter() - cria um novo array só com os elementos que passam no teste
let frutasComA = frutas.filter((f) => f.includes("a")); // ["maçã", "laranja", "uva"]

// .forEach() - executa uma função para cada elemento (não retorna novo array)
frutas.forEach((f) => console.log(f)); // imprime cada fruta

// .find() - retorna o primeiro elemento que satisfaz uma condição (ou undefined)
let primeiraComU = frutas.find((f) => f.includes("u")); // "uva"

// .indexOf() - retorna o índice do elemento ou -1 se não encontrar
let indice = frutas.indexOf("uva"); // 2

// .includes() - retorna true se o array contém o elemento
let temLaranja = frutas.includes("laranja"); // true

// .slice() - retorna uma cópia parcial do array
let duasPrimeiras = frutas.slice(0, 2); // ["maçã", "laranja"]

// .splice() - altera o array original (remove e/ou adiciona elementos)
frutas.splice(1, 1, "melancia"); // remove 1 elemento a partir do índice 1 e adiciona "melancia"
// frutas agora = ["maçã", "melancia", "uva"]

// =========================
// ARRAYS MULTIDIMENSIONAIS
// =========================
// Arrays podem conter outros arrays (matrizes)
let matriz = [
  [1, 2],
  [3, 4],
];
console.log(matriz[1][0]); // 3

// =========================
// PERCORRENDO ARRAYS
// =========================
// For tradicional
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// For...of (moderno)
for (let fruta of frutas) {
  console.log(fruta);
}

// =========================
// EXTRAS
// =========================
// Clonando arrays:
let copia = frutas.slice(); // nova cópia de frutas

// Juntando arrays:
let todos = frutas.concat(["pera", "abacate"]); // ["maçã", "melancia", "uva", "pera", "abacate"]

// Convertendo array em string:
console.log(frutas.join(", ")); // "maçã, melancia, uva"

// =========================
// RESUMO
// =========================
// - Array é uma lista de valores acessados por índice
// - Permite adicionar, remover, modificar e percorrer elementos
// - Possui muitos métodos nativos úteis para manipulação

// Para saber mais: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
