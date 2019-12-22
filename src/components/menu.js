import React from 'react'
import Link from 'gatsby-link'

const menuStyle = {
    background: '#f4f4f4',
    paddingTop: '10px'
}
const listStyle = {
  listStyle: 'none',
  display: "flex",
  justifyContent: 'space-evenly'
}

export default function Menu() {
    return (
      <div style={menuStyle}>
        <ul style={listStyle}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    )
}
