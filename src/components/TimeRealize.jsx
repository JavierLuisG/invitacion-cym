import { useEffect, useState } from "react";
import NumberTime from "./NumberTime";
import date from "../mocks/date.json";
import { useParams } from "react-router-dom"

export const TimeRealize = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const params = useParams();

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
    <div className="flex_column box">
      <div className="title flex_column">
        <h2>{params.name}</h2>
        <p>
          Porque eres especial para nosotros esperamos contar con tu presencia
          el día de nuestra boda.
        </p>
        <h2>¡Te esperamos!</h2>
      </div>
      <div className="bla flex_column">
        <div className="container_card_time flex_row">
          <NumberTime value={timeLeft.days} text={date[1].days} />
          <hr aria-orientation="vertical" className="hr_vertical_line" />
          <NumberTime value={timeLeft.hours} text={date[1].hours} />
          <hr aria-orientation="vertical" className="hr_vertical_line" />
          <NumberTime value={timeLeft.minutes} text={date[1].minutes} />
          <hr aria-orientation="vertical" className="hr_vertical_line" />
          <NumberTime value={timeLeft.seconds} text={date[1].seconds} />
        </div>
        <img
          className="img_adorno_time"
          src="/images/circle_adorno.png"
          alt="argollas"
          width={350}
        />
      </div>
    </div>
  );
};
