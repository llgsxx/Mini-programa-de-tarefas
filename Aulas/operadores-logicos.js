// Operadores Lógicos em Node.js (JavaScript)
// -------------------------------------------
// Operadores lógicos são usados para combinar expressões e tomar decisões mais complexas.
// Eles retornam true (verdadeiro) ou false (falso), dependendo do resultado das comparações.

// Principais operadores:
/*
    &&   E lógico (AND)        — Retorna true se as duas condições forem verdadeiras.
    ||   OU lógico (OR)        — Retorna true se pelo menos uma das condições for verdadeira.
    !    NÃO lógico (NOT)      — Inverte o valor lógico da expressão (true vira false, e vice-versa).
*/

// Exemplos práticos:
let a = 5;
let b = 10;

// AND (&&): só é true se as duas forem verdadeiras
console.log(a > 0 && b > 0); // true (5 > 0 E 10 > 0)

// OR (||): é true se pelo menos uma for verdadeira
console.log(a > 0 || b < 0); // true (5 > 0 OU 10 < 0)

// NOT (!): inverte o resultado lógico
console.log(!(a > 0)); // false (a > 0 é true, !true = false)

// Dica: Use operadores lógicos para criar condições mais flexíveis e inteligentes em seu código!
