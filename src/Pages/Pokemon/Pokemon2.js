import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function PokemonUnico() {
    let params = useParams()
    let { id } = params

    let [pokeData, setPokeData] = useState()

    const fetchPokemon = async () => {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
        const data = await response.json()
        setPokeData(data.results)
    }

    useEffect(() => {
        fetchPokemon()
    }, [])

    return (
        <>
            <p>POKEMON</p>
            
            {
                pokeData && 
                <p>{pokeData[id].name}</p>
            }

            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`} />
        </>
    )
}
export default PokemonUnico