import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

const goToHome = Symbol();

export default function(ComposedComponent) {

    class Authentication extends Component {

        componentWillMount = () => this[goToHome](this.props);

        componentWillUpdate = (nextProps) => this[goToHome](nextProps);

        render = () => {
            console.log(this.props);
            return <ComposedComponent { ...this.props} />;
        };

        [goToHome]({ authenticated }) {
            if(!authenticated) {
                browserHistory.push('/');
            }
        }

    }

    const mapStateToProps = ({ auth }) => ({ authenticated: auth.authenticated });

    return connect(mapStateToProps)(Authentication);

}