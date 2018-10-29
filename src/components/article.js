import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHeart } from "@fortawesome/free-solid-svg-icons";

class ArticleTile extends React.Component {
  render() {
    return (
      <div className="col-sm-4 col-md-4">
        <div className="blog">
          <div className="blog-img">
            <img
              className="img-responsive"
              src={
                "https://cdn-images-1.medium.com/max/500/" +
                this.props.article.virtuals.previewImage.imageId
              }
              alt="img"
            />
          </div>
          <div className="blog-content">
            <ul className="blog-meta">
              <li>
                <FontAwesomeIcon icon={faClock} />{" "}
                {this.props.article.createdAt}
              </li>
              <li>
                <FontAwesomeIcon icon={faHeart} />{" "}
                {this.props.article.virtuals.totalClapCount}
              </li>
            </ul>
            <h3>
              {" "}
              <a
                href={
                  "https://medium.com/leboincoin-engineering-blog/" +
                  this.props.article.slug +
                  "-" +
                  this.props.article.medium_id
                }
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
