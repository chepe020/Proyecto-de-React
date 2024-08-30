import { useState } from "react"


export const useCouter = () =>{

    //hooks == contruye toda la loguica de los componentes == controller
   
    /* userState == vorver a rederizar al componente 
    cuando habia un cambio en su variable*/

    //Estructura
    // const [first,setFirts] = useSate(init)

    // first = es la variable que al cambiar vuelve a rederizar el componente
    // setFirsts = es para actualizar el valor de la variable
    // init = es el valor inicial de la variable
    
    const [couter, setCouter] = useState(0)

    const handleMasUno = () =>{
        setCouter(couter +1)
    }

    const handleMenosUno = () =>{
        setCouter(couter -1)
    }
    const handleReset = () =>{
        setCouter(0)
    }

    // retorno del hook
    return{
        //funciones o variables -- constantes
        couter,
        handleMasUno,
        handleMenosUno,
        handleReset
    }
}
