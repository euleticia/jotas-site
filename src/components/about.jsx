import React from "react";
import GaleriaComponent from "./GaleriaComponent/GaleriaComponent";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <h2>Produtos</h2>
        <div className="row">
          <GaleriaComponent />
        </div>
      </div>
    </div>
  );
};
