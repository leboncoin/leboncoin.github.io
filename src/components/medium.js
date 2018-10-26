import React from "react";

export class Medium extends React.Component {
  render() {
    return (
      <div class="medium_card">
        <span class="medium_title">
          <a
            href={
              "https://medium.com/leboincoin-engineering-blog/" +
              this.props.article.slug +
              "-" +
              this.props.article.medium_id
            }
          >
            <img
              src={
                "https://cdn-images-1.medium.com/max/" +
                this.props.article.virtuals.previewImage.originalWidth +
                "/" +
                this.props.article.virtuals.previewImage.imageId
              }
            />
            {this.props.article.title}
          </a>
        </span>
        <span class="medium_subtitle">
          {this.props.article.virtuals.subtitle}
        </span>
      </div>
    );
  }
}

export class MediumList extends React.Component {
  render() {
    return (
      <>
        {this.props.posts.map(({ node }, index) => (
          <ul>
            <li>
              <Medium article={node} />
            </li>
          </ul>
        ))}
      </>
    );
  }
}

export default Medium;
