import React, { useState } from 'react'
import { OpenSelectButtonProps, SelectComponentProps } from './select_component.types';
import SortIcon from '@mui/icons-material/Sort';
import Popup from 'reactjs-popup';
import './select_component.css'

const OpenSelectButton = ({openSelectButtonLabel} : OpenSelectButtonProps) => (
    <button className="button__wrapper open__select__button__wrapper">
        <SortIcon className="button__icon open__select__button__icon" viewBox='2 1 20 21'/>
        <p className="button__text open__select__button__text">{openSelectButtonLabel}</p>
    </button>
)

const SelectComponent = ({ options, openSelectButtonLabel, selectLabel, selectButtonLabel, onSelect } : SelectComponentProps) => {
    const [selectOption, setSelectOption] = useState(options[0].value);
  
    const handleSelect = async () => {
        await onSelect(selectOption)
    }
  
    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectOption(e.target.value)
    }

    return (
        <div className="select__container">
            <Popup arrow={false} position={["bottom center", "bottom left"]} trigger={OpenSelectButton({openSelectButtonLabel})}>
                <div className="select__wrapper">
                    <h3 className="select__title">{selectLabel}</h3>
                    <div className="select__options__list">
                        {options.map((option) => (
                            <label key={option.value} className="select__option">
                                <div className="select__option__root">
                                    <input
                                    type="radio"
                                    id={option.value}
                                    name="selectOption"
                                    className="select__option__control"
                                    value={option.value}
                                    checked={selectOption === option.value}
                                    onChange={handleOptionChange}
                                    />
                                    <div className="select__option__style select__option__circle"/>
                                </div>
                                <span className="select__option__text">{option.label}</span>
                            </label>
                        ))}
                    </div>
                    <button className="button__wrapper button__text select__confirm__button" onClick={handleSelect}>{selectButtonLabel}</button>
                </div>
            </Popup>
        </div>
    )
}
  
export default SelectComponent;