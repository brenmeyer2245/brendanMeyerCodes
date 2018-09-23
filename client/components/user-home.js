import React from 'react'
import Title from "./Title";
import Projects from "./Projects";
import Stack from "./Stack";
import About from "./About";
/**
 * COMPONENT
 */
export const UserHome = props =>  (
    <div>
      <Title />
      <hr className="divider" />
      <Projects />
      <hr className="divider" />
      <Stack />
      <hr className="divider" />
      <About />
    </div>
  );



/**
 * CONTAINER
 */

export default UserHome
