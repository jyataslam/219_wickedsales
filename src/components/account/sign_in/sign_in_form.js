import React from 'react';
import { reduxForm } from 'redux-form';
import SignIn from './sign_in';

const SignInForm = props => {
    return (
        <form>
            <h1>Form Goes Here</h1>
        </form>
    )
}

export default reduxForm({
    form: 'sign-in-form'
})(SignInForm);
