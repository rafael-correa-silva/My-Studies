var arr = [5, "matheus", true, { teste: 1, teste2: 2, teste3: 3 }];

console.log(arr);
console.log(typeof arr);

var arr2 = [2,3,4,5,6];

console.log(arr2);
console.log(typeof arr2);

console.log(arr2[0]); // Acessando o primeiro elemento do array (índice 0)

arr2[0] = 1; // Alterando o valor do primeiro elemento do array

arr2[0] = "teste"; // Reatribuindo o array para um novo valor

console.log(arr2);
console.log(typeof arr2);