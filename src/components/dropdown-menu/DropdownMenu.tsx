import { useState } from "react";
import { DropdownMenuProps } from "./dropdown_menu.types";
import { Link } from "react-router-dom";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './dropdown_menu.css';

const DropdownMenu = ({ title, items } : DropdownMenuProps) => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)
  
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen)
    }
  
    return (
      <div className="dropdown__menu__container" onClick={toggleDropdown}>
        <button className="dropdown__menu__button">
            {title}
            <ArrowDownwardIcon className={`dropdown__menu__icon ${dropdownOpen ? 'dropdown__menu__icon__rotate' : ''}`}/>
        </button>
        <div className={`dropdown__menu__content ${dropdownOpen ? 'dropdown__menu__content__show' : ''}`}>
          {items.map((item, index) => (
            <Link key={index} to={item.path}>{item.label}</Link>
          ))}
        </div>
      </div>
    )
}

export default DropdownMenu;