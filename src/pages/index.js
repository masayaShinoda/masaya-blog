import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//styles import
import indexStyles from "../styles/styles.css"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `home`,
        `masaya`,
        `masaya shida`,
        `blog`,
        `masayablog`,
        `masaya's blog`,
      ]}
    />
    <div className="pageContainer">
      <section>
        <h1>Welcome to my site!</h1>
        <p>
          Here is where I articulate and share my thoughts. Hope you find
          something interesting to <Link to="/blog">read</Link> &#128516;.{" "}
        </p>
      </section>
    </div>
  </Layout>
)

export default IndexPage
