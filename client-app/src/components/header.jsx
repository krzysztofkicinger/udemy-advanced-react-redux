import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

    render = () => {
        return (
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <Link to="/" className="navbar-brand">Redux Auth</Link>
                    { this.props.authenticated ? this.renderSignOutListItem() : this.renderNotAuthorizedUserActions() }
                </ul>
            </nav>
        )
    };

    renderSignInListItem = () => {
        return this.renderListItem('Sign In', '/signin');
    };

    renderNotAuthorizedUserActions = () => [
        this.renderSignInListItem(),
        this.renderSignUpListItem()
    ];

    renderSignOutListItem = () => {
        return this.renderListItem('Sign Out', '/signout');
    };

    renderSignUpListItem = () => {
        return this.renderListItem('Sign Up', '/signup');
    };

    renderListItem = (label, path) =>
        <li className="nav-item" key={path}>
            <Link className="nav-link" to={path}>{label}</Link>
        </li>;

}

const mapStateToProps = ({ auth }) => ({
    authenticated: auth.authenticated
});

export default connect(mapStateToProps)(Header);