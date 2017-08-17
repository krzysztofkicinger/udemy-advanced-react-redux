import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignUp extends Component {

    onSignUpAction = ( { email, password }) => {
        this.props.signUpUser({ email, password });
    };

    renderField = field => {
        console.log(field);
        return (
            <div>
                <div className="form-group">
                    <label>{field.label}</label>
                    <input
                        className="form-control"
                        type={field.type}
                        {...field.input}
                    />
                </div>
                { this.renderFieldAlert(field) }
            </div>
        )
    };

    renderFieldAlert = (field) => {
        const errorMessage = field.meta.touched && field.meta.error;
        if(errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>{ errorMessage }</strong>
                </div>
            );
        }
    };

    render = () => {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSignUpAction.bind(this))}>
                <Field
                    label="Email"
                    name="email"
                    type="text"
                    component={this.renderField}
                />
                <Field
                    label="Password"
                    name="password"
                    type="password"
                    component={this.renderField}
                />
                <Field
                    label="Password Confirm"
                    name="passwordConfirm"
                    type="password"
                    component={this.renderField}
                />
                <button action="submit" className="btn btn-primary">Sign Up</button>
            </form>
        )
    };

}

const mapStateToProps = ({ auth }) => ({
    errorMessage: auth.message
});

const validate = (formProperties) => {
    const errors = {};

    if(!formProperties.email) {
        errors.email = 'Please enter an email';
    }

    if(!formProperties.password) {
        errors.password = 'Please enter a password';
    }

    if(!formProperties.passwordConfirm) {
        errors.passwordConfirm = 'Please enter a password confirmation';
    }

    if(formProperties.password !== formProperties.passwordConfirm) {
        errors.password = 'Passwords must match';
    }
    return errors;
};

export default reduxForm({
    form: 'SignUpForm',
    validate
})(connect(mapStateToProps, actions)(SignUp));