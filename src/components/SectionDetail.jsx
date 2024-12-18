import React from "react";

const SectionDetail = () => {
  return (
    <div className="container_section_detail flex_column box">
      <div className="flor_detail">
        <img src="/images/img_flores_top.webp" />
      </div>
      <div className="rama_detail">
        <img src="/images/img_ramas_top.webp" />
      </div>
      <img
        className="img_curvas_doble_derecha_detail"
        src="/img_curvas_doble_derecha.svg"
      />
      <div className="img_onda_delgada_detail1">
        <img src="/img_onda_delgada.svg" />
      </div>
      <div className="img_onda_delgada_detail2">
        <img src="/img_onda_delgada.svg" />
      </div>
      
      <div className="title_detail">
        <h2>Detalles</h2>
      </div>
      <div className="container_dress_code flex_row">
        <div className="suit_container flex_column">
          <img className="img_suit" src="/img_suit_man.svg" alt="" />
        </div>
        <div className="flex_column">
          <div className="title_dress_code">
            <p>Dress Code</p>
            <p>FORMAL</p>
          </div>
          <div className="hr_heart flex_column">
            <hr aria-orientation="vertical" className="hr_line_detail_heart" />
            <img src="/heart.svg" alt="" width={30} />
          </div>
        </div>
        <div className="suit_container flex_column">
          <img className="img_suit" src="/img_suit_man.svg" alt="" />
        </div>
      </div>
      <div className="flex_column">
        <p style={{ width: "90%", textAlign: "center" }}>
          ¡Será una boda encantadora! <br />
          Para nosotros es importante reservar el color blanco y verde.
        </p>
      </div>
      <div className="flex_column">
        <p style={{ width: "90%", textAlign: "center" }}>
          Nos escanta la compañia de los niños pero hemos reservado un sitio
          solo para adultos.
        </p>
      </div>
    </div>
  );
};

export default SectionDetail;
