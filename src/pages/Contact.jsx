import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <h1 className="text-3xl lg:text-5xl my-8 lg:my-16">
        Ready to connect with me?
      </h1>
      <form className="border border-black max-w-[24rem] lg:max-w-[38.875rem] lg:min-h-[439px] mx-auto p-4 flex flex-col justify-between lg:px-[64px] lg:pt-[64px]">
        <h2 className="font-bold text-3xl text-left mb-6">Lets connect!</h2>
        <div className="flex gap-3 justify-between my-4 ">
          <input
            className="border border-slate-500 w-full py-1 px-3"
            placeholder="First name"
          />
          <input
            className="border border-slate-500 w-full py-1 px-3"
            placeholder="Last name"
          />
        </div>
        <input
          type="email"
          className="border border-slate-500 w-full py-1 px-3 my-2"
          placeholder="Email address"
        />
        <input
          type="text"
          className="border border-slate-500 w-full py-1 px-3 my-2 min-h-[6rem]"
          placeholder="Enter text here"
        />
        <btn className="bg-sky-500 p-3 rounded-md my-4 text-white w-full lg:w-1/3">
          Get in Touch
        </btn>
      </form>
    </Layout>
  );
};

export default Contact;
