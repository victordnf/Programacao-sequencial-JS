const prompt = require('prompt-sync')();

const year = prompt('Digite quantos anos você viveu: ');
const anos = Number(year)

const month = prompt('Digite quantos meses você viveu: ');
const meses = Number(month)

const day = prompt('Digite quantos dia você viveu: ');
const dias = Number(day)

const age = 365 * anos + meses * 30 + dias

console.log(`Total de dias vividos: ${age}`);