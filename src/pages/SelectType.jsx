import { useEffect } from "react"


export const SelectType = () => {
    const url ='https://pokeapi.co/api/v2/type'

    const [types, getTypes ] = useEffect (url)

    useEffect(() => {
        getTypes()
    } , [])
    const handleChange =  e =>{
        console.log('me ejecute ')
        e.target.value
}

  return (
    <div>
        <select onChange={handleChange}>
            <option value='allPokemons'> All pokemons </option>
            {
                types?.results.map{typeInfo => (
                    <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
            )}
            }
           
        </select>
    </div>
  )
}
export default SelectType 