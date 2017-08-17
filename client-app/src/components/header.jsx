import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    renderSignInListItem = () => {
        return this.renderListItem('Sign In');
    };

    renderSignOutListItem = () => {
        return this.renderListItem('Sign Out');
    };

    renderListItem = (label) =>
        <li className="nav-item">
            { label }
        </li>;

    render = () => {
        console.log(`Authenticated ${this.props.authenticated}`);
        return (
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    { this.props.authenticated ? this.renderSignOutListItem() : this.renderSignInListItem() }
                </ul>
            </nav>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        authenticated: state.auth.authenticated
}};

export default connect(mapStateToProps)(Header);