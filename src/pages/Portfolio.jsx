import React from "react";
import imgPortfolio from "../asset/image/bbaa4adb-3087-4ef2-9bfb-70172815e603.jpeg";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <img className="profileImage" src={imgPortfolio} alt="" />

      <div className="details text-center">
        <p className="fw-bold fs-4">Hi</p>
        <h3 className="text-warning display-4 bold">I'M Selina Nkuna</h3>
        <p className="fs-4 fw-bold">Software Developer</p>
      </div>
    </div>
  );
};

export default Portfolio;
