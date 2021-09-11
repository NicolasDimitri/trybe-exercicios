const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (array, palavraSolicitada) => {
    let resultado = -1;
    for (const posicaoDaPalavra in array) {
        if(palavraSolicitada === array[posicaoDaPalavra]) {
            resultado = posicaoDaPalavra;
        }
    }
    return parseInt(resultado);
    }
    


let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
