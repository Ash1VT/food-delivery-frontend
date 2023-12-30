import React from 'react'
import { DividerProps } from '../types/divider.type'

const Divider = ({width, height, color, className} : DividerProps) => {
    className = className ? ` ${className}` : ''
    
    return (
        <div style={{width: width, height: height, backgroundColor: color}} className={`divider__container ${className}`}/>
    )
}

export default Divider