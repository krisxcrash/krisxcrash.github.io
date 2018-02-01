import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav className="custom-navbar">
            <IndexLink to="/" activeClassName="active nav-links">Home</IndexLink>
            {" | "}
            <Link to="/about" activeClassName="active nav-links">About</Link>
            {" | "}
            <Link to="/signup" activeClassName="active nav-links">Sign Up</Link>
        </nav>
    );
};

export default Header;