
export const reqchiste = async (setChiste) => {
    const resp = await fetch(`https://v2.jokeapi.dev/joke/Any?lang=es`)
    const data = await resp.json()
    if (data.type === 'single') {
        setChiste(data.joke)
    } else {
        setChiste(`${data.setup}   La Respuesta es : -- ( ${data.delivery} )--`)
    }
}

