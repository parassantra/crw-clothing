import React, { Component } from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss'

class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async e =>{
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        
        if(password !== confirmPassword){
            alert("password don't match")
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            createUserProfileDocument(user, {displayName})
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        } catch(error){
            console.error(error)
        }

    }

    handleChange =  e => {
        const {value, name} = e.target;
        this.setState({ [name]: value })
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='displayName' 
                        value={displayName} 
                        type='text' 
                        handleChange={this.handleChange}
                        label='Display Name' 
                        required
                    />
                    <FormInput 
                        name='email' 
                        value={email} 
                        type='email' 
                        handleChange={this.handleChange}
                        label='Email' 
                        required
                    />
                    <FormInput 
                        name='password' 
                        value={password} 
                        type='password' 
                        handleChange={this.handleChange}
                        label='Password' 
                        required 
                    />
                    <FormInput 
                        name='confirmPassword' 
                        value={confirmPassword} 
                        type='password' 
                        handleChange={this.handleChange}
                        label='Confirm Password' 
                        required 
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp
