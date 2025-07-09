// Operador Ternário em Node.js (JavaScript)
// -----------------------------------------
// O operador ternário é uma forma curta de fazer uma decisão (if/else) em uma única linha.
// Sua estrutura é:
//   condição ? valor_se_verdadeiro : valor_se_falso;

// Exemplos:
let idade = 18;

// Se idade for maior ou igual a 18, retorna "Maior de idade", senão retorna "Menor de idade"
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status); // "Maior de idade"

// Também pode ser usado para executar funções ou atribuir valores rapidamente:
let podeVotar = idade >= 16 ? true : false;
console.log(podeVotar); // true

// Dica: Use o operador ternário para deixar o código mais enxuto quando a decisão for simples!
