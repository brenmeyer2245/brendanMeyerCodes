import React from 'react'

const projects = [{id: 0, name: "NiceBreakers", img: "/projects/niceBreakers.png", url: "https://nicebreakers.herokuapp.com", subtitle: "Real-Time Progressive Web App", developers: ", Kevin Lim, Patrick Kilgore", technologies: "React, Redux, Node.js, Express, Socket.io, Materialize CSS, Redux Forms, Postgres, Sequelize, Progressive Web App, Parallel Dots Sentiment API", description: "NiceBreakers is a web application that facilitates icebreaker events. Participants can join events where they will receive real-time prompts. After the event, sentiment text analysis will be used to determine recommendations for followups.", github: "https://github.com/nicebreakers/nicebreakers"},
{id: 1, name: "QuarterMaster", img: "/projects/The_quartermaster.png", url: "https://new-quartermaster.herokuapp.com", subtitle:"eCommerce Store", developers: ", Brandon Yee, Josh Knapp", technologies: "React, Redux, Node.js, Express, Bootstrap, Postgres, Sequelize", description: "An eCommerce store for purchasing live action role play equipment. A user can search by category, checkout items, examine order histories and write reviews for purchased items", github:"https://github.com/SeniorProjectWorkGroup/graceShopper"}]


const SingleProject = (props) => {
   const projectNumber = props.match.params.projectId - 1;
  return (
    <div>
    <hr className="divider" />
     <div className = "centerFlex">
       <img
       src={projects[projectNumber].img} />
     </div>
    <div className="centerFlex" style={{marginLeft: "25%"}}>
    <div style={{borderRight: "2px solid black", padding: ".5em"}}>
      <h1 style={{borderBottom: "3px solid black"}}> {projects[projectNumber].name}</h1>
    <div> <h4>{projects[projectNumber].subtitle}</h4></div>
    </div>
     <div style={{marginLeft:"1em"}}>
       <p> Developers: Brendan Meyer{projects[projectNumber].developers}</p>
       <p> Built With: {projects[projectNumber].technologies}</p>
       <p> Description: {projects[projectNumber].description}</p>
       <div className="centerFlex">
       <div style={{textDecoration:"none", backgroundColor:"#4286f4", borderRadius:"1em 1em", padding: "1em", marginRight: "1em", boxShadow: ".1em .1em .3em .1em"}}>
       <a style={{color:"white"}}href={projects[projectNumber].github}> Find on Github </a>
       </div>
       <div style={{textDecoration:"none", backgroundColor:"#4286f4", borderRadius:"1em 1em", padding: "1em", marginRight: "1em", boxShadow: ".1em .1em .3em .1em"}}>
       <a style={{color:"white"}}href={projects[projectNumber].url}> Visit App </a>
       </div>
       </div>
     </div>
    </div>
     <hr className="divider" />

  </div>

)}



export default SingleProject;
