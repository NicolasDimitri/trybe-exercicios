const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (array, palavraSolicitada) => {
    for (let posicaoDaPalavra in array) {
        console.log(posicaoDaPalavra)
    }
    }
    


let words = ['house', 'train', 'slide', 'needle', 'book'];
// let expected = 3;
// let output = findTheNeedle(words, 'needle');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = 0;
// output = findTheNeedle(words, 'plant');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = -1;
// output = findTheNeedle(words, 'plat');
// assert.strictEqual(output, expected);

// console.log(findTheNeedle(words, "needle"));

for (let posicaoDaPalavra in words) {
    console.log(posicaoDaPalavra)
}