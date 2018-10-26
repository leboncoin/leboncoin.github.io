import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import HomeWrapper from "./home/wrapper";

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
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <header id={"home"}>
          <div className="bg-img" style={{backgroundImage: "url('../static/background1.jpg')"}}>
            <div className="overlay"/>
          </div>
          <Header siteTitle={data.site.siteMetadata.title} />
          <HomeWrapper/>
        </header>
        <div>
          {children}

          {/* jQuery Plugins*/}
          <script type="text/javascript" src="js/jquery.min.js"></script>
          <script type="text/javascript" src="js/bootstrap.min.js"></script>
          <script type="text/javascript" src="js/owl.carousel.min.js"></script>
          <script type="text/javascript" src="js/jquery.magnific-popup.js"></script>
          <script type="text/javascript" src="js/main.js"></script>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
