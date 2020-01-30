import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

class YoutubeTile extends React.Component {
  render() {
    return (
      <div className="col-sm-4 col-md-4">
        <div className="blog">
          <div className="blog-img">
            <img
              className="img-responsive"
              src={this.props.video.thumbnail.url}
              alt="img"
            />
          </div>
          <div className="blog-content">
            <ul className="blog-meta">
              <li>
                <FontAwesomeIcon icon={faClock} />{" "}
                {this.props.video.publishedAt}
              </li>
            </ul>
            <h3>
              <a
                href={"https://youtu.be/" + this.props.video.videoId}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.video.title}
              </a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default YoutubeTile;
