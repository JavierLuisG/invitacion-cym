import { useParams } from "react-router-dom";

const Head = () => {
  const params = useParams();
  return (
    <div className="container_head flex_row box">
      <div className="img_flores_top">
        <img src="https://www.fixdate.io/modelo-invitacion/58/img/flores_Grupo01_B.png" />
      </div>
      <div className="img_rama_top">
        <img src="https://www.fixdate.io/modelo-invitacion/58/img/flores_Grupo01_A.png" />
      </div>
      <div className="recuadro flex_column">
        <span className="date">15.02.2025</span>
        <h1 className="names_couple flex_row">
          <span>
            {/* C & M */}
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
