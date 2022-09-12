const prompt = require('prompt-sync')();

const segundostt = prompt('Digite a duração total do evento, em segundos: ');
const seconds = Number(segundostt);

const horas = seconds/3600;
const minutos =  (seconds%3600)/60;
const segundos = (seconds%3600)%60;

console.log(`O evento terá ${Math.floor(horas)} horas, ${Math.floor(minutos)} minutos, ${Math.floor(segundos)} segundos de duração.`);