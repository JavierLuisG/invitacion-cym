import React from "react";
import NumberTime from "./NumberTime";

export const TimeRealize = () => {
  return (
    <div className="container_time_realize">
      <div>
        <h2>¡MUY PRONTO!</h2>
      </div>
      {/* <hr aria-orientation="horizontal" className="hr_line" /> */}
      <div className="container_card_time">
        <NumberTime />
        <hr aria-orientation="vertical" className="line_vertical" />
        <NumberTime />
        <hr aria-orientation="vertical" className="line_vertical" />
        <NumberTime />
        <hr aria-orientation="vertical" className="line_vertical" />
        <NumberTime />
      </div>
      <img
        className="img_rings"
        src="../../public/img/anillo-de-bodas.png"
        alt="argollas"
      />
    </div>
  );
};
