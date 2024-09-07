import React from 'react'

export const ImagenesRickandmorty = ({ Rickandmorty }) => {
    return (
        <>
            <div className="d-flex flex-row row row-cols-4">
                {Rickandmorty &&
                    Rickandmorty.map((rik) => (
                        <div key={rik.id}>
                            <h3 className="text-center"  style={{ color: 'white' }}>{rik.name}</h3>
                            <img style={{ width: '15rem' }} src={`${rik.image}`} alt="imagen" />
                            <h5 style={{ color: 'red ' }}>{rik.species}</h5>
                        </div>
                    ))}
            </div>
        </>
    )
}
