import React, { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import AnimeList from "./AnimeList";
import CarouselAnime from "./CarouselAnime";
import Carousel from "react-material-ui-carousel";
import CarouselM from "react-multi-carousel";
import axios from "axios";
import CarouselManga from "./CarouselManga";
import Cards from "./Cards";
function DisplayAndMap({ anime }) {
  const [manga, setManga] = useState([]);
  useEffect(() => {
    axios
      .get(`https://kitsu.io/api/edge/manga?page[limit]=20&page[offset]=0`)
      .then((res) => {
        console.log(res);
        setManga(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
              key={index}
              img={attributes.posterImage.large}
              titleEn={attributes.titles.en_jp}
              titleJp={attributes.titles.ja_jp}
              description={attributes.description}
            />
          );
        })}
      </Carousel>
      <h1 className="TopTitle">Anime</h1>
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
              titleEn={attributes.titles.en_jp}
              titleJp={attributes.titles.ja_jp}
              description={attributes.description}
              ageRating={attributes.ageRating}
              avg={attributes.averageRating}
              startdate={attributes.startDate}
            />
          );
        })}
      </CarouselM>
      <h1 className="TopTitle">Manga</h1>
      <CarouselManga show={5}>
        {manga.map(({ attributes }, index) => {
          return (
            <div className="cardManga">
              <Cards
                manga={manga}
                key={index}
                img={attributes.posterImage.large}
                titleEn={attributes.titles.en_jp}
                titleJp={attributes.titles.ja_jp}
                description={attributes.description}
                ageRating={attributes.ageRating}
                avg={attributes.averageRating}
                status={attributes.status}
              />
            </div>
          );
        })}
      </CarouselManga>
    </div>
  );
}
export default DisplayAndMap;