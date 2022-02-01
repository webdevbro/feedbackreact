import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ title, bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="header-container">
        <Link to="/">
          <h2>{title}</h2>
        </Link>
        <div className="nav-container">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "Ratings App",
  bgColor: "rgba(0, 0, 0, 0.4 )",
  textColor: "#FFF8F8",
};

Header.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
