const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const pontuacaoFinal = (gabarito, testesParaAvaliar, analisaRespostas) => {
  let contador = 0;
  for (let i = 0; i < gabarito.length; i += 1) {
    const resultadoDaResposta = analisaRespostas(
      gabarito[i],
      testesParaAvaliar[i]
    );
    contador += resultadoDaResposta;
  }
  return contador;
};

console.log(
  pontuacaoFinal(
    RIGHT_ANSWERS,
    STUDENT_ANSWERS,
    (respostasCertas, respostasDoAluno) => {
      if (respostasDoAluno === "N.A") {
        return 0;
      } else if (respostasCertas === respostasDoAluno) {
        return 1;
      } else {
        return -0.5;
      }
    }
  )
);