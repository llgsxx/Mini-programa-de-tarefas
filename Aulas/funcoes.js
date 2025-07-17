// Funções são blocos de código reutilizáveis que podem ser definidos uma vez e executados várias vezes.
// Elas recebem parâmetros (opcionais), executam ações e podem retornar um valor.
// Sintaxe básica:
// function nomeDaFuncao(parâmetros) {
//   // bloco de código
//   return valor;
// }

// Exemplo simples de função que soma dois números
function somar(a, b) {
  return a + b; // retorna a soma dos parâmetros
}

// Chamando a função e exibindo o resultado
let resultado = somar(3, 5);
console.log("O resultado da soma é:", resultado);

// Você também pode declarar funções como expressões (funções anônimas) ou arrow functions:
// const multiplicar = (x, y) => x * y;
