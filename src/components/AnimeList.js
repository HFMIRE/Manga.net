import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ModalAnime from "./ModalAnime";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};
function AnimeList({ img, title, ageRating, avg, startdate, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  return (
    <div className="AnimeSlider">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className="center"
            component="img"
            alt="anime_coverImage"
            height="300"
            image={img}
            title="Anime Image"
          />
        </CardActionArea>
        <CardContent className="CardDescription">
          <div className="description">
            <Typography
              className="ageR"
              gutterBottom
              variant="body1"
              component="h2"
            >
              🔥
              {Math.floor(avg)}
            </Typography>
            <Typography
              className="avgRating"
              gutterBottom
              variant="body1"
              component="h2"
            >
              {ageRating}
            </Typography>
            <Typography className="date" gutterBottom variant="body1">
              {startdate.slice(0, 4)}
            </Typography>
          </div>
          <h3 className="titleAnime">{title}</h3>
          <div style={BUTTON_WRAPPER_STYLES}>
            <button className="btnModal2" onClick={() => setIsOpen(true)}>
              Show More
            </button>

            <ModalAnime open={isOpen} onClose={() => setIsOpen(false)}>
              <Typography className="modalTitle" variant="h3" component="h2">
                {title}
              </Typography>
              <div className="Modaldescription">
                <Typography variant="body1" component="h2">
                  {ageRating}
                </Typography>
                <Typography variant="body1" component="h2">
                  🔥{Math.floor(avg)}
                </Typography>
                <Typography variant="body1" component="h2">
                  {startdate.slice(0, 4)}
                </Typography>
              </div>
              <Typography variant="body1" component="h2">
                {description}
              </Typography>
            </ModalAnime>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default AnimeList;
