import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <h1 className="text-5xl lg:my-6 my-10">Edwin Cacuango Cahueñas</h1>
      <p className="max-w-[30rem] lg:min-w-[50rem] text-center mx-3 my-2 lg:mx-auto leading-7">
        Hola¡ Déjame te cuento mi historia: mi interés en el mundo del
        desarrollo empezó allá por el 2020 cuando me involucré en el uso de
        herramientas web y control ciudadano. En este poco tiempo he descubierto
        todas las ventajas y oportunidades que suponen la fusión de la
        tecnología y el derecho y estoy realmente entusiasmado de poder
        colaborar en la creación y distribución de dichas soluciones digitales.
      </p>
    </Layout>
  );
};

export default About;
