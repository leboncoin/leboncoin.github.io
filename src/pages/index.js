import React from 'react'
import Layout from '../components/layout'
import Tile from "../components/tile"
import Title from "../components/title"
import React from "react"
import { graphql } from "gatsby"
import Medium from "../components/medium"

const IndexPage = () => (
  <Layout>
    <div id="about" className="section md-padding">
      <div className="container">
        <Title title={"test"}/>
        <Tile title={"test"} body={"Test text"}/>
      </div>
    </div>
    <div>
    {data.allMediumPost.edges.map(({ node }, index) => (
        <Medium article={node} />
    ))}
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
query {
  allMediumPost(sort: { fields: [createdAt], order: DESC }) {
    edges {
      node {
        id
        title
        virtuals {
          subtitle
          previewImage {
            imageId
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
