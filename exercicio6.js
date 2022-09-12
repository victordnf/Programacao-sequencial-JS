const prompt = require('prompt-sync')();

const x1String = prompt('Digite o valor de x1: ');
const x1 = Number (x1String);

const y1String = prompt('Digite o valor de y1: ');
const y1 = Number (y1String);

const x2String = prompt('Digite o valor de x2: ');
const x2 = Number (x2String);                                                                       

const y2String = prompt('Digite o valor de y2: ');
const y2 = Number (y2String);

const D =  Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));

console.log(`A distância entre os pontos p1 (${x1}, ${y1}) e p2 (${x1}, ${x2}) é: ${Math.round(D)}.`)