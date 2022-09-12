const prompt = require('prompt-sync')();

const valorDoCarroSprint = prompt('Digite o valor do carro: ');
const valorCar = Number(valorDoCarroSprint);

const imposto = (valorCar*45)/100;
const distribuidor = (valorCar*28)/100;
const valorTotal = valorCar+imposto+distribuidor;

console.log(`Valor do carro: ${Math.round(valorCar)}`);
console.log(`Valor da distribuidora: ${Math.round(distribuidor)}`);
console.log(`Valor do imposto: ${Math.round(imposto)}`);
console.log(`Valor total do carro com imposto e distruidora: ${Math.round(valorTotal)}`);


