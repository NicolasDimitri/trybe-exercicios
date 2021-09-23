// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myobj = { 
      method: 'GET',
      headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myobj)
  .then(response => response.json())
  .then(data => console.log(data))
};

window.onload = () => fetchJoke();