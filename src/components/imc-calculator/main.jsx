import React, { useEffect, useState } from "react";
import RangeSlider from "./subcomponents/RangeSlider";
import styles from "./main.module.css";

const Calculator = () => {
  const [heigth, setHeigth] = useState(0);
  const [weigth, setWeigth] = useState(0);
  const [imc, setImc] = useState(0);
  const [description, setDesription] = useState("Delgado");
  const values = [
    {
      name: "weigth",
      unitOfMeasurement: "kg",
      range: {
        init: 40,
        limit: 180,
      },
      state: [weigth, setWeigth],
    },
    {
      name: "heigth",
      unitOfMeasurement: "cm",
      range: {
        init: 120,
        limit: 230,
      },
      state: [heigth, setHeigth],
    },
  ];

  useEffect(() => {
    const m = heigth / 100;
    const m2 = Math.pow(m, 2);
    const result = (weigth / m2).toFixed(2);
    setImc(result);
  }, [heigth, weigth]);

  useEffect(() => {
    if (imc < 18.5) {
      setDesription("Delgado");
    } else if (imc > 18.5 && imc < 24.9) {
      setDesription("Adecuado");
    } else if (imc > 24.9 && imc < 29.9) {
      setDesription("Sobrepeso");
    } else if (imc > 30) {
      setDesription("Obesidad");
    }
  }, [imc]);

  return (
    <div className={styles.card}>
      {values.map((item) => {
        return (
          <RangeSlider
            key={item.name}
            init={item.range.init}
            limit={item.range.limit}
            unitMeasurement={item.unitOfMeasurement}
            state={item.state}
          />
        );
      })}
      <div className={styles.results}>
        <p>{imc}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Calculator;
