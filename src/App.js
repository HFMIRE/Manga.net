import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useEffect, useState} from 'react';
import axios from "axios"; 
import Datafetching  from "./components/Datafetching"
import NavBar from "./components/NavBar"
function App() {
  // TODO: move state and Data fetching to App Component Level
  const [anime, setAnime] = useState([])

  useEffect(() => {
       axios.get(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0`)
       .then((res )=> {
           console.log(res)
           setAnime(res.data.data)
       })
       .catch(err => { console.log(err) })
      }, [])
    return ( 
      <div className = "App" >
    <NavBar /> 
    <Datafetching anime={anime}/>
        </div>
    );
}

export default App;