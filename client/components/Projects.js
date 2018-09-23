import React from "react";

const myProjects = [{id: 1, name: "NiceBreakers", img: "./projects/niceBreakers.png"}, {id: 1, name: "The QuarterMaster", img: "./projects/The_quartermaster.png"}]

const Projects = () => (
  <div>
    <h2 style={{textAlign: "center"}}> Projects </h2>
    <div className="boxContainer">
    <div className="projectBox">
      <div className="projectSelect">
      {myProjects[0].name}
      <p>IceBreaker Facilitator</p>
      </div>
      <img className="projectImg" src={myProjects[0].img}/>
      </div>

      <div className="projectBox">
      <div className="projectSelect">
      {myProjects[1].name}
      <p>eCommerce Site</p>
      </div>
      <img className="projectImg" src={myProjects[1].img}/>
      </div>
    </div>
  </div>
);

export default Projects;
