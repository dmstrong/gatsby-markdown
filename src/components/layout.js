/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import Style from "style-it"

import Header from "./header"
import Menu from "./menu"
import "../css/materialize.css"
import "../css/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: "description", content: "This is a Gatsby.js website" },
          { name: "keywords", content: "Gatsby Blog, React Blog" },
        ]}
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Menu />
      <Style>
        {`
          
         `}
      </Style>
      <div class="container flow-text">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} Dev Tha Dude, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
