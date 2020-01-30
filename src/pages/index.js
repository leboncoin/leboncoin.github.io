import React from 'react'
import Layout from '../components/layout'
import Blog from "../components/sections/blog"
import Projects from "../components/sections/projects"
import {Keys, SecondKeys} from "../components/sections/keys"
import Youtube from "../components/sections/youtube"

const IndexPage = () => (
  <Layout>
    <Blog/>
    <Keys/>
    <Youtube/>
    <SecondKeys/>
    <Projects/>
  </Layout>
);

export default IndexPage
