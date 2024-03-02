import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ArrowDirection, ArrowSliderProps } from './arrow_slider.types';
import './arrow_slider.css'

const ArrowSlider = ({arrow_direction} : ArrowSliderProps) => {

    const rotate_degree = function(direction: ArrowDirection): number {
        if (arrow_direction === ArrowDirection.Up)
            return -90
        if (arrow_direction === ArrowDirection.Down)
            return 90
        if (arrow_direction === ArrowDirection.Left)
            return 180
        return 0
    }(arrow_direction)

    return (
        <div className="arrow__slider__wrapper">
            <ArrowForwardIosIcon className="arrow__slider__icon" style={{transform: `rotate(${rotate_degree}deg)`}} viewBox='6 2 8 20'/>
        </div>
    )
}

export default ArrowSlider