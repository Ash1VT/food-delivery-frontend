import { OpenAddingAddressButtonProps } from 'src/pages/profile/profile.types'
import './open_adding_address_button.css'

const OpenAddingAddressButton = ({onOpen} : OpenAddingAddressButtonProps) => {
    return (
        <button className="button__wrapper open__adding__address__button" onClick={onOpen}>
            Add new address
        </button>
    )
}

export default OpenAddingAddressButton