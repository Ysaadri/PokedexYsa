import { useEffect } from "react";
import useFetch from "../../hooks/useFetch"
import '../PokedexPage/styles/PokeCard.css'

const SelectType = ({ setTypeSelected }) => {

    const url = 'https://pokeapi.co/api/v2/type'
    const [types, getTypes ] =  useFetch(url)

    useEffect (() => {
        getTypes()
    }, [])

    // console.log(types)

    const handleChange = e => {
        console.log(e.target.value)
        setTypeSelected(e.target.value)
    }

    return (
        <div>
            <select className="select_search" onChange={handleChange}>
                <option value='allPokemons'> All pokemons</option>
                {
                    types?.results.map(typeInfo => (
                       <option  key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option> 
                    ))
                }
            </select>
        </div>
    )

}
export default SelectType