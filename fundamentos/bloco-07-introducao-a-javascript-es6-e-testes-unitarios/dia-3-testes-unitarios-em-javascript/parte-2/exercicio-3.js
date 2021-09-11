const assert = require('assert');
// escreva a função sumAllNumbers aqui

const sumAllNumbers = (numeros) => {
    let resultado = 0;
    for(const numero of numeros) {
        resultado += numero;        
    }
    return resultado;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);