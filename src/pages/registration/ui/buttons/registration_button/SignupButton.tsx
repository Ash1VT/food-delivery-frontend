import React from 'react'
import { SignupButtonProps } from 'src/pages/registration/registration_page.types'
import './signup_button.css'

const SignupButton = ({onClick} : SignupButtonProps) => {
    return (
        <button className="button__wrapper registration__button" onClick={onClick}>Sign up</button>
    )
}

export default SignupButton