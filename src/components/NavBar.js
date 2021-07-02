import React from "react";
import Typography from "@material-ui/core/Typography";
function NavBar() {
  return (
    // these need to be links to these components
    <div className="navbar">
      <Typography gutterBottom variant="h5">
        Logo
      </Typography>
      <Typography gutterBottom variant="h5">
        Anime
      </Typography>{" "}
      <Typography gutterBottom variant="h5">
        Manga
      </Typography>
      <Typography gutterBottom variant="h5">
        Trending?{" "}
      </Typography>{" "}
    </div>
  );
}

export default NavBar;
