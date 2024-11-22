import React from "react";
import { useParams } from "react-router-dom";

const MapGoogle = () => {
  const params = useParams();
  const destino =
    params.lugar == "ceremonia"
      ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254470.5983443342!2d-74.25623303073492!3d4.752115266502546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9af9f4af23c9%3A0xd4ef49e77744e129!2sParroquia%20La%20Asunci%C3%B3nnu%20de%20Nuestra%20Se%C3%B1ora!5e0!3m2!1ses!2sco!4v1732252754557!5m2!1ses!2sco"
      : null;

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src={destino}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapGoogle;
