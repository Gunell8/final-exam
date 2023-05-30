import React from "react";
import "./style.scss";
export const Carousel = ({ title, name2, name1, img }) => {
  console.log(img);
  return (
    <div>
      <div>
        <div
          className="bg"
          style={{ background: `rgba(0, 0, 0, 0) url(${img})` }}
        >
          <div className="container">
            <div className="txt">
              <h1>{name1}</h1>
              <h2>{name2}</h2>
              <p>{title}</p>
              <button>SEE OUR PROJECTS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
