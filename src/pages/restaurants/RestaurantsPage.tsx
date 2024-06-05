import Navbar from 'src/components/navbar';
import Footer from 'src/components/footer';
import RestaurantsList from './restaurants-list/RestaurantsList';
import { SelectComponentProps } from 'src/components/ui/select-component/select_component.types';
import { SearchComponentProps } from 'src/components/ui/search-component/search_component.types';
import SearchComponent from 'src/components/ui/search-component/SearchComponent';
import ReactPaginate from 'react-paginate';
import useMediaQuery from 'src/hooks/useMediaQuery';
import { useAppSelector } from 'src/hooks/redux/useAppSelector';
import { getRestaurants } from '../../redux/selectors/restaurantSelectors';
import SelectComponent from 'src/components/ui/select-component/SelectComponent';
import { getCurrentUser } from 'src/redux/selectors/currentUserSelectors';
import { useNavigate } from 'react-router-dom';
import './restaurants_page.css'

const RestaurantsPage = () => {
    const navigate = useNavigate()
    const currentUser = useAppSelector(getCurrentUser)

    const restaurants = useAppSelector(getRestaurants)

    const mb = useMediaQuery('(max-width: 450px)');
    const vs = useMediaQuery('(max-width: 360px)');
    
    const options = [
        {
            label: 'Popularity',
            value: 'popularity'
        },
        {
            label: 'Popularit',
            value: 'popularit'
        }
    ]

    const searchProps: SearchComponentProps = {
        searchPlaceholder: 'Search restaurant',
        onSearch: async (query) => {console.log(query)}
    }

    const selectProps: SelectComponentProps = {
        options,
        openSelectButtonLabel: 'Sort by',
        selectLabel: 'Sort by',
        selectButtonLabel: 'Apply sort',
        onSelect: async (sortOption) => {console.log(sortOption)}
    }
    
    const handlePageClick = ({selected} : {selected: number}) => {
        console.log(selected)
    }

    const handleRestaurantClick = (restaurantId: string) => {
        navigate(`/restaurants/${restaurantId}/menu`)
    }

    const getPageRangeDisplayed = () => {
        if (mb || vs)
            return 0

        return 3
    }

    const getMarginPagesDisplayed = () => {
        if (vs)
            return 0

        return 1
    }

    return (
        <div className="container restaurants__container">
            <Navbar currentUser={currentUser}/>
            <div className="restaurants__wrapper">
                <div className="restaurants__content">
                    <div className="restaurants__header">
                        <h1 className="restaurants__title">Restaurants</h1>
                    </div>
                    <div className="restaurants__filters">
                        <div className='restaurants__search'>
                            <SearchComponent {...searchProps}/>
                        </div>
                        <SelectComponent {...selectProps}/>
                    </div>
                    <RestaurantsList restaurants={restaurants} onRestaurantClick={handleRestaurantClick}/>
                    <ReactPaginate breakLabel="..."
                                nextLabel=">"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={getPageRangeDisplayed()}
                                marginPagesDisplayed={getMarginPagesDisplayed()}
                                pageCount={20}
                                previousLabel="<"
                                containerClassName='restaurants__pagination__container'
                                pageClassName='restaurants__pagination__page'
                                nextClassName='restaurants__pagination__next'
                                previousClassName='restaurants__pagination__previous'
                                activeClassName='restaurants__pagination__active'
                                disabledClassName='restaurants__pagination__disabled'
                                breakClassName='restaurants__pagination__break'
                                renderOnZeroPageCount={null}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default RestaurantsPage;