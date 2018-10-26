import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/fontawesome-free-brands";

export class ProjectTile extends React.Component {
  render() {
    return (
      <div className="col-sm-4 col-md-4">
        <div className="project">
            <FontAwesomeIcon icon={faGithub} />{" "}
            <h3><a target="_blank" rel="noopener noreferrer" href={this.props.project.url}>{this.props.project.name}</a></h3>
            <p>{this.props.project.description}</p>
        </div>
      </div>
    );
  }
}

export default ProjectTile;
