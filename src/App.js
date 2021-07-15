import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import CarouselAnime from "./components/CarouselAnime";
import Carousel from "react-material-ui-carousel";
import CarouselA from "react-multi-carousel";
import CarouselManga from "./components/CarouselManga";
import Cards from "./components/Cards";
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
function App() {
  const [anime, setAnime] = useState([]);
  const [manga, setManga] = useState([]);

  useEffect(() => {
    const mangaUrl = `https://kitsu.io/api/edge/manga?page[limit]=20&page[offset]=0`;
    const animeUrl = `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0`;
    const promise1 = axios.get(mangaUrl);
    const promise2 = axios.get(animeUrl);
    Promise.all([promise1, promise2])
      .then((res) => {
        console.log(res[0].data.data, res[1].data.data);
        setManga(res[0].data.data);
        setAnime(res[1].data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <br></br>
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
      <CarouselA
        responsive={responsive}
        ssr
        infinite={false}
        containerClass="first-carousel-container container"
      >
        {anime.map(({ attributes }, index) => {
          return (
            <Cards
              key={index}
              anime={anime}
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
      </CarouselA>
      <h1 className="TopTitle">Manga</h1>
      <CarouselManga show={5}>
        {manga.map(({ attributes }, index) => {
          return (
            <div className="cardManga">
              <Cards
                key={index}
                manga={manga}
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
export default App;

// step 1 - form - upload image + rating  - different component
// are okay with details - comfirming with modal - pop up are sure this correct + details with the label
// land on the homepage - is yes or no - go back prefilled form + can edit
// adding it to the carousel - through data
// form component - using as a state mangement - redux

// adding ts
// adding state mangement - redux
// race condontional -

// titleEn, ageRating, avg, titleJp, description, status - model
// ageRating, avg, status -  tags
