import React from "react"
import Link from 'gatsby-link'

import Layout from "../components/layout"
import SEO from "../components/seo"

const titleStyle = {
  marginBottom: 0
}
const excerptStyle = {
  margin: "20px 0px 5px",
}
const buttonStyle = {
  padding: 7,
  borderRadius: 5,
  border: 0,
  fontSize: ".9em",
  marginTop: 15,
  cursor: "pointer",
  color: "white"
}

function BlogPage({data}) {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1 className="page-title">Latest Post</h1>
      <div className="latest-post">
        {data.allMarkdownRemark.edges.map(post => {
            return (
              <div className="latest-post-item" key={post.node.id}>
                <h4 style={titleStyle}>{post.node.frontmatter.title}</h4>
                <small>
                  Posted by {post.node.frontmatter.author} -{" "}
                  {post.node.frontmatter.date}
                </small>

                <p style={excerptStyle}>{post.node.excerpt}</p>
                <Link to={post.node.frontmatter.path}>
                  <button class="primary" style={buttonStyle}>
                    Read More
                  </button>
                </Link>

                <br />
                <br />
                <hr />
              </div>
            )
        })}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
         query MyQuery {
           allMarkdownRemark {
             edges {
               node {
                 frontmatter {
                   author
                   date(fromNow: true)
                   path
                   title
                 }
                 id
                 excerpt
               }
             }
           }
         }
       `

export default BlogPage