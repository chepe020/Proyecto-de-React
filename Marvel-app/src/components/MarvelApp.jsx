import { useCharacters } from "../hooks/useCharacters"
import Pagination from '@mui/material/Pagination';
import { GridCharacters } from "./GridCharacters";

export const MarvelApp = () => {

  const {characters} = useCharacters()

  return(
    <> 
      <GridCharacters characters={characters}/>
      <Pagination  count={10} onChange={(e,value) => console.log(value)}/>
      
    </>
  ) 
}
