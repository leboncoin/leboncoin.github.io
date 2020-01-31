import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

class ArticleTile extends React.Component {
  render() {
    return (
      <div className="col-sm-4 col-md-4">
        <div className="blog">
          <div className="blog-img">
            <img
              className="img-responsive"
              src={this.props.article.thumbnail}
              alt="img"
            />
          </div>
          <div className="blog-content">
            <ul className="blog-meta">
              <li>
                <FontAwesomeIcon icon={faClock} /> {this.props.article.date}
              </li>
            </ul>
            <h3>
              <a
                href={this.props.article.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.article.title}
              </a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleTile;
