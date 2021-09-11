const numeroAleatorio = () => Math.ceil(Math.random() * 5);


const sorteio = numero => numero === numeroAleatorio() ? "Parabéns você ganhou" : "Tente novamente"


console.log(sorteio(5));