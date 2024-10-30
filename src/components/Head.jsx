import { useEffect } from "react";

const Head = () => {
  return (
    <div className="container_head flex_row box">
      <div className="img_adorno_head">
        <img src="" alt="" />
      </div>
      <div className="recuadro flex_column">
        <div className="date">
          <p>15.02.2025</p>
        </div>
        <hr aria-orientation="horizontal" className="hr_line line_position" />
        <div className="container_names">
          <h1 className="flex_row">Cristian </h1>
          <h2>&</h2>
          {/* <img src="/cross.svg" width={50} alt="" /> */}
          <h1>Mariapaz</h1>
        </div>
        <hr aria-orientation="horizontal" className="hr_line" />
        <p className="text_head">
          El destino nos puso en el mismo camino y ahora caminaremos juntos
          hasta el fin.
        </p>
        <img className="img_anillos_head" src="/images/anillos-reales-sin-fondo.png" alt="" />
      </div>
    </div>
  );
};

export default Head;
