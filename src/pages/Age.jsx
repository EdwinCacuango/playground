import React from "react";
import AgeCalculator from "../components/age-calculator/main";
import Layout from "../components/Layout";

const Age = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center">
        <AgeCalculator />
      </div>
    </Layout>
  );
};

export default Age;
