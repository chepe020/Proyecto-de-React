import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { userickandmorty } from '../hooks/userickandmorty'
import { BuscarRickandmorty } from './BuscarRickandmorty'
import { ImagenesRickandmorty } from './ImagenesRickandmorty'

export const RickandmortyApp = () => {
    const [species, setSpecies] = useState('')
    const { Rickandmorty, pagina, totalPaginas, setPagina } = userickandmorty(species)

    const handleBuscar = (event) => {
        event.preventDefault()
        setPagina(1)
    }

    const handlePaguinas = (event, value) => {
        setPagina(value)
    }

    return (
        <>
            <BuscarRickandmorty handleBuscar={handleBuscar} setSpecies={setSpecies} species={species} />
            <ImagenesRickandmorty Rickandmorty={Rickandmorty} />
            <Pagination className='d-flex justify-content-center' count={totalPaginas} size="large"  color="primary" page={pagina} onChange={handlePaguinas} />
        </>
    )
}
