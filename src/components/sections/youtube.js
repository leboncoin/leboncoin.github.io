import Section from "./layout";
import React from "react";
import { graphql, StaticQuery } from "gatsby";
import YoutubeTile from "../youtube";

const youtubeQuery = graphql`
  query {
    allYoutubeVideo(sort: { fields: publishedAt, order: DESC }, limit: 9) {
      edges {
        node {
          thumbnail {
            url
          }
          id
          title
          description
          videoId
          publishedAt
        }
      }
    }
  }
`;

export default () => {
  return (
    <StaticQuery
      query={youtubeQuery}
      render={data => {
        const { edges: videos } = data.allYoutubeVideo;
        return (
          <Section sectionName={"youtube"} sectionTitle={"Videos"}>
            <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
              {videos.map(({ node }, index) => (
                <YoutubeTile key={index} video={node} />
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <a
                href="https://youtube.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="main-btn">See more</button>
              </a>
            </div>
          </Section>
        );
      }}
    />
  );
};
