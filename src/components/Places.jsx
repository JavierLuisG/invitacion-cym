import CardPlaces from "./CardPlaces";
import infoPlaces from "../mocks/info.json";

const Places = () => {
  return (
    <div className="container_places flex_row box">
      <div className="container_flor_rama">
        <div className="img_flor_unica">
          <img src="/images/img_flor_unica.webp" />
        </div>
        <div className="img_rama_sencilla">
          <img src="/images/img_rama_sencilla.webp" />
        </div>
        <div className="img_onda_delgada3">
          <img src="/img_onda_delgada.svg" />
        </div>
        <div className="img_onda_delgada4">
          <img src="/img_onda_delgada.svg" />
        </div>
        <div className="img_flor_unica2">
          <img src="/images/img_flor_unica.webp" />
        </div>
        <div className="img_rama_sencilla2">
          <img src="/images/img_rama_sencilla.webp" />
        </div>
      </div>
      {infoPlaces.map((info, index) => (
        <CardPlaces key={index} info={info} />
      ))}
    </div>
  );
};

export default Places;
