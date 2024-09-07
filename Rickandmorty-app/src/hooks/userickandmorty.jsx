import { useEffect, useState } from 'react'
import { reqRickandmortyApp } from '../service/rickandmorty'

export const userickandmorty = (species) => {
    const [Rickandmorty, setRickandmorty] = useState([])
    const [pagina, setPagina] = useState(1)
    const [totalPaginas, setTotalPaginas] = useState(1)

    useEffect(() => {
        reqRickandmortyApp(species, pagina).then((data) => {
            if (data) {
                setRickandmorty(data.results)
                setTotalPaginas(data.totalPages)
            }
        })
    }, [species, pagina])

    return {
        Rickandmorty,
        pagina,
        totalPaginas,
        setPagina
    }
}
