import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Datafetching  from "./components/Datafetching"
import NavBar from "./components/NavBar"
function App() {
    return ( 
      <div className = "App" >
    <NavBar /> 
    <Datafetching/>
        </div>
    );
}

export default App;