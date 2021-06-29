import React from 'react';
import AnimeList from "./AnimeList"
import CarouselAnime from "./CarouselAnime"
function Datafetching (props){
    
return (
    <div>
        <CarouselAnime anime={props.anime} /> 
       <AnimeList anime={props.anime} />
    </div>
)
}

export default Datafetching