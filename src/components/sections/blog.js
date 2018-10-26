import Section from "./layout";
import React from "react";
import {graphql, StaticQuery} from "gatsby";
import Article from "../article";

const mediumQuery = graphql`
query {
  allMediumPost(sort: { fields: [createdAt], order: DESC }) {
    edges {
      node {
        id
        title
        slug
        medium_id
        createdAt
        virtuals {
          totalClapCount
          previewImage {
            imageId
            originalWidth
          }
        }
        author {
          name
        }
      }
    }
  }
}`;

export default () => {
  return (
    <StaticQuery
      query={mediumQuery}
      render={
        data => {
          const {edges: articles} = data.allMediumPost;
          return (
            <Section
              sectionName={"blog"}
              sectionTitle={"Blog"}
            >
              {articles.map(({ node }, index) =>
                <Article key={index} article={node} />
              )}
            </Section>
          )
        }
      }
    />
  )
}
