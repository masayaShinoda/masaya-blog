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
            I'm a highschool student from Cambodia. This blog was created with
            the aim of learning web development, but I later learnt that writing
            is a great way to force myself to do research, and articulate my
            thoughts on topics and ideas that matter. This is a place to share
            what I've learnt.
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
