import Navbar from 'src/components/navbar';
import Footer from 'src/components/footer';
import RestaurantsList from './restaurants-list/RestaurantsList';
import { SelectComponentProps } from 'src/components/ui/select-component/select_component.types';
import { SearchComponentProps } from 'src/components/ui/search-component/search_component.types';
import SearchComponent from 'src/components/ui/search-component/SearchComponent';
import ReactPaginate from 'react-paginate';
import useMediaQuery from 'src/hooks/useMediaQuery';
import { useAppSelector } from 'src/hooks/redux/useAppSelector';
import SelectComponent from 'src/components/ui/select-component/SelectComponent';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch } from 'src/hooks/redux/useAppDispatch';
import { addErrorNotification } from 'src/utils/notifications';
import { fetchRestaurantsPage } from 'src/redux/actions/restaurants.actions';
import { getRestaurantsPage } from 'src/redux/selectors/restaurantsSelectors';
import './restaurants_page.css'
import LoadingPage from '../loading-page/LoadingPage';

const RestaurantsPage = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [pageNumber, setPageNumber] = useState(0)
    const [searchParams] = useSearchParams()

    const { isLoading: isCurrentUserLoading, currentUser, error: currentUserError } = useAppSelector((state) => state.currentUserReducer)

    const { isLoading: isRestaurantsLoading, error: restaurantsError } = useAppSelector((state) => state.restaurantsReducer)

    const restaurantsPage = useAppSelector((state) => getRestaurantsPage(state, pageNumber))

    const itemsOnPageCount = 6
    const limit = itemsOnPageCount
    const offset = pageNumber * limit

    const mb = useMediaQuery('(max-width: 450px)');
    const vs = useMediaQuery('(max-width: 360px)');
    

    useEffect(() => {
        const address = searchParams.get('address')
        dispatch(fetchRestaurantsPage(
            {
                address: address || undefined,
                limit,
                offset
            }
        )).then((result) => {
            if (result.type === 'currentUser/authenticate/rejected') {
                addErrorNotification(result.payload as string)
                return
            }
        })
    }, [pageNumber, dispatch])
    
    const options = [
        {
            label: 'Default',
            value: 'default'
        },
        {
            label: 'Rating',
            value: 'rating'
        },
    ]

    const handleSortApplied = async (query: string) => {
        if (query === 'rating') {
            dispatch(fetchRestaurantsPage(
                {
                    orderByRating: true,
                    limit,
                    offset
                }
            ))
        }

        if (query === 'default') {
            dispatch(fetchRestaurantsPage(
                {
                    limit,
                    offset
                }
            ))
        }
    }

    const handleSearchApplied = async (query: string) => {
        dispatch(fetchRestaurantsPage(
            {
                name: query,
                limit,
                offset
            }
        ))
    }

    const searchProps: SearchComponentProps = {
        searchPlaceholder: 'Search restaurant',
        onSearch: handleSearchApplied
    }

    const selectProps: SelectComponentProps = {
        options,
        openSelectButtonLabel: 'Sort by',
        selectLabel: 'Sort by',
        selectButtonLabel: 'Apply sort',
        onSelect: handleSortApplied
    }
    
    const handlePageClick = ({selected} : {selected: number}) => {
        setPageNumber(selected)
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

    if (isCurrentUserLoading || isRestaurantsLoading)
        return <LoadingPage/>

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
                    {
                        restaurantsPage ? (
                            <>
                            <RestaurantsList restaurants={restaurantsPage.items} onRestaurantClick={handleRestaurantClick}/>
                            <ReactPaginate breakLabel="..."
                                nextLabel=">"
                                initialPage={pageNumber}
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={getPageRangeDisplayed()}
                                marginPagesDisplayed={getMarginPagesDisplayed()}
                                pageCount={restaurantsPage.count / itemsOnPageCount}
                                previousLabel="<"
                                containerClassName='restaurants__pagination__container'
                                pageClassName='restaurants__pagination__page'
                                nextClassName='restaurants__pagination__next'
                                previousClassName='restaurants__pagination__previous'
                                activeClassName='restaurants__pagination__active'
                                disabledClassName='restaurants__pagination__disabled'
                                breakClassName='restaurants__pagination__break'
                                renderOnZeroPageCount={null}/>
                            </>
                        )
                        :
                        (
                            <div className='restaurants__no__restaurants__text'>
                                No restaurants found
                            </div>
                        )
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default RestaurantsPage;