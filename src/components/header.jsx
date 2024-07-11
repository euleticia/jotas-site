import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 intro-text">
              <img src="../img/logo-branca.png" className="img-responsive" alt="Centered logo" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
