import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Style from "style-it"


export default function Header({ siteTitle }) {
  return (
    <>
      <Style>
        {`
        header {
          display: grid;
          grid-template-columns: 1fr;
          padding: 30px;
        } 
        .item {
          padding: 10px;
          color: var(--white);
          text-align: center;

        }
        a:hover {
          color: var(--oslogray);
        }
        `}
      </Style>
      <header className="dark-shades-background">
        <div className="item">
          <Link
            to="/"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "4rem",
            }}
          >
            {siteTitle}
          </Link>
        </div>
        <div className="item">by Dev Tha Dude</div>
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
