const Head = () => {
  return (
    <div className="container_head">
      <div className="container_img_principal">
        <img src="/images/imagen1.png" className="carousel-image" alt="Foto 1" />
        <img src="/images/imagen2.png" className="carousel-image" alt="Foto 2" />
        <img src="/images/imagen3.png" className="carousel-image" alt="Foto 3" />
        <img 
          src="/images/imagen1.png" 
          className="fixed-image" 
          alt="Imagen fija" 
        />
      </div>
      <div className="recuadro">
        <h1>Cristian & María</h1>
        <p>15.02.2025</p>
        <hr aria-orientation="horizontal" className="hr_line" />
        <p>EL AMOR NOS UNE, NOS VAMOS A CASAR!</p>
      </div>
    </div>
  );
};

export default Head;
