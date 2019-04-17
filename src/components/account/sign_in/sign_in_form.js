import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../../general/input';

const SignInForm = props => {
    console.log('Sign in form props: ', props);
    const { handleSubmit, signIn } = props;

    return (
        <form onSubmit={handleSubmit(signIn)}>
            <div className="row">
                <Field id="email" col="s12" name="email" component={Input} label="Email" />
            </div>
            <div className="row">
                <Field id="password" col="s12" name="password" component={Input} type="password" label="Password" />
            </div>
            <div className="row">
                <div className="col s12">
                    <button className="btn btn-large right green darken-3 waves-effect waves-light">Confirm</button>
                </div>
            </div>
        </form>
    )
}

function validate({ email, password }){
    const errors = {};

    if (!email){
        errors.email = 'Please enter an email';
    }

    if (!password){
        errors.password = 'Please enter a password';
    }

    return errors;
}

export default reduxForm({
    form: 'sign-in-form',
    validate: validate
})(SignInForm);
