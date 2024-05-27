import React from 'react'
import { RememberMeProps } from './remember_me.types'
import './remember_me.css'


const RememberMe = ({isRememberMe, setIsRememberMe} : RememberMeProps) => {
    return (
        <div className="remember__me__wrapper">
            <input type="checkbox" id="rememberMe" className="checkbox__round" name="rememberMe" checked={isRememberMe} onChange={() => setIsRememberMe(!isRememberMe)}/>
            <span className="remember__me__text">Remember me</span>
        </div>
    )
}

export default RememberMe