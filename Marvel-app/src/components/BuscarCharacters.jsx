import { useState } from "react"

export const BuscarCharacters = (handreCharacters) =>{
  
    const [name , setName]= useState('')
    

    return (
        <div className="container d-flex flex-row justify-content-center alig-items-center mt-3 w-50">
            <form class="d-flex" onSubmit={(e) => {handreCharacters(name,e)}}>
                <input className="form-control me-2" type="tex" onChange={(e) => {setName(e.target.value)}}/>
                <input className="btn btn-outline-primary" type="submit" value="buscar"/>
            </form>

        </div>
  )
}

