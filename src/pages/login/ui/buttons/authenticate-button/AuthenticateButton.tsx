import React from 'react'
import { LoginButtonProps } from 'src/pages/login/login_page.types'
import './authenticate_button.css'

const AuthenticateButton = ({onClick} : LoginButtonProps) => {
    return (
        <button className="button__wrapper authenticate__button" onClick={onClick}>Log in</button>
    )
}

export default AuthenticateButton