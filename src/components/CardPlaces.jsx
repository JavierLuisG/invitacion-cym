import React from "react";

const CardPlaces = ({ info }) => {
  return (
    <div className="container_card_places">
      <img
        className="img_rings"
        src="/images/anillo-de-bodas.png"
        alt="argollas"
      />
      <h3>{info.title}</h3>
      <h4>{info.date.title}</h4>
      <p>{info.date.info}</p>
      <h4>{info.place.title}</h4>
      <p>{info.place.info}</p>
      <h4>{info.address.title}</h4>
      <p>{info.place.info}</p>
    </div>
  );
};

export default CardPlaces;
