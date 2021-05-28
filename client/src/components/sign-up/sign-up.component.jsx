import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss'
import {signUpStart} from '../../redux/user/user.actions'
import { connect } from 'react-redux';


const SignUp = ({signUpStart}) => {

    const [userDetails, setUserDetails] = useState({displayName:'',email:'',password:'',confirmPassword:''})
    const {displayName, email, password, confirmPassword} = userDetails;
       

    const handleSubmit = async e =>{
        e.preventDefault();
        
        if(password !== confirmPassword){
            alert("password don't match")
        }

        try{
            signUpStart({email, password, displayName})
        } catch(error){
            console.error(error)
        }

    }

    const handleChange =  e => {
        const {value, name} = e.target;
        setUserDetails({ ...userDetails, [name]: value })
    }

    return (
        <div className='sign-up'>
            <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                    name='displayName' 
                    value={displayName} 
                    type='text' 
                    handleChange={handleChange}
                    label='Display Name' 
                    required
                />
                <FormInput 
                    name='email' 
                    value={email} 
                    type='email' 
                    handleChange={handleChange}
                    label='Email' 
                    required
                />
                <FormInput 
                    name='password' 
                    value={password} 
                    type='password' 
                    handleChange={handleChange}
                    label='Password' 
                    required 
                 />
                <FormInput 
                    name='confirmPassword' 
                    value={confirmPassword} 
                    type='password' 
                    handleChange={handleChange}
                    label='Confirm Password' 
                    required 
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>)
}

const mapDisPatchToProps = dispatch => ({
    signUpStart: (email, password, displayName) => dispatch(signUpStart(email, password, displayName))
})

export default connect(null, mapDisPatchToProps) (SignUp)
