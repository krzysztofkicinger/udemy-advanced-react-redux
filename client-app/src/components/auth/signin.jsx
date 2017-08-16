import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class SignIn extends Component {

    onSignInAction = ( { email, password }) => {
        console.log(`Sign in action: ${email}, ${password}`)
    };

    render = () => {

        console.log(this.props);

        const {
            handleSubmit,
            fields : {
                email,
                password
            }
        } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSignInAction)}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <input { ...email } className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <input { ...password } className="form-control" />
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign In</button>
            </form>
        )
    }

}

export default reduxForm({
    form: 'SignInForm',
    fields: [ 'email', 'password' ]
})(SignIn);