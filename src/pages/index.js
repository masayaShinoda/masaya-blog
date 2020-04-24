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
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      />
    </Helmet>
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
          something interesting to <Link to="/blog">read</Link> while you're
          here 😄.{" "}
        </p>
        <p>
          I also write <Link to="/blog#web_design">guides and tips</Link> for
          fellow beginner web designers.
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
