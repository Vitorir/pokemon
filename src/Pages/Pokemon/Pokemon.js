import { useState } from "react"

function Pokemon() {

    // Conectar com a api e trazer todos os pokemons
    const [pokeData, setPokeData] = useState()

    const buscaPokemon = async() => {
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon`)
        const data = await res.json()

        console.log(data);
        console.log(data.results);
        console.log(data.results[0].url);
        
        setPokeData(data.results)
    }


    return(
        <>
            <h1>Pokemons</h1>
            <button onClick={buscaPokemon}>Buscar Pokemons</button>

            {
                pokeData &&
                pokeData.map((pokemon, index) => {
                    return(
                        <>
                            <p key={pokemon.id}>{pokemon.name}</p>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${index + 1}.gif`} />
                        </>
                    )
                })
            }
        </>
    )
}

export default Pokemon