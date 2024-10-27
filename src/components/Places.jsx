import React from "react";
import CardPlaces from "./CardPlaces";

const Places = () => {
  return (
    <div className="container_places">
      <div className="border_card">
        <CardPlaces />
      </div>
      <div className="border_card">
        <CardPlaces />
      </div>
    </div>
  );
};

export default Places;
