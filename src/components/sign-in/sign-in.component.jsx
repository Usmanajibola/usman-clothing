import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            email:'',
            password:''
        }
    }

    handleSubmit =event =>{
        event.preventDefault();

        this.setState({password:'', email:''})
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]:value});

    }

    render() {
        return(
            <div className="sign-in">
                <h1>I already have an account?</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
               
                    <FormInput 
                    name="email" 
                    type="email" 
                    label="email"
                    handleChange={this.handleChange}
                    value={this.state.email} 
                    required 
                    />
                    
                   
                    <FormInput label="password" name="password" type="password" value={this.state.password} handleChange={this.handleChange} required />
                    
                    <div className="buttons">
                        <CustomButton type="submit" > Submit Here </CustomButton>
                        <CustomButton  onClick={signInWithGoogle} isGoogleSignIn> 
                
                        SIGN IN WITH GOOGLE 
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;