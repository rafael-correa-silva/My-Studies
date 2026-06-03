var nome = 'Rafael';

if (nome == 'Rafael') { // O operador de comparação == verifica se o nome é igual a "Rafael"
    console.log("Olá, Rafael!");

} else if (nome == 'Maria') { // O operador de comparação == verifica se o nome é igual a "Maria"
    console.log("Olá, Maria!");
} else if  (nome == 'João') { // O operador de comparação == verifica se o nome é igual a "João"
    console.log("Olá, João!");
} else { // O bloco else é executado quando nenhuma das condições anteriores é verdadeira
}  

var idade = 17;

if (idade >= 18) { // O operador de comparação >= verifica se a idade é maior ou igual a 18
    console.log("Você pode tirar habilitação.");
} else if (idade <= 17) { // O operador de comparação <= verifica se a idade é menor ou igual a 17, pode usar somente o < nesse caso porém teria que ser 18 e não 17
    console.log("Você não pode tirar habilitação.");
}