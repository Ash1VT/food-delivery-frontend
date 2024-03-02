import { PushableButtonProps } from '../../../../types/buttons.types'

import './pushable_button.css'

const PushableButton = ({onClick, 
                         text,
                         edje_color,
                         content_color,
                         background_color,
                         font_family,
                         font_size,
                         font_weight,
                         left_side_elements = [], 
                         right_side_elements = []}: PushableButtonProps) => {
    return (
        <button className="button__pushable" role="button" onClick={onClick}>
            <span className="button__shadow"/>
            <span className="button__edge" style={{background: edje_color}}/>
            <span className="button__front" style={{color: content_color, background: background_color, fontFamily: font_family, fontSize: font_size, fontWeight: font_weight}}>
                {left_side_elements.map((Element) => <Element/>)}
                {text}
                {right_side_elements.map((Element) => <Element/>)}
            </span>
        </button>
    )
}

export default PushableButton