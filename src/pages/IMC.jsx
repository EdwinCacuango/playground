import React from "react";
import Calculator from "../components/imc-calculator/main";
import Layout from "../components/Layout";

const IMC = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center">
        <Calculator />
      </div>
    </Layout>
  );
};

export default IMC;
