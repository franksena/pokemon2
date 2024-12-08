interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
  interface NavBarProps {
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
    pokemonIndex :  number
  }



function NavBar({pokemonList,pokemonIndex,setPokemonIndex} : NavBarProps ) {

    const handleClickNext = () => {
        setPokemonIndex(pokemonIndex +1)
      }
      const handleClickPrevious = () => {
        setPokemonIndex(pokemonIndex -1)
      }
    return ( 
        <div>
       {pokemonIndex > 0 ? (<button type="button" onClick={handleClickPrevious} >Précédent</button>) : null }
       {pokemonIndex < pokemonList.length -1 ? (<button type="button" onClick={handleClickNext} >suivant</button> ) : null }
       
   
       </div>
     );
}

export default NavBar;