import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function AnimeList({ img, title, ageRating, avg, startdate }) {
  const classes = useStyles();
  return (
    <div className="AnimeSlider">
      {/* Make into a slider + modal   Add ageRating, averageRating, startDate, description -  to 200 charaters  */}
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
          {/* title - year + age rating + rating  */}
        </CardActionArea>
        <CardContent className="CardDescription">
          <div class="description">
            <Typography
              className="ageR"
              gutterBottom
              variant="body1"
              component="h2"
            >
              🔥
              {Math.floor(avg)}
            </Typography>
            <span className="bullet"> • </span>
            <Typography
              className="avgRating"
              gutterBottom
              variant="body1"
              component="h2"
            >
              {ageRating}
            </Typography>
            <span className="bullet"> • </span>
            <Typography className="date" gutterBottom variant="body1">
              {startdate.slice(0, 4)}
            </Typography>
          </div>
          <Typography component="h3">{title}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
export default AnimeList;
