// Operadores de Atribuição em Node.js (JavaScript)
// -------------------------------------------------
// Operadores de atribuição são usados para atribuir valores a variáveis.
// O mais comum é o = (igual), mas existem outras formas para facilitar operações matemáticas e lógicas.

// Exemplos:
/*
    =   Atribuição simples         (x = y)         // x recebe o valor de y
    +=  Soma e atribuição          (x += y)        // x = x + y
    -=  Subtração e atribuição     (x -= y)        // x = x - y
    *=  Multiplicação e atribuição (x *= y)        // x = x * y
    /=  Divisão e atribuição       (x /= y)        // x = x / y
    %=  Módulo e atribuição        (x %= y)        // x = x % y
    **= Exponenciação e atribuição (x **= y)       // x = x ** y
*/

// Exemplo prático:
let x = 5; // x recebe 5
x += 3; // agora x vale 8 (5 + 3)
x -= 2; // agora x vale 6 (8 - 2)
x *= 2; // agora x vale 12 (6 * 2)
x /= 3; // agora x vale 4  (12 / 3)
x %= 3; // agora x vale 1  (4 % 3)
x **= 2; // agora x vale 1  (1 ** 2)

// Use operadores de atribuição para simplificar operações que envolvem o valor atual da variável.
console.log("Valor final de x:", x);
