import React from 'react'
import Layout from '../components/layout'
import Blog from "../components/sections/blog"
import Projects from "../components/sections/projects"
import Keys from "../components/sections/keys"

const IndexPage = () => (
  <Layout>
    <Blog/>
    <Keys/>
    <Projects/>
  </Layout>
);

export default IndexPage
