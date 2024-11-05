import { useParams } from "react-router-dom";

const Head = () => {
  const params = useParams();
  return (
    <div className="container_head flex_row box">
      <div className="img_flores_top">
        <img src="/images/img_flores_top.webp" />
      </div>
      <div className="img_rama_top">
        <img src="/images/img_ramas_top.webp" />
      </div>
      <div className="recuadro flex_column">
        <span className="date">15.02.2025</span>
        <h1 className="names_couple flex_row">
          <span>
            Cristian <br />&<br />
            Mariapaz
          </span>
        </h1>
        <p className="text_head text_secondary_p">
          El destino nos puso en el mismo camino y ahora caminaremos juntos
          hasta el fin.
        </p>
      </div>
    </div>
  );
};

export default Head;
