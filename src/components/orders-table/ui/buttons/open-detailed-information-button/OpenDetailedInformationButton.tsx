import React from 'react'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { OpenDetailedInformationProps } from 'src/components/orders-table/orders_table.types';
import './open_detailed_information_button.css'

const OpenDetailedInformationButton = ({onClick} : OpenDetailedInformationProps) => {

    return (
        <button className="button__wrapper open__detailed__information__button" onClick={onClick}>
            <HelpOutlineIcon className="button__icon open__detailed__information__button__icon" viewBox='8 2 8 20'/>
        </button>
    )
}

export default OpenDetailedInformationButton