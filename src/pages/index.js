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
      <section>
        <h1>Welcome to my site!</h1>
      </section>
    </div>
  </Layout>
)

export default IndexPage
