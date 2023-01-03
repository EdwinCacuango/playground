import styles from "../main.module.css";

const RangeSlider = ({ init, limit, unitMeasurement, state }) => {
  const inputHandler = (e) => {
    state[1](e.target.value);
  };

  return (
    <div className={styles.slideBar}>
      <input
        type="range"
        min={init}
        max={limit}
        value={state[0]}
        onChange={inputHandler}
      />
      <p>
        {state[0]} {unitMeasurement}
      </p>
    </div>
  );
};

export default RangeSlider;
