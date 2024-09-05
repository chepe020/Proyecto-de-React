import CryptoJS from "crypto-js";
import { useEffect, useState } from "react";

export const MarvelApp = () => {
  const [characters, setCharacters] = useState([]);

  const time_stamp = new Date().getTime();
  const private_api_key = "453ad41c711c1e4f3b8fb3d325a19e9a6ce71979";
  const public_api_key = "cda3ebfc3f9aef5fe0d7f8bbebe773d7";

  const hash = CryptoJS.MD5(
    time_stamp + private_api_key + public_api_key
  ).toString();

  useEffect(() => {
    const reqCharacter = async () => {
      try {
        const resp = await fetch(
          `https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${public_api_key}&hash=${hash}`
        );
        const { data } = await resp.json();
        setCharacters(data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    reqCharacter();
  }, [time_stamp, public_api_key, hash, private_api_key]);

  return (
    <>
      {characters && characters.map((char) => (
        <h1 key={char.id}>{char.name}</h1>
      ))}
    </>
  );
};



// import CryptoJS from "crypto-js"
// import { useEffect, useState } from "react"
// rafc
// export const MarvelApp = () => {
//  const [characters, setCharacters] = useState()

//  const time_stamp = new Date().getTime()
//  const private_api_key = "453ad41c711c1e4f3b8fb3d325a19e9a6ce71979"
//  const public_api_key = "cda3ebfc3f9aef5fe0d7f8bbebe773d7"

//  const hash = CryptoJS.MD5(
//    time_stamp + private_api_key + public_api_key
//  ).toString();

//  useEffect(() => {
//    const reqCharacter = async () => {
//      const resp = await fetch(
//        `https://gateway.marvel.com:443/v1/public/characters?ts=${time_stamp}&apikey=${public_api_key}&hash=${hash}`
//      )
//      const { data } = await resp.json();
//
//      setCharacters(data.results)
//
//    }
//
//    reqCharacter();
//  }, []/* DEPENDECIAS*/)
//
//  return(
//    <>
//      {
//        characters.map((char)  =>(
//            <h1></h1>
//        )) 
//      }
//    </>
//  ) 
//    
//}
