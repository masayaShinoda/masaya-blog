import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//styles import
import blogStyles from "../styles/styles.css"
//icons import
import homeIcon from "../assets/home-icon.png"
import podcastsIcon from "../assets/podcasts-icon.png"
import blogIcon from "../assets/blog-icon.png"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="pageContainer">
        <h1>Blog</h1>
        <h3 style={{ fontStyle: `italic` }}>Web Design</h3>
        <div className="blogContainer">
          <ul>
            {data.allMarkdownRemark.edges.map(edge => {
              return (
                <li>
                  <Link to={`/blog/${edge.node.fields.slug}`}>
                    <h2>{edge.node.frontmatter.title}</h2>
                    <p>{edge.node.frontmatter.date}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
