import React from "react";
import "react-multi-carousel/lib/styles.css";
import AnimeList from "./AnimeList";
import CarouselAnime from "./CarouselAnime";
import Carousel from "react-material-ui-carousel";
import CarouselM from "react-multi-carousel";
function DisplayAnime({ anime }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
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
      <h1>Anime</h1>
      <CarouselM
        responsive={responsive}
        ssr
        infinite={false}
        containerClass="first-carousel-container container"
      >
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
      </CarouselM>
      <h2>Hello</h2>
    </div>
  );
}

export default DisplayAnime;
