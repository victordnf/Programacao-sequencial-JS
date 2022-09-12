const prompt = require('prompt-sync')();

const aString = prompt('Digite o coeficiente de A: ')
const A = Number(aString)

const bString = prompt('Digite o coeficiente de B: ')
const B = Number(bString)

const cString = prompt('Digite o coeficiente de C: ')
const C = Number(cString)

const dString = prompt('Digite o coeficiente de D: ')
const D = Number(dString)

const eString = prompt('Digite o coeficiente de E: ')
const E = Number(eString)

const fString = prompt('Digite o coeficiente de F: ')
const F = Number(fString)


const X = (C*E-B*F)/(A*E-B*D)
const Y = (A*F-C*D)/(A*E-B*D)

console.log(`O valor de X é: ${Math.round(X)}`)
console.log(`O valor de Y é: ${Math.round(Y)}`)