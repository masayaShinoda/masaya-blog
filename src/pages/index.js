import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//styles import
import indexStyles from "../styles/styles.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="pageContainer">
      <img
        src="https://raw.githubusercontent.com/masayaShinoda/photography/master/src/assets/images/fulls/01.jpg"
        alt="Coming soon"
        className="homePageImage"
      ></img>
    </div>
  </Layout>
)

export default IndexPage
