import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class SignUp extends Component {

    render = () => {
        return (
            <div>Sign Up </div>
        )
    };

}

export default reduxForm({
    form: 'SignUpForm'
})(SignUp);