import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')

  const [typeSelected, setTypeSelected] = useState('allPokemons')

  const trainer = useSelector(store => store.trainer)

  const [cardWidth, setCardWidth] = useState('calc(25% - 20px)');

  const inputSearch = useRef()
  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
  
  const [ pokemons, getPokemons, getTypePokemon ] = useFetch(url)

  useEffect(() => {
    if(typeSelected === 'allPokemons') {
      getPokemons()
    } else {
      getTypePokemon(typeSelected)
    }
 }, [typeSelected])

  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
    setCardWidth('350px');
  }

  const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))

  return (
    <div >
      <div className="containt_pokedex">
      <header className="header_pokemon">
        <div className="div_red-header">
        </div>
        <div className="div_black-header"></div>
        <div className="circle_header">
          <div className="circle_in-the-header"></div>
        </div>
      </header>
      <div className="containt_cards">
        <p className="text_for-welcome">
          <span className="name_trainer"> Welcome {trainer}</span>!, here you can find your favorite pokemon
        </p>
        <div className="containt_search">
          <form onSubmit={handleSearch}>
            <input className="input_search" ref={inputSearch} type="text" />
            <button className="button_search">Search</button>
          </form>
          <SelectType
            setTypeSelected={setTypeSelected}
          />
        </div>
        <div className="card-container">
          {
            pokeFiltered?.map(poke => (
              <PokeCard
              key={poke.url}
              url={poke.url}
              style={{ width: cardWidth }}
              />
            ))
          }
        </div>
        
      </div>
     
    </div>
     
    </div>
  )
}

export default PokedexPage