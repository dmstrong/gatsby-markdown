import React from "react"
import Link from 'gatsby-link'

import Layout from "../components/layout"
import SEO from "../components/seo"

function BlogPage({data}) {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1 className="page-title">Latest Post</h1>
      <div className="latest-post">
        {data.allMarkdownRemark.edges.map(post => {
            return (
              <div key={post.node.id} className="card-panel white-background">
                <h3 className="latest-post-item">
                  {post.node.frontmatter.title}
                </h3>
                
                <small>
                  Posted by {post.node.frontmatter.author} -
                  {post.node.frontmatter.date}
                </small>

                <p className="excerpt">{post.node.excerpt}</p>
                <Link to={post.node.frontmatter.path}>
                  <button class="btn main-brand-color-background center-align hoverable">
                    Read More
                  </button>
                </Link>
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