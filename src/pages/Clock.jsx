import React from "react";
import Layout from "../components/Layout";
import ClockC from "../components/clock/ClockC";

const Clock = () => {
  return (
    <Layout>
      <div className="mx-auto flex justify-center">
        <ClockC />
      </div>
    </Layout>
  );
};

export default Clock;
