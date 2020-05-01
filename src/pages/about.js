import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//styles import
import aboutStyles from "../styles/styles.css"

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[
          `about`,
          `masaya`,
          `masaya shida`,
          `blog`,
          `masayablog`,
          `masaya's blog`,
          `masaya blog`,
        ]}
      />
      <div className="aboutContainer">
        <div className="flexAbout">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flexContact">
          <h2>Contact:</h2>
          <a
            href="mailto:info@breaddesignstudio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope"></i>
            <p>masayashida@gmail.com</p>
          </a>
          <span>
            <i className="fa fa-map-pin"></i>
            <p>Phnom Penh, Cambodia.</p>
          </span>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
