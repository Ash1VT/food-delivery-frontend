import { DividerProps } from './divider.type'
import "./divider.css"

const Divider = ({width, height, color, className} : DividerProps) => {
    className = className ? ` ${className}` : ''
    
    return (
        <div style={{width: width, height: height, backgroundColor: color}} className={`divider__container ${className}`}/>
    )
}

export default Divider