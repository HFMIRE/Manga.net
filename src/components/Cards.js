import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Modal from "./Modal";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

function Cards({ img, titleEn, ageRating, avg, titleJp, description, status }) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
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
            <Typography className="status" variant="body1" component="h2">
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Typography>
            <Typography
              className="avgRating"
              gutterBottom
              variant="body1"
              component="h2"
            >
              {Math.floor(avg) > 0 ? "🔥" + Math.floor(avg) : null}
            </Typography>
            <Typography
              className="ageR"
              gutterBottom
              style={{ backgroundColor: null ? "none" : "#06707e" }}
              variant="body1"
              component="h2"
            >
              {ageRating === null ? null : "📺" + ageRating}
            </Typography>
          </div>
          <Typography gutterBottom variant="h6" component="h2">
            {titleEn}
          </Typography>

          <div style={BUTTON_WRAPPER_STYLES}>
            <button className="btnModal2" onClick={() => setIsOpen(true)}>
              Show More
            </button>

            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              <Typography className="modalTitle" variant="h3" component="h2">
                {titleEn}
              </Typography>
              <Typography gutterBottom variant="h6" component="h2">
                {titleJp}
              </Typography>
              <div className="Modaldescription">
                <Typography className="status" variant="body1" component="h2">
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </Typography>
                <Typography
                  className="avgRatings"
                  variant="body1"
                  component="h2"
                >
                  {ageRating === null ? null : "📺" + ageRating}
                </Typography>
                <Typography className="ageR" variant="body1" component="h2">
                  {Math.floor(avg) > 0 ? "🔥" + Math.floor(avg) : null}
                </Typography>
              </div>
              <Typography variant="body1" component="h2">
                {description}
              </Typography>
            </Modal>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default Cards;
