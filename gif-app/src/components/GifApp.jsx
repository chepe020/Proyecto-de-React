import { useState } from "react"
import { useGif } from "../hooks/useGif"
import { BuscarGif } from "./BuscarGif"
import { ContedorGif } from "./ContedorGif"

//funtional component
export const GifApp = () => {
  const {handleGetGif, arregloGifs} = useGif()

  return (
    <>
      <BuscarGif handleGetGif={handleGetGif}/>
      <ContedorGif arregloGifs={arregloGifs}/>
    </>
  )
}