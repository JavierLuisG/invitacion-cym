import React from "react";
import { useParams } from "react-router-dom";

const GuestPresentation = () => {
  const params = useParams();
  return (
    <div className="container_guest title flex_column">
      <div className="container_position_guest flex_column">
        <div className="img_flores_rama">
          <img src="/images/img_flores_ramas.webp" />
        </div>
        <h2>{params.name}</h2>
      </div>
      <p className="text_guest text_secondary_p">
        Porque eres especial para nosotros esperamos contar con tu presencia el
        día de nuestra unión.
      </p>
    </div>
  );
};

export default GuestPresentation;
