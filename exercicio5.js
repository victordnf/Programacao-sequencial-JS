const prompt = require('prompt-sync')();

const nota1String = prompt('Digite sua primeira nota: ')
const nota1 = Number(nota1String)

const nota2String = prompt('Digite sua segunda nota: ')
const nota2 = Number(nota2String)

const nota3String = prompt('Digite sua terceira nota: ')
const nota3 = Number(nota3String)

const notaMedia = ((nota1*2)+(nota2*3)+(nota3*5))/10

console.log(`Sua nota média é: ${notaMedia} pontos`)