import React from 'react'
import Layout from '../components/layout'
import Section from '../components/sections/layout'
const NotFoundPage = () => (
  <Layout>
    <Section sectionName={"404"} sectionTitle={"Oops"}>
          <p style={{textAlign: "center"}} >Tu t'es égaré</p>
    </Section>
  </Layout>
)

export default NotFoundPage
