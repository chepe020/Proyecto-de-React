import { useState } from "react"

export const BuscarGif = ({handleGetGif}) =>{

    const [categoria, setCategoria] = useState('')

    return(
        <div className="container d-flex flex-row justify-content-center alig-items-center mt-3 w-50">
            <form className="d-flex" onSubmit={(e) => { handleGetGif(categoria, e) }}>
                <input className="form-control me-2" type="text" onChange={(e) => {setCategoria(e.target.value)}}/>
                <input className="btn btn-outline-primary" type="submit" value="Buscar"/>
            </form>     
      </div>
    )
}