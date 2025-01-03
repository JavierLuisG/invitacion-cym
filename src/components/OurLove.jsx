const OurLove = () => {
  return (
    <div className="container_section_ourlove flex_column box">
      <div className="rama_detail">
        <img src="/images/oliva_rama_dos_par.webp" />
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
      <div className="flex_column">
        {/* <h2>Nuestro Amor</h2> */}
        <img className="foto_icon" src="/camera.svg" alt="" />
      </div>
      <div className="container_slider">
        <div className="slider">
          <img src="/images/IMG_2710.jpg" alt="" />
          <img src="/images/IMG_2469.jpg" alt="" />
          <img src="/images/IMG_2625.jpg" alt="" />
          <img src="/images/IMG_2860.jpg" alt="" />
          <img src="/images/IMG_2696.jpg" alt="" />
        </div>
        <img className="dots_icon" src="/dots-3.svg" alt="" />
        <div className="container_txt_biblica">
          <p>
            "Más valen dos que uno solo, pues obtienen mayor ganancia de su
            esfuerzo. Si uno cae, lo levantará su compañero; pero ¡ay del solo
            que cae!, que no tiene quien lo levante. [...] La cuerda de tres
            hilos no es fácil de romper."
            <span className="lectura"> Ecle 4, 9-12.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurLove;
