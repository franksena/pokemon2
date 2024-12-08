interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
  interface NavBarProps {
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
    
  }



function NavBar({pokemonList,setPokemonIndex} : NavBarProps ) {

      const handleClick = (index : number) => {
        setPokemonIndex(index);
        if(pokemonList[index].name === "pikachu" ) {
            alert("pika pikachu !!!")
        }
      }
    return ( 
        <div>
       {pokemonList.map((pokemon,id)  => (
        <button type="button" key={pokemon.name} onClick={()=> handleClick(id) }  > {pokemon.name} </button>
       ) ) }
       
   
       </div>
     );
}

export default NavBar;