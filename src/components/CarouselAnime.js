import React from "react";
import { Paper, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
function CarouselAnime({ key, img, title, description, titleJp }) {
  return (
    <Paper className="containerHero" elevation={0}>
      <div className="heroDescription">
        <Typography gutterBottom variant="h1">
          {title}
        </Typography>
        <Typography gutterBottom variant="h3">
          {titleJp}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {description}
        </Typography>
        <Button className="CheckButton">Check it out!</Button>
      </div>
      <div className="heroAnimeImage">
        <img className="containerImg" key={key} src={img} alt="First slide" />
      </div>
    </Paper>
  );
}
export default CarouselAnime;
