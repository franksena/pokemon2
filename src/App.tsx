import "./App.css";
import PokemonCard from "./assets/components/PokemonCard";
import { useState } from "react";
import NavBar from "./assets/components/NavBar";
import { useEffect } from "react";




function App() {
  const [pokemonIndex,setPokemonIndex] = useState(0);
  useEffect(
    () => {
      alert("hello pokemon trainer :)")
    },[]
   )
  
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

  
    return (
      <div>
     
       <PokemonCard pokemon = {pokemonList[pokemonIndex] }   />
       <nav>
       <NavBar  setPokemonIndex={setPokemonIndex} pokemonList={pokemonList} />
       </nav>
       
       
      </div>
     );
 
}

export default App;