import { useEffect, useState } from "react"
import { reqCharacter } from "../service/characters"

export const useCharacters = () => {

    const [characters, setCharacters] = useState()
  
  
    useEffect(() => {
     
      reqCharacter().then((data) => {
        setCharacters(data.results)
      })
    }, []/* DEPENDECIAS*/)

    return{
        characters
    }
}