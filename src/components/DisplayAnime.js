import React from "react";
import AnimeList from "./AnimeList";
import CarouselAnime from "./CarouselAnime";
import Carousel from "react-material-ui-carousel";
function DisplayAnime({ anime }) {
  return (
    <div>
      <Carousel>
        {anime.map(({ attributes }, index) => {
          return (
            <CarouselAnime
              anime={anime}
              key={index}
              img={attributes.posterImage.large}
              title={attributes.titles.en_jp}
              titleJp={attributes.titles.ja_jp}
              description={attributes.description}
            />
          );
        })}
      </Carousel>
      {anime.map(({ attributes }, index) => {
        return (
          <AnimeList
            anime={anime}
            key={index}
            img={attributes.posterImage.large}
            title={attributes.titles.en_jp}
            description={attributes.description}
            ageRating={attributes.ageRating}
            avg={attributes.averageRating}
            startdate={attributes.startDate}
          />
        );
      })}
    </div>
  );
}

export default DisplayAnime;
