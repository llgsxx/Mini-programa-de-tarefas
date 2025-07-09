// Estrutura Condicional IF ELSE em Node.js (JavaScript)
// -----------------------------------------------------
// A estrutura if...else permite executar diferentes blocos de código dependendo se uma condição é verdadeira (true) ou falsa (false).

// Sintaxe básica:
// if (condição) {
//     // Código executado se a condição for verdadeira
// } else {
//     // Código executado se a condição for falsa
// }

// Exemplo prático:
let idade = 17;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

// Também é possível usar "else if" para testar múltiplas condições:
if (idade < 12) {
  console.log("Criança");
} else if (idade < 18) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}

// Dica: Use if...else para tomar decisões no seu código de acordo com diferentes cenários!
