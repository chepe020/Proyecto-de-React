const api_key = "wdWC0DiHpH1dBlEvhejM12TbmWnGmRyr"
const limit = 10

export const reqGif = async(categoria) => {
  try {
     const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categoria}&limit=${limit}`)
     const {data} = await resp.json()

    const arregloGifs = data.map((gif) => ({     
            id: gif.id,
            url: gif.images.original.url
    }))

    return arregloGifs

  } catch (err) {
    console.log(err)
  }
}