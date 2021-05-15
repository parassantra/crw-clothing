import React, { Component } from 'react'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss'

class Signin extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                email:'',
                password:''
            })
        }catch(err){
            console.error(err);
        } 
    }

    handleChange =  e => {
        const {value, name} = e.target;
        this.setState({ [name]: value })
    }

    render() {
        const {email, password} = this.state;
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    value={email} 
                    type='email' 
                    handleChange={this.handleChange}
                    label='email' 
                    required
                    />
                    <FormInput 
                    name='password' 
                    value={password} 
                    type='password' 
                    handleChange={this.handleChange}
                    label='password' 
                    required 
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin
