import React from "react";

const Title = () => (
  <div id="title">
    <div className="textBlock_columns">
      <div>
        <span className="name">Brendan</span>
      </div>
      <div>
        <span className="name">Meyer</span>
      </div>
      <div>
        <span
          style={{
            color: "#4286f4",
            fontSize: "36px",
            fontFamily: "Georgia, 'Times New Roman', 'Times, serif'"
          }}
        >
          Codes
        </span>
      </div>
    </div>
    <div className="hero_frame">
      <img
        className="hero_image"
        src="./headshots/headshot.jpg"
      />
    </div>
  </div>
);

export default Title;
