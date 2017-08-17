import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignUp extends Component {

    onSignUpAction = ( { email, password }) => {
        this.props.signUpUser({ email, password });
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

    renderAlert = () => {
        if(this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>{ this.props.errorMessage }</strong>
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
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    component={this.renderField}
                />
                { this.renderAlert() }
                <button action="submit" className="btn btn-primary">Sign Up</button>
            </form>
        )
    };

}

const mapStateToProps = ({ auth }) => ({
    errorMessage: auth.message
});

export default reduxForm({
    form: 'SignUpForm'
})(connect(mapStateToProps, actions)(SignUp));