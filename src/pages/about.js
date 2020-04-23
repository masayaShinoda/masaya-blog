import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//styles import
import aboutStyles from "../styles/styles.css"
//icons import
import homeIcon from "../assets/home-icon.png"
import podcastsIcon from "../assets/podcasts-icon.png"
import blogIcon from "../assets/blog-icon.png"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" keywords={[`about`]} />
      <div className="pageContainer">
        <div className="aboutContainer">
          <div className="flexAbout">
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
              <p>info@breaddesignstudio.com</p>
            </a>
            <span>
              <i className="fa fa-map-pin"></i>
              <p>Phnom Penh, Cambodia.</p>
            </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage