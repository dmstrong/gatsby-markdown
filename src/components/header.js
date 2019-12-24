import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

export default function Header({ siteTitle }) {
  return (
    <>
      <header className="header-container">
        <div className="title center-align z-depth-3">
          <Link className="site-title" to="/">
            {siteTitle}
            <div className="site-subtitle">by Dev Tha Dude</div>
          </Link>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
