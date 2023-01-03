import { useEffect } from "react";
import { useState } from "react";
import styles from "./main.module.css";

const ClockC = () => {
  const [hourStyle, setHourStyle] = useState();
  const [minuteStyle, setMinuteStyle] = useState();
  const [secondStyle, setSecondStyle] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      let day = new Date();
      let hours = day.getHours() * 30;
      let minutes = day.getMinutes() * 6;
      let seconds = day.getSeconds() * 6;

      setHourStyle(hours + minutes / 12);
      setMinuteStyle(minutes);
      setSecondStyle(seconds);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.clock}>
      <div
        className={`${styles.hand} ${styles.hour}`}
        style={{ transform: `rotateZ(${hourStyle}deg)` }}
        data-hour-hand
      ></div>
      <div
        className={`${styles.hand} ${styles.minute}`}
        style={{ transform: `rotateZ(${minuteStyle}deg)` }}
      ></div>
      <div
        className={`${styles.hand} ${styles.second}`}
        style={{ transform: `rotateZ(${secondStyle}deg)` }}
      ></div>
      <div className={`${styles.number} ${styles.number1}`}>
        <span>1</span>
      </div>
      <div className={`${styles.number} ${styles.number2}`}>
        <span>2</span>
      </div>
      <div className={`${styles.number} ${styles.number3}`}>
        <span>3</span>
      </div>
      <div className={`${styles.number} ${styles.number4}`}>
        <span>4</span>
      </div>
      <div className={`${styles.number} ${styles.number5}`}>
        <span>5</span>
      </div>
      <div className={`${styles.number} ${styles.number6}`}>
        <span>6</span>
      </div>
      <div className={`${styles.number} ${styles.number7}`}>
        <span>7</span>
      </div>
      <div className={`${styles.number} ${styles.number8}`}>
        <span>8</span>
      </div>
      <div className={`${styles.number} ${styles.number9}`}>
        <span>9</span>
      </div>
      <div className={`${styles.number} ${styles.number10}`}>
        <span>10</span>
      </div>
      <div className={`${styles.number} ${styles.number11}`}>
        <span>11</span>
      </div>
      <div className={`${styles.number} ${styles.number12}`}>
        <span>12</span>
      </div>
    </div>
  );
};

export default ClockC;
