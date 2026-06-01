// Hoisting - içamento
//Funções e variáveis são içadas para o topo do código, ou seja, elas são processadas antes da execução do código.

console.log(sobrenome);

var nome = null;
var sobrenome = undefined;

console.log(nome);
console.log(sobrenome);

nome = 'Rafael';
sobrenome = 'Silva';

console.log(nome);
console.log(sobrenome);