import React from "react";
import { useParams } from "react-router-dom";

const GuestPresentation = () => {
  const params = useParams();
  return (
    <div className="container_guest title flex_column">
      {/* <div className="img_adorno_head">
        <img src="/images/circle_adorno.png" alt="" />
      </div> */}
      <h1>{params.name}</h1>
      <p className="text_guest text_secondary_p">
        Porque eres especial para nosotros esperamos contar con tu presencia el
        día de nuestra unión.
      </p>
    </div>
  );
};

export default GuestPresentation;
