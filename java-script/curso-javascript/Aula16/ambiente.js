let num = [5, 8, 2, 9, 3]
num[3] = 6 // Substitui o valor do índice 3 por 6
num.push(7) // Adiciona o valor 7 ao final do array

//num.sort() // Organiza os elementos do array em ordem crescente 
/*
console.log(`O valor do array é: ${num.length}`)
console.log(`O primeiro valor do array é: ${num[0]}`)
console.log(`O array em ordem crescente é: ${num.sort()}`)
console.log(`O array em ordem decrescente é: ${num.sort().reverse()}`)
console.log(`O array completo é: ${num}`)
*/
/*
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}