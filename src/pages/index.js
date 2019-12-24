import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi, I'm Derrick</h1>
      <p>
        Also known as Dev Tha Dude, here with a new Gatsby site. In this site, I will be creating a blog
        running on Gatsby.js and Markdown.
      </p>
    </Layout>
  )
}
