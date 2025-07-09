// Estrutura Condicional SWITCH em Node.js (JavaScript)
// ----------------------------------------------------
// A estrutura switch é usada para executar diferentes blocos de código de acordo com o valor de uma variável ou expressão.
// É útil quando há várias opções possíveis, tornando o código mais organizado do que múltiplos if...else.

// Sintaxe básica:
/*
switch (expressao) {
    case valor1:
        // Código executado se expressao === valor1
        break;
    case valor2:
        // Código executado se expressao === valor2
        break;
    // ... outros cases ...
    default:
        // Código executado se nenhum case for satisfeito
}
*/

// Exemplo prático:
let dia = 3;
let nomeDia;

switch (dia) {
  case 1:
    nomeDia = "Domingo";
    break;
  case 2:
    nomeDia = "Segunda-feira";
    break;
  case 3:
    nomeDia = "Terça-feira";
    break;
  case 4:
    nomeDia = "Quarta-feira";
    break;
  case 5:
    nomeDia = "Quinta-feira";
    break;
  case 6:
    nomeDia = "Sexta-feira";
    break;
  case 7:
    nomeDia = "Sábado";
    break;
  default:
    nomeDia = "Dia inválido";
}

console.log("Hoje é:", nomeDia);

// Dica: Não esqueça do 'break' após cada case, para evitar que outros casos sejam executados em sequência!
