import React from "react";
import CardPlaces from "./CardPlaces";
import infoPlaces from "../mocks/info.json";

const Places = () => {
  return (
    <div className="container_places flex_row box">
      {infoPlaces.map((info, index) => (
        <CardPlaces key={index} info={info} />
      ))}
    </div>
  );
};

export default Places;
