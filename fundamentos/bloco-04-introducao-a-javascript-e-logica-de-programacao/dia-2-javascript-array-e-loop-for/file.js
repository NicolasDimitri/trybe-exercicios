let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (const elementos of names) {
    console.log(elementos)
}

// 1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (const valores of numbers) {
    console.log(valores)
}

// 2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let resultado = 0;
for (let index = 0; index < numbers.length; index++) {
    resultado += numbers[index];
}
console.log(resultado);

// 3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let mediaAritmetica = resultado / numbers.length

console.log(mediaAritmetica)

// 4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (mediaAritmetica > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}

// 5.Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maiorValor = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorValor) {
        maiorValor = numbers[index]
    }
    
}
console.log(maiorValor)

// 6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impares = 0
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        impares += 1;
    }
    
}
if (impares === 0) {
    console.log("nenhum valor impar encontrado")
} else {
    console.log(impares)
}

// 7.Utilizando for , descubra qual o menor valor contido no array e imprima-o;

for (let index = 0; index < numbers.length; index += 1) {
    ;
    
}