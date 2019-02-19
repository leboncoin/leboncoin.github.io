import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../static/css/bootstrap.min.css'
import './layout.css'
import HomeWrapper from "./home/wrapper";
import Background from '../images/background-terrace.jpg'
import Footer from "./footer";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Creative engineers and data scientists building a French virtual Flea Market for everyone.' },
            { name: 'keywords', content: 'leboncoin, marketplace, technologies, devops, data, golang, react, postgres' },
          ]}
        >
          <html lang="en" />
      </Helmet>
        <header id={"home"}>
          <div className="bg-img" style={{backgroundImage: `url(${Background})`}}>
            <div className="overlay"/>
          </div>
          <Header siteTitle={data.site.siteMetadata.title} />
          <HomeWrapper/>
        </header>
        <div>
          {children}
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:600" rel="stylesheet"/>
        </div>
        <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
