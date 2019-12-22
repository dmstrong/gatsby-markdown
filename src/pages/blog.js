import React from "react"
import Link from 'gatsby-link'

import Layout from "../components/layout"
import SEO from "../components/seo"

function BlogPage({data}) {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>100 Days of Code</h1>
      {data.allMarkdownRemark.edges.map(post => {
          return (
            <div key={post.node.id}>
              <h3>{post.node.frontmatter.title}</h3>
              <small>
                Posted by {post.node.frontmatter.author} on{" "}
                {post.node.frontmatter.date}
              </small>
              <br />
              <br />
              <Link to={post.node.frontmatter.path}>Read More...</Link>
              <br />
              <br />
              <hr />
            </div>
          )
      })}
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
               }
             }
           }
         }
       `

export default BlogPage