import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../static/css/bootstrap.min.css'
import './layout.css'
import HomeWrapper from "./home/wrapper";
import Background from '../images/background1.jpg'

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
          <div className="bg-img" style={{backgroundImage: `url(${Background})`}}>
            <div className="overlay"/>
          </div>
          <Header siteTitle={data.site.siteMetadata.title} />
          <HomeWrapper/>
        </header>
        <div>
          {children}
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700%7CVarela+Round" rel="stylesheet"/>
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
