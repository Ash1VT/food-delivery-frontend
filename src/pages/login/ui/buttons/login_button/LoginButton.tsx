import React from 'react'
import { LoginButtonProps } from 'src/pages/login/login_page.types'
import './login_button.css'

const LoginButton = ({onClick} : LoginButtonProps) => {
    return (
        <button className="button__wrapper login__button" onClick={onClick}>Log in</button>
    )
}

export default LoginButton