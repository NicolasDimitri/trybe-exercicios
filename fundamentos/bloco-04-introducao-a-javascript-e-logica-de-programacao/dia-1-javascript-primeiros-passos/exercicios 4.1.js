// 1.Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. 

let a = 10;
let b = 30;
let c = 25;

console.log("Adição: " + (a + b))
console.log("Subtração: " + (a - b))
console.log("Multiplicação: " + (a * b))
console.log("Divisão: " + (a / b))
console.log("Módulo: " + (a % b))

// 2.Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

if (a > b) {
    console.log(a)
} else {
    console.log(b)
}

// 3.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

if (a > b && a > c) {
    console.log(a)
} else if (b > a && b > c) {
    console.log(b)
} else {
    console.log(c)
}

// 4.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const numero = 10;

if (numero < 0) {
    console.log("negative")
} else if (numero > 0) {
    console.log("positive")
} else {
    console.log("zero")
}

// 5.Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const anguloA =35;
const anguloB =60;
const anguloC =85;

let somaDosAngulos = anguloA + anguloB + anguloC;
let angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosPositivos) {
    if (somaDosAngulos === 180) {
        console.log(true)
    } else {
        console.log(false)
    }
} else {
    console.log("Erro, ângulo inválido")
}

// 6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peçaDeXadrez = "cavalo";

switch (peçaDeXadrez.toLowerCase()) {
    case "peao":
        console.log("Peão -> move apenas uma casa para frente");
        break;    
    case "torre":
        console.log("Torre -> move quantas casas quiser na vertical");
        break;
    case "cavalo":
        console.log("Cavalo -> move 2 casas na vertical ou na horizontal, e 1 casa para a esquerda ou direita de seu movimento logo em seguida");
        break;
    case "bispo":
        console.log("Bispo -> move quantas casas quiser na diagonal");
        break;
    case "rainha":
        console.log("Rainha -> move quantas casas quiser em qualquer direção");
        break;
    case "rei":
        console.log("Rei -> move apenas 1 casa em qualquer direção");
        break;
    default:
        console.log("Erro: Peça inválida")
        break;
}

// 7.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let porcentagem = 90;

if (porcentagem >= 90 && porcentagem <= 100) {
    console.log("A")
} else if (porcentagem >= 80 && porcentagem < 100) {
    console.log("B")
} else if (porcentagem >= 70 && porcentagem < 100) {
    console.log("C")
} else if (porcentagem >= 60 && porcentagem < 100) {
    console.log("D")
} else if (porcentagem >= 50 && porcentagem < 100) {
    console.log("E")
} else if (porcentagem < 50 && porcentagem > 0) {
    console.log("F")
} else {
    console.log("Erro: Valor inválido")
}

// 8.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    console.log(true)
} else {
    console.log(false)
}

// 9.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    console.log(false)
} else {
    console.log(true)
}

// 10.Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

let valorDoProduto = 40;
const custoDoProduto = (valorDoProduto + (valorDoProduto * 0.2));
const valorDeVenda = 60;
let lucro;

lucro = (valorDeVenda - custoDoProduto);

if (valorDeVenda < 0 || custoDoProduto < 0 || valorDoProduto < 0) {
    console.log("Erro: Valor inserido inválido")
} else {
    console.log(lucro);
}

// 11.Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto = 3000
let salarioBase;
let salario;

if (salarioBruto <= 1556.94) {
    salarioBase = (salarioBruto - 0.08 * salarioBruto)
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioBase = (salarioBruto - 0.09 * salarioBruto)
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioBase = (salarioBruto - 0.11 * salarioBruto)
} else {
    salarioBase = (salarioBruto - 570.88)
}
if (salarioBase <= 1903.98) {
    salario = salarioBase
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    salario = (salarioBase - ((salarioBase * 0.075) - 142.80))
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    salario = (salarioBase - ((salarioBase * 0.15) - 354.80))
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    salario = (salarioBase - ((salarioBase * 0.225) - 636.13))
} else {
    salario = (salarioBase - ((salarioBase * 0.275) - 869.36))
}
console.log(salario)