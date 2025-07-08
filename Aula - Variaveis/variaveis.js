// Variáveis em JavaScript (Node.js)
// ---------------------------------
// Uma variável serve para guardar um valor na memória do computador.
// Você pode usar variáveis para armazenar números, textos, objetos, arrays, etc.

// Existem 3 formas principais de declarar variáveis: var, let e const

// 'var' é a forma mais antiga (evite usar em código moderno)
// 'let' permite criar variáveis que podem mudar de valor
// 'const' cria variáveis cujo valor NÃO pode ser reatribuído (constante)

// Exemplo com 'let':
let nome = "Lucas"; // Aqui, a variável nome recebe o texto "Lucas"
let idade = 25; // A variável idade recebe o número 25

// Você pode alterar o valor de uma variável declarada com 'let':
idade = 26; // Agora, idade vale 26

// Exemplo com 'const':
const PI = 3.14159; // PI não pode ser alterado depois de declarado

// Exibir no terminal:
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Valor de PI:", PI);

// Dica: Use 'let' para valores que mudam, e 'const' para valores fixos!
