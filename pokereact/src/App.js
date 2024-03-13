import Pokemon from './components/Pokemon';
import './App.css';

function App() {
  return (
    <div className="App">
      <Pokemon nombre={"pikachu"} indice={0} imagenesUrl={["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png"]} />
      
    </div>
  );
}

export default App;
