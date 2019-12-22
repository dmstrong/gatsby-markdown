import React from 'react'
import Link from 'gatsby-link'
import Style from "style-it"


export default function Menu() {
    return (
      <>
      <Style>
        {`
        nav ul {
          display: flex;
          justify-content: space-evenly;
          margin: 0 auto;
          max-width: 960px;
          list-style: none;
          width: 100%;
          padding: 20px;
        }
        
          nav ul li a {
            color: var(--donkeybrown);
            text-decoration: none;
            font-size: 1.3rem;
            font-variant: all-small-caps;
          }
          nav ul li a:hover {
            color: var(--oslogray);
          }
       `}
      </Style>
      <nav class="light-shades-background">
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
          <Link to="/blog">
          Blog
          </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      </>
    )
}
