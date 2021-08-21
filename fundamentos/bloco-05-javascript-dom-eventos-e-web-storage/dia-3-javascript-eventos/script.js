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
        calendario.appendChild(criaDia);
        criaDia.innerText = dia;
        if (dia === 25){
            criaDia.className = "day holiday friday";
        } else if (dia === 24 || dia === 31) {
            criaDia.className = "day holiday";
        } else if (dia === 4 || dia === 11 || dia === 18) {
            criaDia.className = "day friday";            
        } else {            
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
    botao.innerText = "Feriados";
}
criaFeriados();

//  Exercício 3:
let botao = document.getElementById("btn-holiday");

function mudaCor(event) {
    let botao = document.getElementById("btn-holiday");
    let feriados = document.getElementsByClassName("holiday");
    for (i = 0; i < feriados.length; i += 1) { 
    if (feriados[i].style.backgroundColor === "red") {
        feriados[i].style.backgroundColor = "rgb(238,238,238)"
    } else {
        feriados[i].style.backgroundColor = "red";
    }
} 
}
botao.addEventListener("click", mudaCor);

//  Exercício 4:

function buttonFriday(nomeDoBotao) {
    let localDoBotao = document.querySelector(".buttons-container");
    let botao = document.createElement("button");
    localDoBotao.appendChild(botao);
    botao.id = "btn-friday";
    botao.innerHTML = nomeDoBotao;
}
buttonFriday("Sexta-feira");

//  Exercício 5:

function sextaFeira(todasAsSextasFeira) {
    let botao = document.getElementById("btn-friday");
    let diaSexta = document.getElementsByClassName("friday");
    let sextaPorExtenso = "Sexta";

    botao.addEventListener("click", function() {
        for (let i = 0; i < diaSexta.length; i += 1) {
            if (diaSexta[i].innerHTML !== sextaPorExtenso) {
                diaSexta[i].innerHTML = sextaPorExtenso;
            } else {
                diaSexta[i].innerHTML = todasAsSextasFeira[i];
            }
        }
    })
}
let fridays = [4, 11, 18, 25];
sextaFeira(fridays)

//  Exercício 6:
function colocaMouseEmCima() {
    let dias = document.getElementById("days");

    dias.addEventListener("mouseover", function(event) {
        event.target.style.fontSize = "30px";
        event.target.style.fontWeight = "600";
    })
}

function tiraMouseDeCima() {
    let dias = document.getElementById("days");

    dias.addEventListener("mouseout", function(event) {
        event.target.style.fontSize = "20px";
        event.target.style.fontWeight = "200";
    })
}

colocaMouseEmCima();
tiraMouseDeCima();

//  Exercício 7:
function criaTarefas(tarefa) {
    let novaTarefa = document.createElement("li");
    let listaDeTarefas = document.querySelector(".my-tasks");
    listaDeTarefas.appendChild(novaTarefa);
    novaTarefa.innerHTML = tarefa;
}
criaTarefas("a")
criaTarefas("b")
criaTarefas("c")