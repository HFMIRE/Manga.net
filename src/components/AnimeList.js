import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
function AnimeList({anime}) {

    const classes = useStyles();
return (
    <div className="animeList">
        {anime.map(({attributes}) => {
            return (
                <div>
                    {/* Make into a slider + modal   Add ageRating, averageRating, startDate, description -  to 200 charaters  */}
                     <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                                 key ={attributes.userCount}
                        component="img"
                        alt="anime_coverImage"
                        height="200"
                        image={attributes.posterImage.large}
                        title="Anime Image"
                        />
                    </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {attributes.titles.en_jp}
                            </Typography>
                     </CardContent>
                    </Card>
                </div>
            )
        })}
    </div>
)
}
export default AnimeList; 