const prompt = require('prompt-sync')();

const aString = prompt('Digite o primeiro valor: ');
const A = Number(aString);

const bString = prompt('Digite o segundo valor: ');
const B = Number(bString);

const cString = prompt('Digite o terceiro valor: ');
const C = Number(cString);

const R = (A+B)*(A+B);
const S = (B+C)*(B+C);
const D = (R+S)/2;

console.log(`O resultado da expressão é ${D}.`);