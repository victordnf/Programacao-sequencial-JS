const prompt = require('prompt-sync')();

const ttdays = prompt('Digite o total de dias que você viveu: ');
const ttdias = Number(ttdays);

const anos =  (ttdias/365);
const meses = (ttdias%365)/30;
const dias = (ttdias%365)%30;

console.log(`Você viveu ${anos} anos, ${meses} meses e ${dias} dias.`);