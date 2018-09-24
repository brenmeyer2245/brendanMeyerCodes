import React from "react";
import {Link} from 'react-router-dom';
const myProjects = [{id: 1, name: "NiceBreakers", img: "./projects/niceBreakers.png"}, {id: 1, name: "The QuarterMaster", img: "./projects/The_quartermaster.png"}]

const Projects = () => (
  <div>
    <h2 style={{textAlign: "center"}}> Projects </h2>
    <div className="boxContainer">
    <div className="projectBox">
      <div className="projectSelect">
      <Link to="/project/1">  {myProjects[0].name} </Link>
      <Link to="/project/1"> IceBreaker Facilitator </Link>
      </div>
      <img className="projectImg" src={myProjects[0].img}/>
      </div>

      <div className="projectBox">
      <div className="projectSelect">
      <Link to="/project/1">
      {myProjects[1].name}
      </Link>
      <Link to="/project/1"> Commerce Site </Link>
      </div>
      <img className="projectImg" src={myProjects[1].img}/>
      </div>
    </div>
  </div>
);

export default Projects;
