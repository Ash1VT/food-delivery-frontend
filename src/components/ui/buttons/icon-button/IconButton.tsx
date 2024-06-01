import { IconButtonProps } from 'src/pages/manager-panel/manager_panel.types'
import './icon_button.css'

const IconButton = ({Icon, className, onClick} : IconButtonProps) => {

    const classes = `button__wrapper icon__button ${className ? className : ''}`

    return (
        <button className={classes} onClick={onClick}>
            <Icon fontSize='medium' onMouseDown = {(e) => e.preventDefault()}/>
        </button>
    )
}

export default IconButton