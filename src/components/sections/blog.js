import Section from "./layout";
import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Article from "../article";

const mediumQuery = graphql`
  query {
    allMediumFeed(sort: { fields: date, order: DESC }, limit: 9) {
      edges {
        node {
          title
          slug
          date(formatString: "YYYY-MM-DD")
          thumbnail
          link
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
        const { edges: articles } = data.allMediumFeed;
        return (
          <Section sectionName={"blog"} sectionTitle={"Blog"}>
            <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
              {articles.map(({ node }, index) => (
                <Article key={index} article={node} />
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <a
                href="https://medium.com/leboncoin-engineering-blog"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="main-btn">Read more</button>
              </a>
            </div>
          </Section>
        );
      }}
    />
  );
};
