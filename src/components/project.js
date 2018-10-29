import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/fontawesome-free-brands";

export class ProjectTile extends React.Component {
  render() {
    return (
      <div className="col-sm-4 col-md-4">
        <a className="project" target="_blank" rel="noopener noreferrer" href={this.props.project.url}>
            <FontAwesomeIcon icon={faGithub} />{" "}
            <h3>{this.props.project.name}</h3>
            <p>{this.props.project.description}</p>
            {
              this.props.project.topics
              .filter((i, index) => (index < this.props.tagsNumber))
              .map((topic) => <span>{topic}</span>)
            }
        </a>
      </div>
    );
  }
}

export default ProjectTile;
