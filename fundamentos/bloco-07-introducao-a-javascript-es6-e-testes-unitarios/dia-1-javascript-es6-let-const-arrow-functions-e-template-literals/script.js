// exercicio 1:

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
};

testingScope(true);

// exercicio 2:

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const ordenar = (a, b) => a - b;
const numerosOrdenados = oddsAndEvens.sort(ordenar);
console.log(`Os números ${numerosOrdenados} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// Parte II:
// exercicio 1: 

const fatorial = n => {
    let resultado = 1;

    for (let index = 2; index <= n; index += 1) {
        resultado *= index;
    }
    return resultado;
}
console.log(fatorial(10));

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(10));

// exercicio 2:

const maiorPalavra = frase => {
    let maiorPalavra = "";
    let fraseDividida = frase.split(" ");
    let quantidadeDeLetras = 0;
    for (const palavra of fraseDividida) {
        if (palavra.length > quantidadeDeLetras) {
            maiorPalavra = palavra;
            quantidadeDeLetras = palavra.length;
        } 
    }
    return maiorPalavra;
}
console.log(maiorPalavra("a fffffffffffffff é ajsdajsoi jxry"));