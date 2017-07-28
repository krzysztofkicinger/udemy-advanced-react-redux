import React, { Component } from 'react';
import { connect } from 'react-redux';

const goToHome = Symbol();

export default function(ComposedComponent) {

    class Authentication extends Component {

        static contextTypes = {
            router: React.PropTypes.object
        };

        componentWillMount = () => this[goToHome](this.props);

        componentWillUpdate = (nextProps) => this[goToHome](nextProps);

        render() {
            return (
                <ComposedComponent {...this.props} />
            );
        }

        [goToHome]({ authenticated }) {
            if(!authenticated) {
                this.context.router.push('/');
            }
        }

    }

    function mapStateToProps({ authenticated }) {
        return { authenticated };
    }

    return connect(mapStateToProps)(Authentication);

}