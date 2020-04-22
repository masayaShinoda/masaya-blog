import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// import themtoggler
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div>
        <div className="headerNavSection">
          <Link to="/">
            <i className="fa fa-home"></i>Home
          </Link>
          <Link to="/blog">
            <i className="fa fa-align-left"></i>Read
          </Link>
          <Link to="/about">
            <i className="fa fa-address-book"></i>About
          </Link>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <label
                style={{
                  cursor: `pointer`,
                  padding: `0`,
                  margin: `0`,
                  lineHeight: `0`,
                }}
              >
                <input
                  type="checkbox"
                  onChange={e =>
                    toggleTheme(e.target.checked ? "dark" : "light")
                  }
                  checked={theme === "dark"}
                  style={{ visibility: `hidden` }}
                />
                <i
                  className="fa fa-moon-o"
                  title="Enable/Disable Dark Mode"
                  style={{ fontSize: `1.5em` }}
                ></i>
              </label>
            )}
          </ThemeToggler>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Masaya's Blog`,
}

export default Header
