export const GridCharacters = ({characters}) => {

  return (
    <>
      <div className="d-flex flex-row row row-cols-6 ">
        {
          //character != null
          characters &&
            characters.map((char) => (
              <div key={char.id}>
                    <h3 className="text-center">{char.name}</h3>
                    <img style={{ width: "13 rem" }}src={`${char.thumbnail.path}.${char.thumbnail.extension}`}alt="imagen"
                />
              </div>
            ))
        }
      </div>
    </>
  )
}
