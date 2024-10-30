const CardPlaces = ({ info }) => {
  return (
    <div className="container_card_places flex_column">
      <h3>{info.title}</h3>
      <div className="content_info_places flex_row">
        <img className="img_places" src={info.image} alt="argollas" />
        <div className="info_places flex_column">
          <p>
            {info.date.title}: {info.date.info}
          </p>
          <p>{info.hour.info}</p>
          <p>
            {info.place.title}: {info.place.info}
          </p>
          <p>
            {info.address.title}: {info.place.info}
          </p>
        </div>
      </div>
      <button className="btn_card_places flex_row">
        <img className="map_icon" src="/map-movible.svg" />
        <div className="text_map_card">VER MAPA</div>
      </button>
    </div>
  );
};

export default CardPlaces;
