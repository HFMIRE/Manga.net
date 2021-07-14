import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayAndMap from "./components/DisplayAndMap";
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
      <DisplayAndMap anime={anime} manga={manga} />
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
