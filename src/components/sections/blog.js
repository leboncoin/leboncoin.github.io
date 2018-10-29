import Section from "./layout";
import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Article from "../article";

const mediumQuery = graphql`
  query {
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          title
          slug
          medium_id
          createdAt
          virtuals {
            totalClapCount
            previewImage {
              imageId
            }
          }
        }
      }
    }
  }
`;

export default () => {
  return (
    <StaticQuery
      query={mediumQuery}
      render={data => {
        const { edges: articles } = data.allMediumPost;
        return (
          <Section sectionName={"blog"} sectionTitle={"Blog"}>
            <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
              {articles.map(({ node }, index) => (
                <Article key={index} article={node} />
              ))}
            </div>
          </Section>
        );
      }}
    />
  );
};
