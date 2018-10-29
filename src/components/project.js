import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/fontawesome-free-brands";

export class ProjectTile extends React.Component {
  render() {
    return (
      <div className="col-sm-4 col-md-4">
        <a className="project" style={{display: "block"}} href="https://google.com">
            <FontAwesomeIcon icon={faGithub} />{" "}
            <h3><a target="_blank" rel="noopener noreferrer" href={this.props.project.url}>{this.props.project.name}</a></h3>
            <p>{this.props.project.description}</p>
            {this.props.project.topics.map((topic) => <span>{topic}</span>)}
        </a>
      </div>
    );
  }
}

export default ProjectTile;
