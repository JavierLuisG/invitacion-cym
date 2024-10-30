import CarouselImage from "./CarouselImage";

const OurLove = () => {
  const imagesCarousel = [
    "/images/image1.jpg",
  ];
  return (
    <div className="flex_column box">
      <div className="title flex_column">
        <p>
          El amor es paciente, es bondadoso. El amor no es envidioso ni
          jactancioso ni orgulloso. No se comporta con rudeza, no es egoísta, no
          se enoja fácilmente, no guarda rencor.
        </p>
        <span>1 Corintios 13, 4-5</span>
        <h2>Nuestro Amor</h2>
        <img className="foto_icon" src="/camara.svg" alt="" />
      </div>
      <div className="carousel flex_row">
        {imagesCarousel.map((image, index) => (
          <CarouselImage key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default OurLove;
