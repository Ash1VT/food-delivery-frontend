import { useState } from "react";
import { SearchComponentProps } from "./search_component.types";
import SearchIcon from "@mui/icons-material/Search";
import './search_component.css'

const SearchComponent = ({ searchPlaceholder, onSearch } : SearchComponentProps) => {
    const [query, setQuery] = useState('')
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setQuery(value)
    }
  
    const handleSearchClick = async () => {
        await onSearch(query)
    }
  
    return (
        <div className="search__container">
            <SearchIcon className="search__icon"/>
            <input
            type="text"
            className="search__input"
            placeholder={searchPlaceholder}
            value={query}
            onChange={handleInputChange}
            />
            <button className="search__button button__wrapper button__text" onClick={handleSearchClick}>Search</button>
        </div>
    )
}

export default SearchComponent;