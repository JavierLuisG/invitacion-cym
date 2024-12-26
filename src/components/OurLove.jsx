const OurLove = () => {
  return (
    <div className="container_section_ourlove flex_column box">
      <div className="flex_column">
        <h2>Nuestro Amor</h2>
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
      </div>
    </div>
  );
};

export default OurLove;
