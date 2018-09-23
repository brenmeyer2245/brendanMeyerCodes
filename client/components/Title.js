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
    <div style={{width: "25%", border: '3em solid #4286f4', boxShadow: "0.1em 0.2em 0.5em 0.04em"}}>
      <img
        className="hero_image"
        src="./headshots/headshot.jpg"
      />
    </div>
  </div>
);

export default Title;
