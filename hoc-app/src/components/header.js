import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        return(
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li className="nav-item">
                        { this.authButton() }
                    </li>
                </ul>
            </nav>
        )
    }

    authButton() {
        return (
            <button>
                Sign In
            </button>
        )
    }

}

export default Header;