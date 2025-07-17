// ================================
// Objetos em Node.js / JavaScript
// ================================

// O que é um objeto?
// ------------------
// Um objeto é uma estrutura que armazena dados em pares "chave: valor".
// Muito usado para representar entidades do mundo real (pessoa, produto, configuração, etc).

// Como criar um objeto:
let pessoa = {
  nome: "Bianca",
  idade: 28,
  profissao: "Desenvolvedora",
  habilidades: ["JavaScript", "Node.js", "n8n"],
  endereco: {
    cidade: "São Paulo",
    estado: "SP",
  },
};

// Como acessar propriedades:
console.log(pessoa.nome); // "Bianca"
console.log(pessoa["idade"]); // 28
console.log(pessoa.habilidades[1]); // "Node.js"
console.log(pessoa.endereco.cidade); // "São Paulo"

// Modificar valores:
pessoa.idade = 29;
pessoa["profissao"] = "Engenheira de Software";

// Adicionar nova propriedade:
pessoa.email = "bianca@email.com";

// Remover propriedade:
delete pessoa.email;

// =========================
// MÉTODOS EM OBJETOS
// =========================

// Objetos podem ter métodos (funções associadas ao objeto)
let calculadora = {
  somar: function (a, b) {
    return a + b;
  },
  multiplicar(a, b) {
    return a * b; // sintaxe abreviada
  },
};

console.log(calculadora.somar(2, 3)); // 5
console.log(calculadora.multiplicar(4, 5)); // 20

// =========================
// PERCORRENDO OBJETOS
// =========================

// For...in para percorrer chaves
for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

// Object.keys() retorna um array com as chaves do objeto
console.log(Object.keys(pessoa)); // ["nome", "idade", "profissao", "habilidades", "endereco"]

// Object.values() retorna um array com os valores
console.log(Object.values(pessoa)); // ["Bianca", 29, "Engenheira de Software", ["JavaScript",...], {...}]

// Object.entries() retorna array de arrays [chave, valor]
console.log(Object.entries(pessoa));
// [["nome","Bianca"],["idade",29],["profissao","Engenheira de Software"],...]

// =========================
// OBJETOS DE OBJETOS (ANINHADOS)
// =========================
let empresa = {
  nome: "Tech Corp",
  funcionarios: [
    { nome: "Ana", cargo: "dev" },
    { nome: "Carlos", cargo: "designer" },
  ],
};
console.log(empresa.funcionarios[0].nome); // "Ana"

// =========================
// EXTRAS
// =========================

// Clonar objeto (shallow copy)
let copiaPessoa = { ...pessoa }; // spread operator
let copiaPessoa2 = Object.assign({}, pessoa);

// Mesclar objetos
let complemento = { salario: 5000 };
let pessoaCompleta = { ...pessoa, ...complemento };

// Checar se uma propriedade existe
console.log("idade" in pessoa); // true

// Remover todas as propriedades
for (let key in pessoa) {
  delete pessoa[key];
}

// =========================
// RESUMO
// =========================
// - Objetos armazenam pares chave: valor.
// - Permitem fácil modelagem de dados e métodos.
// - Manipulação com métodos nativos e sintaxe prática.

// Para saber mais: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object
