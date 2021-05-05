import React from "react";
import { Link } from "react-router-dom";

const LaunchCard = ({ name, details, status, launches }) => {

  return (
    <div className="ui card" style={{ margin: "20px" }}>
      <div
         className="content"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="header">Launchpad Name: {name}</div>
      </div>
      <div className="content" style={{ height: "auto" }}>
        <h4 className="ui sub header">Details</h4>
        <div className="ui small feed">
          <div className="event">
            <div className="content">
              <div className="summary">
                <p>{details}</p>
              </div>
            </div>
          </div>
          <div className="event">
            <div className="content">
              <div className="summary">
                <h5>Status: {status}</h5>
              </div>
            </div>
          </div>
          <div className="event">
            <div className="content">
              <div className="summary">Top Launches:</div>
            </div>
          </div>
        </div>
      </div>

      <div className="event" style={{ padding: "5px" }}>
        <div className="content">
          {launches.length > 1 ? (
            <div className="summary">
              <ul>
                <li style={{ margin: "2px" }}>
                  <Link
                    to={{
                      pathname: "/launchdetail",
                      id: launches[0],
                    }}
                  >
                    {launches[0]}
                  </Link>
                </li>
                <li style={{ margin: "2px" }}>
                  <Link
                    to={{
                      pathname: "/launchdetail",
                      id: launches[1],
                    }}
                  >
                    {launches[1]}
                  </Link>
                </li>
                <li style={{ margin: "2px" }}>
                  <Link
                    to={{
                      pathname: "/launchdetail",
                      id: launches[2],
                    }}
                  >
                    {launches[2]}
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            "No Launches Available"
          )}
        </div>
      </div>
    </div>
  );
};

export default LaunchCard;
