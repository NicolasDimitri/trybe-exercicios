let a = 10;
let b = 30;
let c = 25;

console.log("Adição: " + (a + b))
console.log("Subtração: " + (a - b))
console.log("Multiplicação: " + (a * b))
console.log("Divisão: " + (a / b))
console.log("Módulo: " + (a % b))


if (a > b) {
    console.log(a)
} else {
    console.log(b)
}


if (a > b && a > c) {
    console.log(a)
} else if (b > a && b > c) {
    console.log(b)
} else {
    console.log(c)
}


const numero = 10;

if (numero < 0) {
    console.log("negative")
} else if (numero > 0) {
    console.log("positive")
} else {
    console.log("zero")
}


const anguloA =35;
const anguloB =60;
const anguloC =85;

if (anguloA + anguloB + anguloC === 180) {
    console.log("true")
} else {
    console.log("false")
}