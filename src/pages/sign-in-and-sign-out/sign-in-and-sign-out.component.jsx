import React from 'react';

import './sign-in-and-sign-out.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
const SignInAndSignupPage = () => (
    <div className="sing-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignupPage;