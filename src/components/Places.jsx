import React from "react";
import CardPlaces from "./CardPlaces";
import infoPlaces from "../mocks/info.json";

const Places = () => {
  return (
    <div className="container_places">
      {infoPlaces.map((info, index) => (
        <div key={index} className="border_card">
          <CardPlaces info={info} />
        </div>
      ))}
    </div>
  );
};

export default Places;
