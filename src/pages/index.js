import React from 'react'
import Layout from '../components/layout'
import Tile from "../components/tile"
import ArticleTile from "../components/article"
import Title from "../components/title"
import { graphql } from "gatsby"
import {MediumList} from "../components/medium"

const IndexPage = () => (
  <Layout>
    <div id="about" className="section md-padding">
      <div className="container">
        <Title title={"About"}/>
        <Tile title={"about1"} body={"Lorem ipsum"}/>
      </div>
    </div>
    <div id="blog" className="section md-padding">
      <div className="container">
        <Title title={"Blog"}/>
        <ArticleTile title={"Article 1"} body={"Article 1"}/>
      </div>
    </div>
    <div>
      <MediumList posts={data.allMediumPost.edges} />
    </div>
  </Layout>
);

export default IndexPage

export const query = graphql`
query {
  allMediumPost(sort: { fields: [createdAt], order: DESC }) {
    edges {
      node {
        id
        title
        slug
        medium_id
        virtuals {
          subtitle
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
}
`
