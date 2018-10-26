import Tile from "../tile";
import Section from "./layout";
import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <Section
        sectionName={"projects"}
        sectionTitle={"Projects"}
      >
        <Tile title={"project1"} body={"Lorem ipsum"}/>
      </Section>
    )
  }
}

export default Projects