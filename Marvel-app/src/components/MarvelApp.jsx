import { useCharacters } from "../hooks/useCharacters"
import Pagination from '@mui/material/Pagination';
import { GridCharacters } from "./GridCharacters";
import { BuscarCharacters } from "./BuscarCharacters";

export const MarvelApp = () => {

  const {characters} = useCharacters()

  const {handreGetCharacters } = useCharacters()

  return(
    <> 
      <BuscarCharacters handreGetCharacters={handreGetCharacters}/>
      <GridCharacters characters={characters}/>
      <Pagination  count={10} color="primary" onChange={(e,value) => console.log(value)}/>
      
      
    </>
  ) 
}
