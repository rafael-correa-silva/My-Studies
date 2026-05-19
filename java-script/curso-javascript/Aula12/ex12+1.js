/*
var agora = new Date()
var diaSemana = agora.getDay()

switch (diaSemana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}
*/


var mes = new Date().getMonth()
var agora = new Date()
var diaSemana = agora.getDay()
switch (mes) {
    case 0:
        console.log('Estamos em Janeiro')
        console.log('O dia de hoje é Domingo')
        break
    case 1:
        console.log('Estamos em Fevereiro')
        console.log('O dia de hoje é Segunda')
        break
    case 2:
        console.log('Estamos em Março')
        console.log('O dia de hoje é Terça')
        break
    case 3:
        console.log('Estamos em Abril')
        console.log('O dia de hoje é Quarta')
        break
    case 4:
        console.log('Estamos em Maio')
        console.log('O dia de hoje é Quinta')
        break 
    case 5:
        console.log('Estamos em Junho')
        console.log('O dia de hoje é Sexta')
        break
    case 6:
        console.log('Estamos em Julho')
        console.log('O dia de hoje é Sábado')
        break
    case 7:
        console.log('Estamos em Agosto')
        console.log('[ERRO] Dia inválido!')
        break
    case 8:
        console.log('Estamos em Setembro')
        break
    case 9:
        console.log('Estamos em Outubro')
        break
    case 10: 
        console.log('Estamos em Novembro')
        break
    case 11:
        console.log('Estamos em Dezembro')
        break
    default:
        console.log('[ERRO] Mês inválido!')
        break
}