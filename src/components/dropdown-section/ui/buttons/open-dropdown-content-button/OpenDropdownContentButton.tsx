import React from 'react'
import { OpenDropdownContentButtonProps } from 'src/components/dropdown-section/dropdown_section.types'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './open_dropdown_content_button.css'

const OpenDropdownContentButton = ({label, isContentOpen, onClick} : OpenDropdownContentButtonProps) => {
    return (
        <button className="button__wrapper open__dropdown__content__button" onClick={onClick}>
            {label}
            <ArrowDownwardIcon className={`open__dropdown__content__icon ${isContentOpen ? 'open__dropdown__content__icon__rotate' : ''}`}/>
        </button>
    )
}

export default OpenDropdownContentButton