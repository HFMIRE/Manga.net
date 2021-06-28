import React, {useEffect, useState} from 'react';
import axios from "axios"; 
import AnimeList from "./AnimeList"
import CarouselAnime from "./CarouselAnime"
function Datafetching (){
    
    const [anime, setAnime] = useState([])

    useEffect(() => {
         axios.get(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0`)
         .then((res )=> {
             console.log(res)
             setAnime(res.data.data)
         })
         .catch(err => { console.log(err) })
        }, [])
return (
    <div>
        <CarouselAnime anime={anime} /> 
       <AnimeList anime={anime} />
    </div>
)
}

export default Datafetching