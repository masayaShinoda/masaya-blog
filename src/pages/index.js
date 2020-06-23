import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"

//styles import
import indexStyles from "../styles/styles.css"

const IndexPage = () => (
  <Layout>
    <Helmet>
      {/*<!-- Primary Meta Tags -->*/}
      <meta name="title" content="Masaya's Blog" />
      <meta
        name="description"
        content="Here is where I articulate and share my thoughts. Hope you find something interesting to read while you're here 😄."
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://masayablog.netlify.com/" />
      <meta property="og:title" content="Masaya's Blog" />
      <meta
        property="og:description"
        content="Here is where I articulate and share my thoughts. Hope you find something interesting to read while you're here 😄."
      />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/masayaShinoda/photography/master/src/assets/images/angkor.jpg"
      />
      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content="Masaya's Blog" />
      <meta
        property="twitter:description"
        content="Here is where I articulate and share my thoughts. Hope you find something interesting to read while you're here 😄."
      />
      <meta
        property="twitter:image"
        content="https://raw.githubusercontent.com/masayaShinoda/photography/master/src/assets/images/fulls/01.jpg"
      ></meta>
      <meta
        name="google-site-verification"
        content="oGtdccjbXYieyxzBCZTLAhlNJh9Cbbpr82fUirt1lHc"
      />
      <SEO
        title="Home"
        keywords={[
          `home`,
          `masaya`,
          `masaya shida`,
          `blog`,
          `masayablog`,
          `masaya's blog`,
          `masaya blog`,
        ]}
      />
    </Helmet>
    <div className="pageContainer">
      <section>
        <h1>Welcome!</h1>
        <p>
          Here is where I learn to articulate and share my thoughts. Hope you
          find something interesting to <Link to="/blog">read</Link> while
          you're here 😄.{" "}
        </p>
        <p>
          Are you into photography? Give this other{" "}
          <a href="https://masayaphoto.netlify.app">site</a> a visit 📷.
        </p>
      </section>
    </div>
  </Layout>
)

export default IndexPage
