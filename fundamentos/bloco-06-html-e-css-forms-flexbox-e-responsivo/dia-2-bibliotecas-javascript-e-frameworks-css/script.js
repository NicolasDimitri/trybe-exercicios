import './node_modules/just-validate/dist/js/just-validate.js';

let estados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins", "Distrito Federal"];

function inserirEstados() {
    let selectState = document.querySelector("#estado");
    for (i = 0; i < estados.length; i += 1) {
    let optionState = document.createElement("option");
    selectState.appendChild(optionState);
    optionState.innerHTML = estados[i];
    }
}

window.onload = function () {
    inserirEstados();
  new window.JustValidate(".js-form");
};
