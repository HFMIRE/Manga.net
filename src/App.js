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

// step 1 - form - upload image + rating  - different componet
// are okay with details - comfirming with modal - pop up are sure this correct + details with the label
// land on the homepage - is yes or no - go back prefilled form + can edit
// adding it to the carousel - through data
// form component - using as a state mangement - redux

// adding ts
// adding state mangement - redux
// race condontional -
