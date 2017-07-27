import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions  from '../actions/index';
import { connect } from 'react-redux';

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
        console.log(`Authenticated ${this.props.authenticated}`)
        return this.props.authenticated ? this.renderAuthButton(false, 'Sing Out') : this.renderAuthButton(true, 'Sing In');
    }

    renderAuthButton(authenticated, label) {
        return <button onClick={() => this.props.authenticate(authenticated)}>{ label }</button>
    }

}

function mapStateToProps({ authenticated }) {
    return { authenticated };
}

export default connect(mapStateToProps, actions)(Header);