import React from "react";

const Travel = ({ destination, country, distance, photo}) => (
  <div>
    <img src={photo} alt={destination}/>
    <p> Country : {country}</p>
    <p>Distance : {distance}</p>
  </div>
);

export default Travel;