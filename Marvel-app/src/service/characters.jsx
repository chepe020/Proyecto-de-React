import CryptoJS from "crypto-js"

const time_stamp = new Date().getTime()
const private_api_key = '453ad41c711c1e4f3b8fb3d325a19e9a6ce71979'
const public_api_key = 'cda3ebfc3f9aef5fe0d7f8bbebe773d7'

const hash = CryptoJS.MD5(time_stamp + private_api_key + public_api_key).toString();

export const reqCharacter = async () => {
    const resp = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${public_api_key}&hash=${hash}`)
    const { data } = await resp.json();

    return data 
}
