import React from 'react'

export const BuscarRickandmorty = ({ handleBuscar, setSpecies, species }) => {
    return (
        <>
            <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <img src="/src/image/fonfo.png" alt="Logo" width="150" height="110" class="d-inline-block align-text-top"/>
                    <img src="/src/image/Rick-And-Morty-Emblem.png" alt="Logo" width="250" height="100" class="d-inline-block align-text-top"/>
                    <form className="d-flex" onSubmit={handleBuscar}>
                            <input className="form-control me-2"value={species}onChange={(e) => setSpecies(e.target.value)} placeholder="Busca por species"/>
                            <input className="btn btn-outline-primary" type="submit" value="Buscar" />
                    </form>
              </div>
            </nav>
        </>
    )
}
