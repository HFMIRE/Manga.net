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
function AnimeList({
  key,
  img,
  title,
  description,
  ageRating,
  avg,
  startdate,
}) {
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
        </CardActionArea>
        <CardContent className="CardDescription">
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {avg}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {ageRating}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {startdate}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
export default AnimeList;
