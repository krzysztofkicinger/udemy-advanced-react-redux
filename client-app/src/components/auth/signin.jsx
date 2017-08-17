import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class SignIn extends Component {

    onSignInAction = ( { email, password }) => {
        console.log(this.props);
        console.log(`Sign in action: ${email}, ${password}`);
        this.props.signInUser({ email, password });
    };

    renderField = field => {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type={field.type}
                    {...field.input}
                />
            </div>
        )
    };

    render = () => {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSignInAction.bind(this))}>
                <Field
                    label="Email"
                    name="email"
                    type="text"
                    component={this.renderField}
                />
                <Field
                    label="Email"
                    name="password"
                    type="password"
                    component={this.renderField}
                />
                <button action="submit" className="btn btn-primary">Sign In</button>
            </form>
        )
    }

}

export default reduxForm({
    form: 'SignInForm'
})(connect(null, actions)(SignIn));