import React from 'react';

function AnimeList({ anime }) {
    return (
        <div className="animeList">
        {anime.map(({ attributes }) => {
            return <h2>{attributes.titles.en_jp}</h2>
        })}
        </div>
    )
}

export default AnimeList; 