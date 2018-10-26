import React from 'react'
import Layout from '../components/layout'
import Tile from "../components/tile"
import Title from "../components/title"

const IndexPage = () => (
  <Layout>
    <div id="about" className="section md-padding">
      <div className="container">
        <Title title={"test"}/>
        <Tile title={"test"} body={"Test text"}/>
      </div>
    </div>
  </Layout>
)

export default IndexPage

