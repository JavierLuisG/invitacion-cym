import React from "react";
import { useParams } from "react-router-dom";

const GuestPresentation = () => {
  const params = useParams();
  return (
    <>
      <div className="container_guest title flex_column box">
        <div className="container_position_guest flex_column">
          <div className="img_flores_rama">
            <img src="/images/img_flores_ramas.webp" />
          </div>
          <div className="flex_column container_name">
            <h2>{params.name}</h2>
          </div>
        </div>
        <div className="img_onda_delgada1">
          <img src="/img_onda_delgada.svg" />
        </div>
        <div className="img_onda_delgada2">
          <img src="/img_onda_delgada.svg" />
        </div>

        <div className="cinta_guest flex_row">
          <div className="img_cinta_guest1">
            <img src="/img_cinta3.svg" />
          </div>
          <h3 className="text_cinta">Te invitamos</h3>
          <div className="img_cinta_guest2">
            <img src="/img_cinta4.svg" />
          </div>
        </div>
      </div>
      <img
        className="img_curvas_doble_derecha"
        src="/img_curvas_doble_derecha.svg"
      />
    </>
  );
};

export default GuestPresentation;
