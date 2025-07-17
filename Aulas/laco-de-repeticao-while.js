// O laço while executa um bloco de código repetidamente enquanto a condição for verdadeira.
// Sintaxe básica:
// while (condição) {
//   // bloco de código a ser repetido
// }

// Exemplo: imprimir números de 1 a 5 usando while

let contador = 1; // Inicializa a variável de controle

while (contador <= 5) {
  // Enquanto a condição for verdadeira, o bloco abaixo será executado
  console.log(contador); // Exibe o valor atual de contador
  contador++; // Incrementa a variável de controle para evitar loop infinito
}

// Quando contador passa de 5, a condição (contador <= 5) se torna falsa e o laço termina.
