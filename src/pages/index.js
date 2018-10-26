import React from 'react'
import Layout from '../components/layout'
import Tile from "../components/tile"
import {Articles} from "../components/article"
import Title from "../components/title"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
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
        <div className="row">
        <Articles articles={data.allMediumPost.edges} />
        </div>
      </div>
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
}
`
