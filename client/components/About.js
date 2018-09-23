import React from "react";

const aboutStory = [
  "It must have been compulsive because before I could recognize the response, I'd explained in detail the scene transition in D2: The mighty ducks between the crowd chanting 'We will Quack you' to Queen's recording of 'We Will Rock' you at the 3rd act puck drop.",
  "These obscure compositions have always stayed with me, made me pick up the mental magnifying glass. I'd rewind them in my head and examine the relationship of part to part and what made a moment breath.",
  "For a while, I thought that my fascination was limited to only art, to compositions of language, color or sound. But a friend suggested code, I realized what I'd been missing.",
  "There's nothing like opening up a new code base and discovering where all the dots align, where the programmer has fused together pieces with logic or otherise"
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
