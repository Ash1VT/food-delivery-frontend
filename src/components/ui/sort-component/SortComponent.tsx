import React, { useState } from 'react'
import { SortComponentProps } from './sort_component.types';
import SortIcon from '@mui/icons-material/Sort';
import Popup from 'reactjs-popup';
import './sort_component.css'

const OpenSortButton = () => (
    <button className="button__wrapper open__sort__button__wrapper">
        <SortIcon className="button__icon open__sort__button__icon" viewBox='2 1 20 21'/>
        <p className="button__text open__sort__button__text">Sort</p>
    </button>
)

const SortComponent = ({ options, onSort } : SortComponentProps) => {
    const [sortOption, setSortOption] = useState(options[0].value);
  
    const handleSort = async () => {
        await onSort(sortOption)
    }
  
    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSortOption(e.target.value)
    }

    return (
        <div className="sort__container">
            <Popup arrow={false} position={["bottom center", "bottom left"]} trigger={OpenSortButton}>
                <div className="sort__wrapper">
                    <h3 className="sort__title">Sorting</h3>
                    <div className="sort__options__list">
                        {options.map((option) => (
                            <label key={option.value} className="sort__option">
                                <div className="sort__option__root">
                                    <input
                                    type="radio"
                                    id={option.value}
                                    name="sortOption"
                                    className="sort__option__control"
                                    value={option.value}
                                    checked={sortOption === option.value}
                                    onChange={handleOptionChange}
                                    />
                                    <div className="sort__option__style sort__option__circle"/>
                                </div>
                                <span className="sort__option__text">{option.label}</span>
                            </label>
                        ))}
                    </div>
                    <button className="button__wrapper button__text sort__confirm__button" onClick={handleSort}>Apply Sort</button>
                </div>
            </Popup>
        </div>
    )
}
  
export default SortComponent;