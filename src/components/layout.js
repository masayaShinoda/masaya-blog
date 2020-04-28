/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import layoutStyles from "../styles/styles.css"
import lightAndDarknessStyles from "../styles/light-and-darkness.css"

// import favicons
import "../assets/css/font-awesome.min.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          copyright
        }
      }
    }
  `)

  return (
    <div className="parent">
      <Helmet>
        {/*<!-- Primary Meta Tags -->*/}
        <title>Masaya's Blog</title>
        <meta name="title" content="Masaya's Blog" />
        <meta
          name="description"
          content="Here is where I articulate and share my thoughts. Hope you find something interesting to read while you're here 😄.

I also write guides and tips for fellow beginner web designers."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://masayablog.netlify.com/" />
        <meta property="og:title" content="Masaya's Blog" />
        <meta
          property="og:description"
          content="Here is where I articulate and share my thoughts. Hope you find something interesting to read while you're here 😄.

I also write guides and tips for fellow beginner web designers."
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/masayaShinoda/photography/master/src/assets/images/angkor.jpg"
        />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {data.site.siteMetadata.copyright} {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
