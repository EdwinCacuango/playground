import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useState } from "react";
import Card from "./subcomponents/Card";
import styles from "./main.module.css";
const AgeCalculator = () => {
  const [year, setYears] = useState("-");
  const [month, setMonth] = useState("-");
  const [day, setDay] = useState("-");
  const [date, setDate] = useState();

  const inputHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const currentDate = new Date().getTime();
    const bornDate = new Date(date).getTime();
    const result = currentDate - bornDate;

    const unitYear = 1000 * 60 * 60 * 24 * 365;
    const yearResult = Math.floor(result / unitYear);

    const prev = result % unitYear;
    const unitMonth = 1000 * 60 * 60 * 24 * 30;
    const monthResult = Math.floor(prev / unitMonth);

    const prevM = result % unitMonth;
    const unitDay = 1000 * 60 * 60 * 24;
    const dayResult = Math.floor(prevM / unitDay);

    // const monthResult = ((result % unitConversion) / unitConversion) * 30;
    // const dayResult = Math.floor(result % );

    setYears(yearResult);
    setMonth(monthResult);
    setDay(dayResult);
  };

  return (
    <div>
      <form className={styles.bornDateContainer} onSubmit={submitHandler}>
        <div className={styles.inputContainer}>
          <input type="date" className="input" onChange={inputHandler} />
          <CalendarTodayIcon />
        </div>
        <button className={styles.calculateBtn}>Calculate</button>
      </form>
      <div className={styles.results}>
        <Card value={year} unit="years" />
        <Card value={month} unit="months" />
        <Card value={day} unit="days" />
      </div>
    </div>
  );
};

export default AgeCalculator;
