import React from "react";
import CarouselManga from "./CarouselManga";
function MangaDisplay({ manga }) {
  return (
    <div>
      {manga.map(({ attributes }, index) => {
        return (
          <CarouselManga
            key={index}
            img={attributes.posterImage.large}
            title={attributes.titles.en_jp}
            description={attributes.description}
            ageRating={attributes.ageRating}
            avg={attributes.averageRating}
          />
        );
      })}
    </div>
  );
}

export default MangaDisplay;
