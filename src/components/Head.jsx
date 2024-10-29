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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4em"
            height="4em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#FFF5E1"
              d="M12.404 6.145c-.23.2-.583.2-.812 0c-1.782-1.55-4.43-1.608-6.249.329c-3.984 5.045 1.8 9.497 5.615 12.195a1.8 1.8 0 0 0 2.08 0c3.843-2.711 9.6-7.15 5.615-12.195c-1.818-1.937-4.468-1.879-6.25-.329"
            />
          </svg>
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
