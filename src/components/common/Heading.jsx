import React from "react";

const Heading = ({ title, desc }) => {
  return (
    <section className="heading">
      <h2 className="text-red-500">{title}</h2>
      <p>{desc}</p>
    </section>
  );
};

export default Heading;
