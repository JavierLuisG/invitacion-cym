import React from "react";
import { useParams } from "react-router-dom";

const GuestPresentation = () => {
  const params = useParams();
  return (
    <div className="container_guest title flex_column box">
      <div className="container_position_guest flex_column">
        <div className="img_flores_rama">
          <img src="/images/img_flores_ramas.webp" />
        </div>
        <div className="flex_column container_name">
          <h2>{params.name}</h2>
        </div>
      </div>
      <p className="text_guest text_secondary_p">
        Porque eres especial para nosotros esperamos contar con tu presencia el
        día de nuestra unión.
      </p>
      <div className="img_onda_delgada1">
        <img src="/img_onda_delgada.svg" />
      </div>
      <div className="img_onda_delgada2">
        <img src="/img_onda_delgada.svg" />
      </div>
      <div className="img_curvas_doble_derecha">
        <img src="/img_curvas_doble_derecha.svg" />
      </div>
    </div>
  );
};

export default GuestPresentation;
