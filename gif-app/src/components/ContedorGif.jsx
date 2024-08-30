export const ContedorGif = ({arregloGifs}) => {
    return (
        <>
        <div className="d-flex flex-row justify-content-center alig-items-center row row-cols-2 row-cols-lg- g-2 g-lg- mt-3">
          {arregloGifs.map(({id, url}) => {
            return(
              <img  className="w-25" key={id} src={url}/>
            )
          })}
        </div>
        </>
    )
}