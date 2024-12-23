import CardPlaces from "./CardPlaces";
import infoPlaces from "../mocks/info.json";

const Places = () => {
  return (
    <div className="container_places flex_row box">
      <div className="container_flor_ramas_places">
        <div className="img_hortensia_places">
          <img src="/images/hortensia_final.png" />
        </div>
        <div className="img_rama_hortensia_places">
          <img src="/images/oliva_rama_uno_par.webp" />
        </div>
        <div className="img_rama_hortensia_2_places">
          <img src="/images/oliva_rama_uno_par.webp" />
        </div>
        <div className="img_onda_delgada3">
          <img src="/img_onda_delgada.svg" />
        </div>
        <div className="img_onda_delgada4">
          <img src="/img_onda_delgada.svg" />
        </div>
      </div>
      {infoPlaces.map((info, index) => (
        <CardPlaces key={index} info={info} />
      ))}
    </div>
  );
};

export default Places;
