import React  from 'react';
import LaunchCard from "./LaunchCard";
import "./launchlist.css"

const LaunchList = ({launchpad}) => {
   
    const renderedItem =   launchpad.map( (launch,id) => {
   return ( 
         <LaunchCard key={id} name={launch.name} details={launch.details} 
         status={launch.status} 
         launches={launch.launches} 
          />
        )
    });

    return (
      <div className="card-container">
      {renderedItem}
      </div>
    );
}

export default LaunchList;