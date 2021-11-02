import logo from "./logo.svg";
import "./App.css";
import pokemons from "./data";
import Pokemon from "./pokemon";

function App() {
  return (
    <div className="App">
      {pokemons.map((pokemon) => (
        <Pokemon
          name={pokemon.name}
          type={pokemon.type}
          peso={pokemon.averageWeight.value}
          unidadeDeMedida={pokemon.averageWeight.measurementUnit}
          image={pokemon.image}
        />
      ))}
    </div>
  );
}

export default App;
