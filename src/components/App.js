import React, { useState, useEffect } from "react";
import "./App.css";
import LaunchList from "./LaunchList";
import LaunchDetail from "./LaunchDetail";
import { BrowserRouter, Route} from "react-router-dom";

function App() {
  const [launchpad, setLaunchpads] = useState([]);


  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/launchpads")
      .then((response) => response.json())
      .then((data) => setLaunchpads(data));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <h1>SpaceX Fanclub</h1>
        <Route exact path="/">
          <LaunchList launchpad={launchpad} />
        </Route>
        <Route exact path="/launchdetail">
          <LaunchDetail />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
