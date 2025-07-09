// Operadores de Comparação em Node.js (JavaScript)
// ------------------------------------------------
// Operadores de comparação são usados para comparar dois valores e retornar true (verdadeiro) ou false (falso).
// Eles são muito usados em estruturas condicionais, como if e loops.

/*
    ==   Igual a                  (x == y)   // true se x for igual a y (compara só o valor)
    ===  Estritamente igual a     (x === y)  // true se x for igual a y (valor e tipo)
    !=   Diferente de             (x != y)   // true se x for diferente de y
    !==  Estritamente diferente   (x !== y)  // true se x ou o tipo forem diferentes de y
    >    Maior que                (x > y)    // true se x for maior que y
    <    Menor que                (x < y)    // true se x for menor que y
    >=   Maior ou igual a         (x >= y)   // true se x for maior ou igual a y
    <=   Menor ou igual a         (x <= y)   // true se x for menor ou igual a y
*/

// Exemplos práticos:
let a = 5;
let b = "5";
let c = 8;

console.log(a == b); // true   (mesmo valor, tipos diferentes)
console.log(a === b); // false  (tipos diferentes)
console.log(a != c); // true   (5 é diferente de 8)
console.log(a !== b); // true   (tipo diferente)
console.log(c > a); // true   (8 é maior que 5)
console.log(a <= b); // true   (valores iguais)

// Dica: use === e !== para evitar confusões de tipo!
