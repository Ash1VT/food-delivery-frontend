import React, { useState } from 'react'
import { DropdownSectionProps } from './dropdown_section.types';
import './dropdown_section.css'
import OpenDropdownContentButton from './ui/buttons/open-dropdown-content-button/OpenDropdownContentButton';

const DropdownSection = ({title, children} : DropdownSectionProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const buttonLabel = isOpen ? `Hide ${title}` : `Show ${title}`;
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="dropdown__section__container">
            <OpenDropdownContentButton label={buttonLabel} isContentOpen={isOpen} onClick={toggleDropdown} />
            {isOpen && (
                <div className='dropdown__section__content'>
                    {children}
                </div>
            )}
        </div>
    );
}

export default DropdownSection