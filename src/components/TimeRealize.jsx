import { useEffect, useState } from "react";
import NumberTime from "./NumberTime";
import date from "../mocks/date.json"

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
    <div className="container_time_realize">
      <div>
        <h2>¡MUY PRONTO!</h2>
      </div>
      {/* <hr aria-orientation="horizontal" className="hr_line" /> */}
      <div className="container_card_time">
        <NumberTime value={timeLeft.days} text={date[1].days}/>
        {/* <hr aria-orientation="vertical" className="line_vertical" /> */}
        <NumberTime value={timeLeft.hours} text={date[1].hours}/>
        {/* <hr aria-orientation="vertical" className="line_vertical" /> */}
        <NumberTime value={timeLeft.minutes} text={date[1].minutes}/>
        {/* <hr aria-orientation="vertical" className="line_vertical" /> */}
        <NumberTime value={timeLeft.seconds} text={date[1].seconds} />
      </div>
      <img
        className="img_rings"
        src="/images/anillo-de-bodas.png"
        alt="argollas"
      />
    </div>
  );
};
