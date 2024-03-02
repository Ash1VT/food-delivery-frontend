import { LoginButtonProps } from '../../../../../types/button.types'
import PushableButton from '../../../../ui/buttons/pushable-button/PushableButton'
import PersonIcon from '@mui/icons-material/Person'

const LoginButton = ({onClick}: LoginButtonProps) => {
    return (
        <PushableButton onClick={onClick} 
                            text='Login'
                            edje_color='linear-gradient(93deg, #FFB800 -47.72%, #FF8A00 136.81%)'
                            content_color='#c29934'
                            background_color='#ffff'
                            font_family='Source Sans Pro'
                            font_size={18}
                            font_weight={700}
                            left_side_elements={[PersonIcon]}/>
    )
}

export default LoginButton