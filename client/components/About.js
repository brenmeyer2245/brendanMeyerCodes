import React from "react";

const aboutStory = [
  "It must have been compulsive. Before I could recognize the stunned responses of my coworkers, I'd explained in detail the scene transition in D2: The Mighty Ducks between the crowd chanting 'We will Quack you' to Queen's recording of 'We Will Rock' you at the 3rd act puck drop.",
  "I don't remember what caused the War of 1812, but these obscure compositions have always stayed with me, made me curious. I'd examine them and study their anatomy, what made them breath.",
  "For a while, I thought that my fascination was limited to only art, to compositions of language, color or sound. So I became an artist and an actor. But after a friend suggested code, I quickly realized what I'd been missing.",
  "I love clean and direct code. I love code composed of the wit, science and passion of collaborators to create truly unique solutions"
];

const About = () => (
  <div id="about">
    <div className="aboutColumn">
      <div className="textBlock-hero">
      <img  src="http://www.jbmeyer.org/wp-content/uploads/2016/09/Headphones-e1480976520308.jpg" />
      </div>
      <div className="columnText" />
      <p> {aboutStory[0]}</p>
      <p> {aboutStory[1]}</p>
    </div>
    <div className="aboutColumn">
      <p> {aboutStory[2]}</p>
      <p> {aboutStory[3]}</p>
    </div>
  </div>
);

export default About;
