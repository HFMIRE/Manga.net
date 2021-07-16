import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Display from "./components/Display";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route>
          <Display path="/" />
        </Route>
        <Route>
          <Form path="/forms" />
        </Route>
      </Router>
    </div>
  );
}
export default App;
