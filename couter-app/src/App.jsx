//functional componet

import { useCouter } from "./useCouter"

export const App = () =>{

    //usamos el hook personalizado
    const { couter, handleMasUno,handleMenosUno,handleReset} = useCouter()
   
    return(
        // frangment
        <>
            <h1 className="ms-5">{couter}</h1>
            <button className="btn btn-outline-success" onClick={handleMasUno}>+1</button>
            <button className="ms-2 btn btn-outline-danger" onClick={handleMenosUno}>-1</button>
            <button className="ms-2 btn btn-outline-secondary" onClick={handleReset}>Reset</button>

        </>
    )
}