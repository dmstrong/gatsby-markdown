import React from "react"
import Link from "gatsby-link"
import Layout from '../components/layout'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
    <h1
    style={{
      marginBottom: 0,
    }}
    >
    {post.frontmatter.title}
    </h1>
    <small>
    Posted by {post.frontmatter.author} on {post.frontmatter.date}
    </small>
    <div
    style={{
      marginTop: 50,
    }}
    dangerouslySetInnerHTML={{ __html: post.html }}
    />
    <hr />
    <Link to="/blog">Go Back</Link>
    <br />
    <br />
    <br />
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
