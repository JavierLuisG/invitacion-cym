import { useEffect, useState } from "react";
import NumberTime from "./NumberTime";
import date from "../mocks/date.json";

export const TimeRealize = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []);

  function calculateTimeLeft() {
    const difference = new Date(date[0].date) - new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div className="container_time_realize flex_column box">
      <div className="title_time">
        <h2>¡Te esperamos!</h2>
      </div>
      <div className="container_circle_time flex_column">
        <div className="container_card_time flex_row">
          <NumberTime value={timeLeft.days} text={date[1].days} />
          <hr aria-orientation="vertical" className="hr_vertical_line" />
          <NumberTime value={timeLeft.hours} text={date[1].hours} />
          <hr aria-orientation="vertical" className="hr_vertical_line" />
          <NumberTime value={timeLeft.minutes} text={date[1].minutes} />
          <hr aria-orientation="vertical" className="hr_vertical_line" />
          <NumberTime value={timeLeft.seconds} text={date[1].seconds} />
        </div>
        <div className="img_par_flores">
          <img src="/images/img_par_flores.webp" />
        </div>
        <div className="img_aros_contador">
          <img src="/img_aros_contador.svg" />
        </div>
        <div className="img_onda_desc">
          <img src="/img_onda_desc.svg" />
        </div>
      </div>
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
      </div>
    </div>
  );
};
