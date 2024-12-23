import { useParams } from "react-router-dom";

const Head = () => {
  const params = useParams();
  return (
    <div className="container_head flex_row box">
      <div className="recuadro flex_column">
        <div className="date_hr">
          <hr aria-orientation="horizontal" className="hr_line line_position" />
          <span className="date">15.02.2025</span>
        </div>
        <h1 className="names_couple flex_row">
          <span>
            Cristian <br />&<br />
            Mariapaz
          </span>
        </h1>
        <hr aria-orientation="horizontal" className="hr_line line_bottom" />
        <p className="text_head text_secondary_p">
          El destino nos puso en el mismo camino y ahora caminaremos juntos
          hasta el fin.
        </p>
      </div>
    </div>
  );
};

export default Head;
