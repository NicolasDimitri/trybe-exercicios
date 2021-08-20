function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

//   Exercício 1:

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criandoCalendario() {
    let calendario = document.getElementById("days");
    for (let i = 0; i < dezDaysList.length; i += 1) {
        let dia = dezDaysList[i];
        let criaDia = document.createElement("li");
        if (dia === 25){
            calendario.appendChild(criaDia);
            criaDia.innerText = dia;
            criaDia.className = "day holiday friday";
        } else if (dia === 24 || dia === 31) {
            calendario.appendChild(criaDia);
            criaDia.innerText = dia;
            criaDia.className = "day holiday";
        } else if (dia === 4 || dia === 11 || dia === 18) {
            calendario.appendChild(criaDia);
            criaDia.innerText = dia;
            criaDia.className = "day friday";            
        } else {
            calendario.appendChild(criaDia);
            criaDia.innerText = dia;
            criaDia.className = "day";            
        }
    }
}
criandoCalendario()
//   Exercício 2:

function criaFeriados(Feriados) {
    let botao = document.createElement("button");
    botao.id = "btn-holiday";
    let lugarDoBotao = document.querySelector(".buttons-container");
    lugarDoBotao.appendChild(botao);
    botao.innerText = "Feriados"
}
criaFeriados();
