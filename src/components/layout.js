import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../static/css/bootstrap.min.css'
import '../static/css/layout.css'
import HomeWrapper from "./home/wrapper";
import Background from '../images/background-terrace.jpg'
import Footer from "./footer";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteMetaQuery {
        site {
          siteMetadata {
            title,
            description,
            keywords
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          <meta name="keywords" content={data.site.siteMetadata.keywords} />
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
