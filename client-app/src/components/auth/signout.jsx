import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignOut extends Component {

    componentWillMount = () => this.props.signOutUser();

    render = () => <div>Sorry to see you go...</div>;

}

export default connect(null, actions)(SignOut);