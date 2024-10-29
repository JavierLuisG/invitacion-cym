import { useEffect } from "react";

const Head = () => {
  return (
    <div className="container_head">
      <div className="container_img_principal">
        <img
          src="https://i.pinimg.com/564x/88/80/e6/8880e64d8419c44708cece4cc7cef2f6.jpg"
          className="fixed_image"
          alt="Imagen fija"
        />
      </div>
      <div className="recuadro">
        <div className="container_names">
          <h1>Cristian </h1>
          <img src="/heart-movible.svg" width={38} alt="" />
          <h1>Mariapaz</h1>
        </div>
        <p>15.02.2025</p>
        <hr aria-orientation="horizontal" className="hr_line" />
        <p>
          El destino nos puso en el mismo camino y ahora caminaremos juntos hasta el fin.
        </p>
      </div>
    </div>
  );
};

export default Head;
