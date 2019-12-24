import React from "react"
import Link from "gatsby-link"
import Layout from '../components/layout'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className="card-panel">
        <h2 className="post-title">{post.frontmatter.title}</h2>
        <small>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </small>
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        
        <Link to="/blog">Go Back</Link>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
