var obj = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor",
    estarTrabalhnado: true,
};

console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);
console.log(obj.estarTrabalhnado);

console.log("O meu nome é " + obj.nome + ", tenho " + obj.idade + " anos e sou " + obj.profissao + ".");

obj.nome = "Pedro"; 

console.log(obj.nome); // Alterando o valor da propriedade nome do objeto

console.log(obj); // O objeto é mutável, ou seja, podemos alterar suas propriedades mesmo que ele seja declarado como const.

obj.graduação = true; // Adicionando uma nova propriedade ao objeto

console.log(obj); 