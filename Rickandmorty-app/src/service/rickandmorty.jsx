export const reqRickandmortyApp = async (species, pagina) => {
    try {
        const resp = await fetch(`https://rickandmortyapi.com/api/character?species=${species}&page=${pagina}`)
        const data = await resp.json()
        return { results: data.results, totalPages: data.info.pages }
    } catch (err) {
        console.log(err)
    }
}
