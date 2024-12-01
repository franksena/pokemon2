interface PokemonCardProps {
   pokemon : {
           name : string;
           imgSrc ?: string;
    }
}


function PokemonCard({pokemon} : PokemonCardProps) {
    return ( 
        <div>
         <figure>
         {pokemon.imgSrc ? (<img src= {pokemon.imgSrc} alt= {pokemon.name} />):(<p>???</p> )
         }
         <figcaption>{pokemon.name} </figcaption>  
                
            </figure>
        </div>
     );
}

export default PokemonCard;