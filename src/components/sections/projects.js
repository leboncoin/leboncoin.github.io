import Section from "./layout";
import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Project from "../project";

const GithubReposQuery = graphql`
  query {
    allGithubRepos(sort: { fields: [stars], order: DESC }) {
      edges {
        node {
          id
          name
          url
          stars
          description
        }
      }
    }
  }
`;

export default () => {
  return (
    <StaticQuery
      query={GithubReposQuery}
      render={data => {
        const { edges: projects } = data.allGithubRepos;
        return (
          <Section sectionName={"projects"} sectionTitle={"Projects"}>
            <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
              {projects.map(({ node }, index) => (
                <Project key={index} project={node} />
              ))}
            </div>
          </Section>
        );
      }}
    />
  );
};
