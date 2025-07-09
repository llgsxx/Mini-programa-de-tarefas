// Laço de Repetição FOR em Node.js (JavaScript)
// ---------------------------------------------
// O laço for é usado para repetir um bloco de código um número específico de vezes.
// Muito útil para percorrer arrays, executar ações em sequência, etc.

// Sintaxe básica:
// for (inicialização; condição; incremento) {
//     // Código a ser executado em cada repetição
// }

// Exemplo prático: Imprimir os números de 1 a 5
for (let i = 1; i <= 5; i++) {
  console.log("Número:", i);
}

// Também pode ser usado para percorrer arrays:
let frutas = ["maçã", "banana", "uva"];

for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta:", frutas[i]);
}

// Dica: O for é ideal quando você sabe exatamente quantas vezes deseja repetir o bloco de código!
