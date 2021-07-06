import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayAndMap from "./components/DisplayAndMap";
function App() {
  const [anime, setAnime] = useState([]);
  useEffect(() => {
    axios
      .get(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0`)
      .then((res) => {
        console.log(res);
        setAnime(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <br></br>
      <DisplayAndMap anime={anime} />
    </div>
  );
}
export default App;
