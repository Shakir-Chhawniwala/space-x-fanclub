import React, { useState, useEffect } from "react";
import {Link,useLocation} from "react-router-dom";

const LaunchDetail = () => {
  const [launch, setLaunch] = useState([]);
  let location = useLocation();
  

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v4/launches/${location.id}`)
      .then((response) => response.json())
      .then((data) => setLaunch(data));
  }, [location]);

  return (
    <div style={{ margin: "10px" }}>
      <div className="ui top attached tabular menu">
        <div className="active item">More Details</div>
      </div>
      <div className="ui bottom attached active tab segment">
        <p>Name: {launch.name}</p>
        <p>Details: {launch.details}</p>
        <p>Date: {launch.date_local}</p>
        <p>Reused: {launch.reused}</p>
      </div>
      <button className="huge ui button">
        <Link to="/">Back</Link>
      </button>
    </div>
  );
};

export default LaunchDetail;
